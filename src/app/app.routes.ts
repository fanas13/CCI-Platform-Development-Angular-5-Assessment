import { Routes } from '@angular/router';
import { GithubIssueListComponent } from './views/github-issue-list/github-issue-list.component';
import { GithubRepositoryDetailsComponent } from './views/github-repository-details/github-repository-details.component';
import { GithubRepositoryListComponent } from './views/github-repository-list/github-repository-list.component';

export const routes: Routes = [
  { path: '', component: GithubRepositoryListComponent },
  { path: 'repository/:owner/:repoName', component: GithubRepositoryDetailsComponent },
  { path: 'repository/:owner/:repoName/issues', component: GithubIssueListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];
