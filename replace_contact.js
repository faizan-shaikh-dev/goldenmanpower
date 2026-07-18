const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

function findAndReplace(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            findAndReplace(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            const replacements = [
                { match: /cv@goldenmanpower\.com/g, replace: 'mashaallah551@yahoo.com.in' },
                { match: /info@goldenmanpower\.com/g, replace: 'mashaallah551@yahoo.com.in' },
                { match: /hruae@goldenmanpower\.com/g, replace: 'mashaallah551@yahoo.com.in' },
                { match: /\+91 97696 29783/g, replace: '022-4002-9606' },
                { match: /\+919769629783/g, replace: '02240029606' }
            ];

            for (const r of replacements) {
                if (r.match.test(content)) {
                    content = content.replace(r.match, r.replace);
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated contact info: ${fullPath}`);
            }
        }
    }
}

findAndReplace(directoryPath);
console.log("Contact replacement complete.");
