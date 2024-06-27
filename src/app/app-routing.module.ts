import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { routes } from './app.routes';
import { GithubRepositoryListComponent } from './views/github-repository-list/github-repository-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    GithubRepositoryListComponent
  ],
  providers: [
    provideHttpClient(),
    [provideCharts(withDefaultRegisterables())],
  ]
})
export class AppRoutingModule { }
