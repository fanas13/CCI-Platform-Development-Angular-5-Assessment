import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { GithubRepositoryListComponent } from './views/github-repository-list/github-repository-list.component';
// export {
//   MatCardAppearance,
//   MatCardConfig,
//   MAT_CARD_CONFIG,
//   MatCard,
//   MatCardTitle,
//   MatCardTitleGroup,
//   MatCardContent,
//   MatCardSubtitle,
//   MatCardActions,
//   MatCardHeader,
//   MatCardFooter,
//   MatCardImage,
//   MatCardSmImage,
//   MatCardMdImage,
//   MatCardLgImage,
//   MatCardXlImage,
//   MatCardAvatar
// }
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    GithubRepositoryListComponent
  ],
  providers: [provideHttpClient()]
})
export class AppRoutingModule { }
