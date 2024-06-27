import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-github-pie-chart',
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective
  ],
  templateUrl: './github-pie-chart.component.html',
  styleUrl: './github-pie-chart.component.css'
})
export class GithubPieChartComponent {

}
