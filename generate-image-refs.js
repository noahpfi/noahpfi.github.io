const fs = require('fs');
const path = require('path');

const assetsPath = path.join(__dirname, 'assets');
const files = fs.readdirSync(assetsPath);

let html = files
  .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) // Filter image files
  .map(file => `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card border-0 shadow-sm h-100">
        <img src="assets/${file}" class="card-img-top" alt="${file}">
      </div>
    </div>
  `)
  .join('\n');

html = `
<div class="row g-3">
  ${html}
</div>
`;

fs.writeFileSync(path.join(__dirname, 'images.html'), html);
console.log('HTML snippet generated in images.html');
