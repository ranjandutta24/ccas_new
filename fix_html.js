const fs = require('fs');

// Apply the minimal necessary changes to each compressor HTML:
// 1. Replace <ng-container *ngIf="comX"> with <div *ngIf="comX">  (to avoid ng-container tag balance issues)
// 2. Add [class.disabled-page]="isStopped" to <div class="main-layout">
// 3. Replace </ng-container> (closing) with </div>

const compData = [
  { num: 1, ngIf: 'com1', motorKey: 'MOTOR_CURR_COMP1' },
  { num: 2, ngIf: 'com2', motorKey: 'MOTOR_CURR_COMP2' },
  { num: 3, ngIf: 'com3', motorKey: 'MotorCurrent' },
  { num: 4, ngIf: 'com4', motorKey: 'MOTOR_CURR_COMP4' },
  { num: 5, ngIf: 'com5', motorKey: 'MOTOR_CURR_COMP5' },
  { num: 6, ngIf: 'com6', motorKey: 'MOTOR_CURR_COMP6' },
];

for (const { num, ngIf } of compData) {
  const f = `c:/Project/Angular/ccas_new/src/app/main/compressor${num}/compressor${num}.component.html`;
  let content = fs.readFileSync(f, 'utf8');
  
  // 1. Replace ng-container opening with div
  content = content.replace(
    `<ng-container *ngIf="${ngIf}">`,
    `<div *ngIf="${ngIf}">`
  );
  
  // 2. Add disabled-page class binding to main-layout
  content = content.replace(
    '<div class="main-layout">',
    '<div class="main-layout" [class.disabled-page]="isStopped">'
  );
  
  // 3. Replace the closing </ng-container> with </div>
  content = content.replace('</ng-container>', '</div>');
  
  fs.writeFileSync(f, content);
  
  // Verify
  const c2 = fs.readFileSync(f, 'utf8');
  const open = (c2.match(/<div[\s>]/g)||[]).length;
  const close = (c2.match(/<\/div>/g)||[]).length;
  const openNg = (c2.match(/<ng-container/g)||[]).length;
  const closeNg = (c2.match(/<\/ng-container>/g)||[]).length;
  const lines = c2.split('\n').length;
  console.log(`Comp${num}: ${lines} lines | div diff=${open-close} | ng diff=${openNg-closeNg}`);
}

console.log('Done!');
