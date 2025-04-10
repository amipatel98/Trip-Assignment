import { Component, Input, OnChanges } from '@angular/core';
import { Trip } from '../../models/trip.model';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';

@Component({
  selector: 'app-display-trip-chart',
  standalone: true,
  imports: [CommonModule, NgxEchartsModule],
  templateUrl: './display-trip-chart.component.html',
  styleUrl: './display-trip-chart.component.scss',
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useValue: { echarts },
    },
  ],
})
export class DisplayTripChartComponent implements OnChanges {
  @Input() trips: Trip[] = [];
  chartOptions: any;
  ngOnChanges() {
    this.displayChart();
  }

  displayChart() {
    const nodes = new Map<string, any>();
    const links: any = [];
    let lastX = 50;

    this.trips.forEach((trip, index) => {
      const startKey = trip.start;
      const endKey = trip.end;
      const isLevel2 = trip.level === 2;

      let yPosition = isLevel2 ? 30 : 50;
      let xPosition = lastX;

      if (!nodes.has(startKey)) {
        nodes.set(startKey, {
          name: startKey,
          id: startKey,
          x: xPosition,
          y: yPosition,
        });
      }
      if (!nodes.has(endKey)) {
        nodes.set(endKey, {
          name: endKey,
          id: endKey,
          x: xPosition + 150,
          y: yPosition,
        });
      }

      links.push({
        source: startKey,
        target: endKey,
        lineStyle: {
          color: isLevel2 ? 'orange' : 'blue',
          width: 2,
          curveness: isLevel2 ? 0.3 : 0,
        },
        symbol: ['none', 'arrow'],
      });

      lastX += 150;
    });

    this.chartOptions = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}',
      },
      series: [
        {
          type: 'graph',
          layout: 'none',
          data: Array.from(nodes.values()),
          edges: links,
          roam: false,
          label: {
            show: true,
            position: 'bottom',
            fontSize: 14,
          },
          lineStyle: {
            width: 2,
          },
        },
      ],
    };
  }
}
