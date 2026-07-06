const fs = require('fs');
const path = require('path');
const https = require('https');

const targetPublicDir = path.join(__dirname, 'public');

if (!fs.existsSync(targetPublicDir)) {
    fs.mkdirSync(targetPublicDir);
}

const imagesToDownload = [
    { url: 'https://www.goldenmanpower.com/assets/images/new-images/logo.png', dest: 'gmc-logo1.png' },
    { url: 'https://www.goldenmanpower.com/assets/images/new-images/gmc-1.png', dest: 'gmc-logo2.png' },
    { url: 'https://www.goldenmanpower.com/assets/images/new-images/logo-5-light.png', dest: 'header-bg.png' }, // Fallback bg
    { url: 'https://www.goldenmanpower.com/assets/images/new-images/logo.png', dest: 'LOGO-200x200.jpeg' } // Fallback
];

function download(item) {
    return new Promise((resolve) => {
        https.get(item.url, { rejectUnauthorized: false }, (res) => {
            if (res.statusCode === 200) {
                const stream = fs.createWriteStream(path.join(targetPublicDir, item.dest));
                res.pipe(stream);
                stream.on('finish', () => {
                    stream.close();
                    console.log(`[Downloaded] ${item.dest} from live site!`);
                    resolve(true);
                });
            } else {
                console.log(`[Failed] ${item.dest} (Status: ${res.statusCode})`);
                resolve(false);
            }
        }).on('error', (err) => {
            console.log(`[Error] ${item.dest}: ${err.message}`);
            resolve(false);
        });
    });
}

async function run() {
    console.log("Downloading GMC images from live site...");
    for (const item of imagesToDownload) {
        await download(item);
    }
}

run();
