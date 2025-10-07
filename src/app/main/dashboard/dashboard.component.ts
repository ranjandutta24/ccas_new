import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
} from 'ng-apexcharts';
import { SseService } from 'src/app/service/sse.servece';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  colors: string[];
};

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  colors: string[];
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
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
  @ViewChild('lineChart') lineChart!: ChartComponent;
  @ViewChild('lineChart2') lineChart2!: ChartComponent;

  igcaFlow: number = 0;
  igcaPresser: number = 0;
  pgcaFlow: number = 0;
  pgcaPresser: number = 0;
  AI_6_COMP1: number = 0;
  AI_6_COMP2: number = 0;
  AI_6_COMP3: number = 0;
  AI_6_COMP4: number = 0;
  AI_6_COMP5: number = 0;
  AI_6_COMP6: number = 0;

  MOTOR_CURR_COMP1: number = 0;
  MOTOR_CURR_COMP2: number = 0;
  MOTOR_CURR_COMP3: number = 0;
  MOTOR_CURR_COMP4: number = 0;
  MOTOR_CURR_COMP5: number = 0;
  MOTOR_CURR_COMP6: number = 0;

  private sseSub?: Subscription;
  private ssetr?: Subscription;
  public chartOptions: ChartOptions;
  public chartOptions1: ChartOptions;
  public chartOptions2: ChartOptions;
  public chartOptions3: ChartOptions;
  public chartOptions4: ChartOptions;
  public chartOptions5: ChartOptions;
  public chartOptions6: ChartOptions;

  public chartOptions7: ChartOptions;
  public chartOptions8: ChartOptions;
  public chartOptions9: ChartOptions;
  public chartOptions10: ChartOptions;
  public chartOptions11: ChartOptions;
  public chartOptions12: ChartOptions;
  public lineChartOptions: LineChartOptions;
  public lineChartOptions2: LineChartOptions;

  active_compath = './../../../assets/on.gif';
  deactive_compath = './../../../assets/off.gif';
  // active_compath = './../../../assets/compressor_running_with_smoke.gif';
  // deactive_compath = './../../../assets/compressor (1).png';
  trendData = [];

  constructor(private sseService: SseService) {
    const baseChartOptions = {
      chart: {
        height: 110,
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
      colors: ['#008FFB'],
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
        showForSingleSeries: true,
        customLegendItems: ['Current', 'Limit'],
        markers: {
          fillColors: ['#008FFB', '#BD4CC7'],
        },
      },
    };

    this.chartOptions = {
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: this.MOTOR_CURR_COMP1,
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
      chart: {
        height: 105,
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
          enabled: false, // Disable animations to reduce flickering
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      colors: ['#008FFB'],
      dataLabels: {
        formatter: function (val: any, opts) {
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
        showForSingleSeries: true,
        customLegendItems: ['Current', 'Limit'],
        markers: {
          fillColors: ['#008FFB', '#BD4CC7'],
        },
      },
    };

    this.chartOptions1 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: this.MOTOR_CURR_COMP1,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#BD4CC7',
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
              x: 'Current Amp',
              y: this.MOTOR_CURR_COMP2,

              goals: [
                {
                  name: 'Expected',
                  value: 21000,
                  strokeWidth: 5,
                  strokeColor: '#BD4CC7',
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
              x: 'Current Amp',
              y: this.MOTOR_CURR_COMP3,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#BD4CC7',
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
              x: 'Current Amp',
              y: this.MOTOR_CURR_COMP4,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#BD4CC7',
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
              x: 'Current Amp',
              y: this.MOTOR_CURR_COMP5,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#BD4CC7',
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
              x: 'Current Amp',
              y: this.MOTOR_CURR_COMP6,
              goals: [
                {
                  name: 'Expected',
                  value: 600,
                  strokeWidth: 5,
                  strokeColor: '#BD4CC7',
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
              x: 'Current Amp',
              y: this.AI_6_COMP1,
              goals: [
                {
                  name: 'Expected',
                  value: 21000,
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
              x: 'Current Amp',
              y: this.AI_6_COMP2,
              goals: [
                {
                  name: 'Expected',
                  value: 21000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions9 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: this.AI_6_COMP3,
              goals: [
                {
                  name: 'Expected',
                  value: 21000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions10 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: this.AI_6_COMP4,
              goals: [
                {
                  name: 'Expected',
                  value: 21000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions11 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: this.AI_6_COMP5,
              goals: [
                {
                  name: 'Expected',
                  value: 21000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };
    this.chartOptions12 = {
      ...baseChartOptions,
      series: [
        {
          name: 'Actual',
          data: [
            {
              x: 'Current Amp',
              y: this.AI_6_COMP6,
              goals: [
                {
                  name: 'Expected',
                  value: 21000,
                  strokeWidth: 5,
                  strokeColor: '#775DD0',
                },
              ],
            },
          ],
        },
      ],
    };

    this.lineChartOptions = {
      series: [
        {
          name: 'IGCA Flow',
          data: [],
        },
        {
          name: 'PGCA FLow',
          data: [],
        },
      ],
      chart: {
        height: 350,
        width: 900,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#fff',
          opacity: 0.9,
        },
        offsetY: -10,
        formatter: function (val: any, opts: any) {
          const index = opts.dataPointIndex;
          // Show only 1 out of 10 points
          return index % 9 === 0 ? val : '';
        },
      },
      stroke: {
        curve: 'straight',
        width: 2,
        colors: ['#008FFB', '#BD4CC7'],
      },
      title: {
        text: 'IGCA and PGCA Flow',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
        title: {
          text: 'Time',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238',
          },
        },
        labels: {
          hideOverlappingLabels: true,
          // formatter: function (value: string, timestamp: any, opts: any) {
          //   const index = opts?.i; // ApexCharts passes category index in opts.i
          //   return index % 10 === 0 ? value : '';
          // },
        },
      },
      yaxis: {
        title: {
          text: 'Nm3/Hr',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238',
          },
        },
        min: 15,
        max: 35,
      },
      colors: ['#008FFB', '#BD4CC7'],
    };
    this.lineChartOptions2 = {
      series: [
        {
          name: 'IGCA Pressure',
          data: [],
        },
        {
          name: 'PGCA Pressure',
          data: [],
        },
      ],
      chart: {
        height: 350,
        width: 900,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontWeight: 'bold',
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          padding: 4,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#fff',
          opacity: 0.9,
        },
        offsetY: -10,
        formatter: function (val: any, opts: any) {
          const index = opts.dataPointIndex;
          // Show only 1 out of 10 points
          return index % 9 === 0 ? val : '';
        },
      },
      stroke: {
        curve: 'straight',
        width: 3,
        colors: ['#008FFB', '#BD4CC7'],
      },
      title: {
        text: 'IGCA and PGCA Pressure',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#263238',
        },
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
        title: {
          text: 'Time',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238',
          },
        },
      },
      yaxis: {
        title: {
          text: 'kg/cm2',
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#263238',
          },
        },
        min: 6.3,
        max: 7.2,
      },
      colors: ['#008FFB', '#BD4CC7'],
    };
  }

  ngOnInit(): void {
    this.ssetr = this.sseService
      .getSSETrend()
      .pipe(debounceTime(500)) // Add debounce to reduce update frequency
      .subscribe((data: any) => {
        // console.log(data);
        this.trendData = data;
        // console.log(this.trendData);
        let igcaFlow = this.trendData.map((item) =>
          parseFloat((item['IGCAF'] / 1000).toFixed(2))
        );
        let pgcaFlow = this.trendData.map((item) =>
          parseFloat((item['PGCAF'] / 1000).toFixed(2))
        );
        let igcaPresser = this.trendData.map((item) =>
          parseFloat((item['IGCAP'] / 1).toFixed(2))
        );
        let pgcaPresser = this.trendData.map((item) =>
          parseFloat((item['PGCAP'] / 1).toFixed(2))
        );

        // let pgcaPresser = this.trendData.map((item) => item['PGCAP']);

        let timeLabels = this.trendData.map((item) => {
          const date = new Date(item['DATE']);
          return date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
          });
        });

        // console.log(igcaPresser);

        this.updateLineChart(
          this.lineChart,
          igcaFlow.reverse(),
          pgcaFlow.reverse(),
          timeLabels.reverse()
        );

        this.updateLineChart(
          this.lineChart2,
          igcaPresser.reverse(),
          pgcaPresser.reverse(),
          timeLabels
        );
      });
    this.sseSub = this.sseService
      .getServerSentEvent()
      .pipe(debounceTime(100)) // Add debounce to reduce update frequency
      .subscribe((data: any) => {
        // console.log(parseInt(data.IGCA_FLOW));
        // console.log('ds');

        this.igcaFlow = parseInt(data.IGCA_FLOW);
        this.igcaPresser = parseFloat(data.IGCA_PRESSER.toFixed(2));
        this.pgcaFlow = parseInt(data.PGCA_FLOW);
        this.pgcaPresser = parseFloat(data.PGCA_PRESSER.toFixed(2));
        this.AI_6_COMP1 = parseInt(data.AI_6_COMP1);
        this.AI_6_COMP2 = parseInt(data.AI_6_COMP2);
        this.AI_6_COMP3 = parseInt(data.AI_6_COMP3);
        this.AI_6_COMP4 = parseInt(data.AI_6_COMP4);
        this.AI_6_COMP5 = parseInt(data.AI_6_COMP5);
        this.AI_6_COMP6 = parseInt(data.AI_6_COMP6);
        this.MOTOR_CURR_COMP1 = parseInt(data.MOTOR_CURR_COMP1);
        this.MOTOR_CURR_COMP2 = parseInt(data.MOTOR_CURR_COMP2);
        this.MOTOR_CURR_COMP3 = parseInt(data.MOTOR_CURR_COMP3);
        this.MOTOR_CURR_COMP4 = parseInt(data.MOTOR_CURR_COMP4);
        this.MOTOR_CURR_COMP5 = parseInt(data.MOTOR_CURR_COMP5);
        this.MOTOR_CURR_COMP6 = parseInt(data.MOTOR_CURR_COMP6);

        // Update all charts without causing full re-render
        this.updateChart(this.chart1, this.MOTOR_CURR_COMP1, 600);
        this.updateChart(this.chart2, this.MOTOR_CURR_COMP2, 600);
        this.updateChart(this.chart3, this.MOTOR_CURR_COMP3, 600);
        this.updateChart(this.chart4, this.MOTOR_CURR_COMP4, 600);
        this.updateChart(this.chart5, this.MOTOR_CURR_COMP5, 600);
        this.updateChart(this.chart6, this.MOTOR_CURR_COMP6, 600);

        this.updateChart(this.chart7, this.AI_6_COMP1, 21000);
        this.updateChart(this.chart8, this.AI_6_COMP2, 21000);
        this.updateChart(this.chart9, this.AI_6_COMP3, 21000);
        this.updateChart(this.chart10, this.AI_6_COMP4, 21000);
        this.updateChart(this.chart11, this.AI_6_COMP5, 21000);
        this.updateChart(this.chart12, this.AI_6_COMP6, 21000);
      });
  }
  showdata() {
    console.log(this.trendData);
  }
  // Helper method to update chart data
  private updateChart(
    chart: ChartComponent | undefined,
    value: number,
    limit: number
  ): void {
    if (chart) {
      chart.updateSeries(
        [
          {
            name: 'Actual',
            data: [
              {
                x: '',
                // x: limit == 600 ? 'Amp' : 'Nm3/hr',
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
        false
      );
    }
  }

  private updateLineChart(
    chart: ChartComponent | undefined,
    igcaData: number[],
    pgcaData: number[],
    categories: string[]
  ): void {
    if (chart) {
      chart.updateOptions(
        {
          series: [
            {
              name: 'IGCA Flow',
              data: igcaData,
            },
            {
              name: 'PGCA Flow',
              data: pgcaData,
            },
          ],
          xaxis: {
            categories: categories, // your full 90 timestamps
            tickAmount: 10,
            title: {
              text: 'Time',
              style: {
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#263238',
              },
            },
            labels: {
              hideOverlappingLabels: true,
              rotate: 0,
              rotateAlways: true,

              // formatter: function (value: string, timestamp: any, opts: any) {
              //   const index = opts?.i; // ApexCharts passes category index in opts.i
              //   return index % 10 === 0 ? value : '';
              // },
            },
          },
        },
        false, // don't redraw completely
        true // animate
      );
    }
  }

  ngOnDestroy(): void {
    // Clean up subscription to prevent memory leaks
    if (this.sseSub) {
      this.sseSub.unsubscribe();
    }
    if (this.ssetr) {
      this.ssetr.unsubscribe();
    }
  }
}
