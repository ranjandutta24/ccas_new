import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexAxisChartSeries,
  ApexGrid,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexStroke,
  ApexXAxis,
  ApexNonAxisChartSeries,
  ApexFill,
} from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { SseService } from 'src/app/service/sse.servece';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

export type ChartROptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-compressor1',
  templateUrl: './compressor1.component.html',
  styleUrls: ['./compressor1.component.scss'],
})
export class Compressor1Component implements OnInit {
  @ViewChild('chart1') chart1!: ChartComponent;
  @ViewChild('chart2') chart2!: ChartComponent;
  @ViewChild('chart3') chart3!: ChartComponent;
  @ViewChild('chart4') chart4!: ChartComponent;
  @ViewChild('chart5') chart5!: ChartComponent;
  @ViewChild('chart6') chart6!: ChartComponent;
  @ViewChild('chart7') chart7!: ChartComponent;
  @ViewChild('chart8') chart8!: ChartComponent;
  @ViewChild('chart9') chart9!: ChartComponent;
  @ViewChild('chart10') chart10!: ChartComponent;
  @ViewChild('chart11') chart11!: ChartComponent;
  @ViewChild('chart12') chart12!: ChartComponent;

  activeSection: string = 'section1';
  public chartOptions1: ChartOptions;
  public chartOptions2: ChartOptions;
  public chartOptions3: ChartOptions;
  public chartOptions4: ChartOptions;
  public chartOptions5: ChartOptions;
  public chartOptions6: ChartOptions;
  public chartOptions7: ChartOptions;
  public chartOptions8: ChartOptions;

  // public chartROptions1: ChartOptions;
  public chartROptions1: ChartROptions;
  public chartROptions2: ChartROptions;
  public chartROptions3: ChartROptions;
  public chartROptions4: ChartROptions;

