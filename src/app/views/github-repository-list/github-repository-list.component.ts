import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-github-repository-list',
  standalone: true,
  imports: [],
  templateUrl: './github-repository-list.component.html',
  styleUrl: './github-repository-list.component.css'
})
export class GithubRepositoryListComponent {
  repositories: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.searchRepositories('angular').subscribe((data: any) => {
      this.repositories = data.items;
    });
  }

}
