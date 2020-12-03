import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'team/:id',
    loadChildren: () => import('./Pages/team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./Pages/article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'match-detail/:id',
    loadChildren: () => import('./Pages/match-detail/match-detail.module').then( m => m.MatchDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