  com1: any;
  // {"DT_Stamp":"2025-10-07T06:39:00.000Z","InletValvePos":0,"BypassValvePos":100,"POPRunning":1,"LubeOilTemp":1,"":0,"MOTOR_CURR_COMP1":0,"":103,"PressureSetPoint":102,"":-14,"InletAirTempStage2":85,"InletAirTemStage":83,"DischargeAirTemp":86,"VibrationStage1":0,"VibrationStage2":0,"VibrationStage3":0,"CommonTrip":0,"CommonAlarm":0,"RUNHRCOMP1":918}

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }
  private sseSub?: Subscription;

  constructor(private sseService: SseService) {
    const baseChartOptions = {
      chart: {
        height: 84,
        // width: 300,
        type: 'bar',
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
        animations: {
          enabled: false,
        },
      } as ApexChart,
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#208705'],
      dataLabels: {
        formatter: function (val: any, opts: any) {
          const goals =
            opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
              .goals;

          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`;
          }
          return val;
        },
      },
      legend: {
        show: true,
        position: 'right',
        showForSingleSeries: true,
        customLegendItems: ['Current', 'Limit'],
        markers: {
          fillColors: ['#208705', '#775DD0'],
        },
      } as ApexLegend,
    };

    this.chartOptions1 = {
      ...baseChartOptions,

      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions2 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 200,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions3 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 250,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions4 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 15,
              goals: [
                {
                  name: 'Expected',
                  value: 250,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions5 = {
      ...baseChartOptions,

      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions6 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 200,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions7 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 134,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions8 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: 124,
              goals: [
                {
                  name: 'Expected',
                  value: 100,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };

    const value1 = 0.14;
    const max1 = 100;
    const percent1 = (value1 / max1) * 100;

    this.chartROptions1 = {
      series: [percent1], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        height: 200,
        // height: 200,
        // width: 300,
      },
      title: {
        text: 'Lube Oil Temperature', // 👈 Chart title
        align: 'center', // left | center | right
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      plotOptions: {
        radialBar: {
          hollow: { size: '40%' },
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value1} / ${max1}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent1 > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };

    const value2 = 0;
    const max2 = 250;
    const percent2 = (value2 / max2) * 100;

    this.chartROptions2 = {
      series: [percent2], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        height: 200,
        // width: 300,
      },
      title: {
        text: 'Lube Oil Temperature', // 👈 Chart title
        align: 'center', // left | center | right
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value2} / ${max2}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent2 > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };

    const value3 = 0;
    const max3 = 30000;
    const percent3 = (value3 / max3) * 100;
    this.chartROptions3 = {
      series: [percent3], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        height: 200,
        // width: 300,
      },
      title: {
        text: 'Lube Oil Temperature', // 👈 Chart title
        align: 'center', // left | center | right
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value3} / ${max3}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent3 > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };

    const value = 0;
    const max = 100000;
    const percent = (value / max) * 100;

    this.chartROptions4 = {
      series: [percent], // Apex needs % fill
      chart: {
        type: 'radialBar',
        offsetY: -20,
        height: 200,
        // width: 300,
      },
      title: {
        text: 'Lube Oil Temperature', // 👈 Chart title
        align: 'center', // left | center | right
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e7e7e7',
            strokeWidth: '97%',
            margin: 5,
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              opacity: 0.31,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: '18px',
              formatter: () => `${value} / ${max}`, // show absolute instead of %
            },
          },
        },
      },
      fill: {
        colors: [percent > 70 ? '#FF0000' : '#00B050'], // red if >70%, else green
      },
      labels: ['Average Results'],
    };
  }

  ngOnInit(): void {
    this.sseSub = this.sseService.getSSEComp('comp1').subscribe((data: any) => {
      this.com1 = data;
      // console.log(this.com1['MOTOR_CURR_COMP1']);

      this.updateChart('chartOptions1', this.com1['LubeOilTemp'], 600);
      this.updateChart('chartOptions2', this.com1['DischargeAirTemp'], 600);
      this.updateChart('chartOptions3', this.com1['InletAirTemStage'], 250);
      this.updateChart('chartOptions4', this.com1['InletAirTempStage2'], 250);

      this.updateChart('chartOptions5', this.com1['MOTOR_CURR_COMP1'], 600);
      this.updateChart('chartOptions6', this.com1['VibrationStage1'], 100);
      this.updateChart('chartOptions7', this.com1['VibrationStage2'], 100);
      this.updateChart('chartOptions8', this.com1['VibrationStage3'], 100);

      this.updateRadialChart('chartROptions1', this.com1['LubeOilPressure'], 100);
      this.updateRadialChart('chartROptions2', this.com1['SystemPressure'], 250);
      this.updateRadialChart('chartROptions3', this.com1['AirFlow'], 30000);
      this.updateRadialChart('chartROptions4', this.com1['RUNHRCOMP1'], 100000);

      // this.igcaFlow = parseInt(data.IGCA_FLOW);
    });
  }

  private updateRadialChart(
    chartKey: 'chartROptions1' | 'chartROptions2' | 'chartROptions3' | 'chartROptions4',
    value: number,
    max: number
  ): void {
    const percent = (value / max) * 100;
    const currentOptions = this[chartKey] as any;
    this[chartKey] = {
      ...currentOptions,
      series: [percent], // Apex expects % fill (0–100)
      plotOptions: {
        ...currentOptions.plotOptions,
        radialBar: {
          ...currentOptions.plotOptions?.radialBar,
          dataLabels: {
            ...currentOptions.plotOptions?.radialBar?.dataLabels,
            value: {
              ...currentOptions.plotOptions?.radialBar?.dataLabels?.value,
              formatter: () => `${value} / ${max}`, // display actual numbers
            },
          },
        },
      },
      fill: {
        ...currentOptions.fill,
        colors: [percent > 70 ? '#FF0000' : '#00B050'], // dynamic color
      },
    };
  }

  private updateChart(
    chartKey: 'chartOptions1' | 'chartOptions2' | 'chartOptions3' | 'chartOptions4' | 'chartOptions5' | 'chartOptions6' | 'chartOptions7' | 'chartOptions8',
    value: number,
    limit: number
  ): void {
    this[chartKey] = {
      ...this[chartKey],
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: '',
              y: value,
              goals: [
                {
                  name: 'Expected',
                  value: limit,
                  strokeWidth: 5,
                  strokeColor: '#BD4CC7',
                },
              ],
            },
          ],
        },
      ],
    };
  }

  ngOnDestroy(): void {
    if (this.sseSub) {
      this.sseSub.unsubscribe();
    }
  }
}
