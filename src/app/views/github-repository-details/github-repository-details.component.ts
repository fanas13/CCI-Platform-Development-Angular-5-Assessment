import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { PieChartComponent } from '../../shared-components/charts/pie-chart.component';


@Component({
  selector: 'app-repository-details',
  standalone: true,
  imports: [
    CommonModule,
    PieChartComponent
  ],
  templateUrl: './github-repository-details.component.html',
  styleUrls: ['./github-repository-details.component.scss']
})
export class GithubRepositoryDetailsComponent implements OnInit {
  pieChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  pieChartData: number[] = [300, 500, 100];
  owner!: string;
  repoName!: string;
  repository: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.owner = params['owner'];
      this.repoName = params['repoName'];
      this.loadRepositoryDetails();
    });
  }

  loadRepositoryDetails(): void {
    this.githubService.getRepositoryDetails(this.owner, this.repoName).subscribe((data: any) => {

      let test_ = this.pieChartLabels;
      debugger
      this.repository = data;
    });
  }

}
