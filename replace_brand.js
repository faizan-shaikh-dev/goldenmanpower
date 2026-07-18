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

            if (content.includes('Golden Manpower Consultant')) {
                content = content.replace(/Golden Manpower Consultants/g, 'Masha Allah Tours & Travels');
                content = content.replace(/Golden Manpower Consultant/g, 'Masha Allah Tours & Travels');
                content = content.replace(/Golden Manpower/g, 'Masha Allah Tours & Travels'); // in case there's just "Golden Manpower"
                modified = true;
            } else if (content.includes('Golden Manpower')) {
                content = content.replace(/Golden Manpower/g, 'Masha Allah Tours & Travels');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

findAndReplace(directoryPath);
console.log("Replacement complete.");
