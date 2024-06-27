import { Routes } from '@angular/router';
import { GithubRepositoryListComponent } from './views/github-repository-list/github-repository-list.component';

export const routes: Routes = [
  { path: '', component: GithubRepositoryListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
];
