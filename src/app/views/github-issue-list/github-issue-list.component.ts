import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'github-issue-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './github-issue-list.component.html',
  styleUrls: ['./github-issue-list.component.css']
})
export class GithubIssueListComponent implements OnInit {
  owner!: string;
  repoName!: string;
  issues!: any[];

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.owner = params['owner'];
      this.repoName = params['repoName'];
      this.loadIssues();
    });
  }

  loadIssues(): void {
    this.githubService.getIssues(this.owner, this.repoName).subscribe((data: any[]) => {
      this.issues = data;
    });
  }

}
