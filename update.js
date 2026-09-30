const fs = require('fs');
const path = require('path');
const dir = 'c:/Project/Angular/ccas_new/src/app/main';
for (let i = 1; i <= 6; i++) {
    const file = path.join(dir, 'compressor' + i, 'compressor' + i + '.component.ts');
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // 1. animations in baseChartOptions
    content = content.replace(/animations:\s*\{\s*enabled:\s*false,?\s*\}/g, 'animations: { enabled: false, dynamicAnimation: { enabled: false } }');
    
    // 2. animations in radial charts
    content = content.replace(/type:\s*'radialBar',(\s*)offsetY:\s*-20,/g, 'type: \'radialBar\',$1offsetY: -20,$1animations: { enabled: false, dynamicAnimation: { enabled: false } },');
    
    // 3. updateChart xaxis
    let updateChartIdx = content.indexOf('private updateChart(');
    if (updateChartIdx !== -1) {
        let endIdx = content.indexOf('};', updateChartIdx);
        if (endIdx !== -1) {
            let part1 = content.substring(0, endIdx);
            let part2 = content.substring(endIdx);
            if (!part1.includes('xaxis:')) {
                content = part1 + '  xaxis: { min: 0, max: limit, tickAmount: 5 },\n    ' + part2;
            }
        }
    }
    
    // 4. limits
    content = content.replace(/(this\.updateChart\('chartOptions1',\s*this\.com\d\['LubeOilTemp'\],\s*)\d+(\);)/g, '$1' + 60 + '$2');
    content = content.replace(/(this\.updateChart\('chartOptions2',\s*this\.com\d\['DischargeAirTemp'\],\s*)\d+(\);)/g, '$1' + 60 + '$2');
    content = content.replace(/(this\.updateChart\('chartOptions3',\s*this\.com\d\['InletAirTemStage'\],\s*)\d+(\);)/g, '$1' + 60 + '$2');
    content = content.replace(/(this\.updateChart\('chartOptions4',\s*this\.com\d\['InletAirTempStage2'\],\s*)\d+(\);)/g, '$1' + 60 + '$2');
    content = content.replace(/(this\.updateChart\('chartOptions3',\s*this\.com\d\['InletAirTempStage'\],\s*)\d+(\);)/g, '$1' + 60 + '$2');
    content = content.replace(/(this\.updateChart\('chartOptions4',\s*this\.com\d\['InletAirTempStage3'\],\s*)\d+(\);)/g, '$1' + 60 + '$2'); 
    
    let motorLimit = i === 6 ? 105 : 60;
    content = content.replace(/(this\.updateChart\('chartOptions5',\s*this\.com\d\['MOTOR_CURR_COMP\d'\],\s*)\d+(\);)/g, '$1' + motorLimit + '$2');
    
    fs.writeFileSync(file, content, 'utf8');
}
