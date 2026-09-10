const fs = require('fs');

const scssContent = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

:host {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
  background-color: #0b1120; /* Deep navy/black 3D background */
  font-family: 'Poppins', sans-serif;
}

.main-layout {
  display: flex;
  flex-direction: row;
  gap: 16px;
  height: 100%;
  flex: 1;
  background-color: transparent;
  min-height: 0;
  min-width: 0;
}

.left-panel {
  flex: 3;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  padding-right: 5px;
}

.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  gap: 16px;
}

.bar1,
.bar2 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 16px;
  flex: 1;
  min-height: 0;
}

.radial {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 16px;
  flex: 1.2;
  min-height: 0;
}

/* ── Base Card Styles (3D Glassmorphism) ─────────────────────────────── */
.each4th,
.each4thr,
:host ::ng-deep .table-container {
  width: 100%;
  height: 100%;
  min-height: 0;
  min-width: 0;
  padding: 8px 10px;
  border-radius: 12px;
  /* Dark neumorphic base */
  background: #151e32; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4); 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  transition: all 0.3s ease;
  /* Make the border more prominent to separate cards visually */
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.each4thr {
  position: relative;
}

.each_g1 {
  width: 100%;
  min-width: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  overflow: hidden;
}

.each4th:hover,
.each4thr:hover,
:host ::ng-deep .table-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* ── COLOR COMBINATIONS (3D Vivid Theme) ──────── */

/* Bar 1 Colors (Top Row) - Glossy Gradients */
.bar1 > .each4th:nth-child(1) {
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
  border-top: 4px solid #3b82f6;
}
.bar1 > .each4th:nth-child(2) {
  background: linear-gradient(135deg, #064e3b 0%, #0f172a 100%);
  border-top: 4px solid #10b981;
}
.bar1 > .each4th:nth-child(3) {
  background: linear-gradient(135deg, #78350f 0%, #0f172a 100%);
  border-top: 4px solid #f59e0b;
}
.bar1 > .each4th:nth-child(4) {
  background: linear-gradient(135deg, #7f1d1d 0%, #0f172a 100%);
  border-top: 4px solid #ef4444;
}

/* Radial Colors (Middle Row) - Dark Cards with Glowing Borders */
.radial > .each4thr:nth-child(1) {
  border-top: 4px solid #f43f5e;
}
.radial > .each4thr:nth-child(2) {
  border-top: 4px solid #14b8a6;
}
.radial > .each4thr:nth-child(3) {
  border-top: 4px solid #6366f1;
}

/* Bar 2 Colors (Bottom Row) */
.bar2 > .each4th:nth-child(1) {
  border-top: 4px solid #eab308;
}
.bar2 > .each4th:nth-child(2) {
  border-top: 4px solid #0ea5e9;
}
.bar2 > .each4th:nth-child(3) {
  border-top: 4px solid #ec4899;
}
.bar2 > .each4th:nth-child(4) {
  border-top: 4px solid #10b981;
}

/* Table Colors (Right Panel) */
.table_con > .table-container:nth-child(1) {
  border-top: 4px solid #3b82f6;
}
.table_con > .table-container:nth-child(2) {
  border-top: 4px solid #8b5cf6;
}


/* ── Titles ──────────────────────────────────── */
.unit {
  color: #f8fafc;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 4px 0 !important;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.unitr {
  position: static;
  text-align: center;
  padding-right: 0px;
  color: #f8fafc;
}

.table_con {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: stretch;
  margin-top: 0 !important;
  flex: 1;
  min-height: 0;
}

/* ── Apex chart overrides for Dark Mode ────────────────────── */
:host ::ng-deep .apexcharts-canvas,
:host ::ng-deep .apexcharts-svg {
  margin-top: 0;
  background: transparent !important;
  height: 100% !important;
  width: 100% !important;
}

:host ::ng-deep .apexcharts-legend {
  padding-left: 0 !important;
}
:host ::ng-deep .apexcharts-legend-text {
  color: #cbd5e1 !important;
}

:host ::ng-deep .apexcharts-text,
:host ::ng-deep .apexcharts-xaxis-label,
:host ::ng-deep .apexcharts-yaxis-label {
  fill: #94a3b8 !important;
  font-size: clamp(7px, 1vh, 11px) !important;
}

:host ::ng-deep .apexcharts-datalabel-value {
  fill: #ffffff !important;
  font-size: clamp(10px, 1.5vh, 16px) !important;
  font-weight: 700 !important;
}
:host ::ng-deep .apexcharts-datalabel-name {
  fill: #94a3b8 !important;
}

:host ::ng-deep .apexcharts-gridline {
  stroke: rgba(255, 255, 255, 0.05) !important;
}

/* ── Table cards specific styling (Dark 3D Mode) ─────────────── */
:host ::ng-deep .table-container {
  padding: 0; /* Remove padding so header touches edges */
}

:host ::ng-deep .table-container .overview_parameter_column,
:host ::ng-deep .table-container .overview_value_column {
  background: rgba(0, 0, 0, 0.2) !important;
  color: #e2e8f0 !important;
  border-right: 1px solid rgba(255, 255, 255, 0.05) !important;
  min-width: auto !important;
  width: auto !important;
  text-align: left !important;
  font-size: clamp(9px, 1.5vh, 13px) !important;
  font-weight: 700;
  padding: min(0.6vh, 6px) min(1vw, 10px) !important;
}

:host ::ng-deep .table-container .overview_value_column {
  text-align: center !important;
  border-right: none !important;
}

:host ::ng-deep .table-container table {
  width: 100%;
  min-height: 100%;
  border-collapse: collapse;
}

:host ::ng-deep .table-container thead {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

:host ::ng-deep .table-container table,
:host ::ng-deep .table-container tr,
:host ::ng-deep .table-container td {
  background: transparent !important;
}

:host ::ng-deep .table-container th {
  background: transparent !important;
}

:host ::ng-deep .table-container th,
:host ::ng-deep .table-container td {
  padding: min(0.3vh, 3px) min(1vw, 10px);
  font-size: clamp(8px, 1.2vh, 11px);
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-family: 'Poppins', sans-serif;
  color: #cbd5e1;
}

:host ::ng-deep .table-container th:last-child {
  border-right: none;
  text-align: center;
}

:host ::ng-deep .table-container .th-inner {
  display: flex;
  align-items: center;
  gap: 6px;
}

:host ::ng-deep .table-container tbody tr {
  transition: background-color 0.2s;
}

:host ::ng-deep .table-container tbody tr:last-child td {
  border-bottom: none;
}

:host ::ng-deep .table-container tbody tr:hover {
  background-color: rgba(255, 255, 255, 0.05) !important;
}

:host ::ng-deep .table-container td:last-child {
  border-right: none;
  font-weight: 600;
  text-align: center;
}

:host ::ng-deep .table-container .parameter-cell {
  font-size: clamp(8px, 1.2vh, 12px);
  color: #cbd5e1;
  font-weight: 500;
  line-height: 1.1;
}

:host ::ng-deep .table-container .data-value {
  display: inline-block;
  padding: min(0.2vh, 2px) min(0.8vw, 8px);
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #38bdf8; /* Glowing blue data text */
  border: 1px solid rgba(56, 189, 248, 0.3);
  font-weight: 700;
  font-size: clamp(8px, 1.2vh, 11px);
}

:host ::ng-deep .table-container .highlight-value {
  background-color: rgba(239, 68, 68, 0.15);
  color: #fca5a5;
  border-color: rgba(239, 68, 68, 0.4);
}

/* ── Entrance Animations ─────────────────────────────── */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.bar1 > div, .radial > div, .bar2 > div, .table_con > div {
    animation: fadeInUp 0.4s ease-out backwards;
}

.bar1 > div:nth-child(1) { animation-delay: 0.05s; }
.bar1 > div:nth-child(2) { animation-delay: 0.1s; }
.bar1 > div:nth-child(3) { animation-delay: 0.15s; }
.bar1 > div:nth-child(4) { animation-delay: 0.2s; }

.radial > div:nth-child(1) { animation-delay: 0.25s; }
.radial > div:nth-child(2) { animation-delay: 0.3s; }
.radial > div:nth-child(3) { animation-delay: 0.35s; }

.bar2 > div:nth-child(1) { animation-delay: 0.4s; }
.bar2 > div:nth-child(2) { animation-delay: 0.45s; }
.bar2 > div:nth-child(3) { animation-delay: 0.5s; }
.bar2 > div:nth-child(4) { animation-delay: 0.55s; }

.table_con > div:nth-child(1) { animation-delay: 0.6s; }
.table_con > div:nth-child(2) { animation-delay: 0.65s; }

/* ── Loader ─────────────────────────────── */
.comp-loader-wrapper {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0b1120;
  z-index: 50;
}
.comp-loader-ring {
  width: 60px; height: 60px;
  border-radius: 50%;
  border: 4px solid rgba(56, 189, 248, 0.1);
  border-top-color: #38bdf8;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}
@keyframes spin { 100% { transform: rotate(360deg); } }

.comp-loader-title {
  color: #f8fafc; font-size: 18px; font-weight: 600; margin-bottom: 5px;
}
.comp-loader-subtitle {
  color: #94a3b8; font-size: 14px;
}

/* ── Stopped State ─────────────────────────────── */
.disabled-page {
  opacity: 0.6;
  pointer-events: none;
  filter: grayscale(80%) brightness(0.8);
  transition: all 0.3s ease;
}
`;

for (let i = 1; i <= 6; i++) {
  const f = 'c:/Project/Angular/ccas_new/src/app/main/compressor' + i + '/compressor' + i + '.component.scss';
  fs.writeFileSync(f, scssContent);
  console.log('Updated ' + f);
}
