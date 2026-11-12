const fs = require('fs');
const path = require('path');

const basePath = 'c:/Project/Angular/ccas_new/src/app/main';

for (let i = 1; i <= 6; i++) {
  const filePath = path.join(basePath, 'compressor' + i, 'compressor' + i + '.component.ts');
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // We need to replace the value: XXX inside chartOptions1 to chartOptions8 initializers.
  // We can do this by finding the block this.chartOptionsX = { ... } and replacing value: \d+ inside it.
  
  for (let c = 1; c <= 8; c++) {
    const chartKey = 'this.chartOptions' + c;
    const startIndex = content.indexOf(chartKey + ' = {');
    if (startIndex === -1) continue;
    
    // Find the end of this block, which is roughly before the next this.chartOptions
    let endIndex = content.indexOf('this.chartOptions' + (c+1) + ' = {', startIndex);
    if (endIndex === -1 && c === 8) {
        endIndex = content.indexOf('const value1 = 0;', startIndex);
        if (endIndex === -1) endIndex = startIndex + 1500; // rough fallback
    }
    if (endIndex === -1) continue;

    let block = content.substring(startIndex, endIndex);
    
    // determine the correct limit
    let limit = 100; // default for 6,7,8 (vibration)
    if (c >= 1 && c <= 4) {
      limit = 60; // temperature
    } else if (c === 5) {
      limit = i === 6 ? 105 : 300; // current
    }

    // replace value: \d+ inside this block
    block = block.replace(/value:\s*\d+,/g, 'value: ' + limit + ',');
    
    content = content.substring(0, startIndex) + block + content.substring(endIndex);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed compressor ' + i);
}
