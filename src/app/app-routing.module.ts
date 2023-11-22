import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', loadChildren: () => import('./../counter/counter.module').then(c => c.CounterModule) },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostModule) },
  { path: 'auth', loadChildren: () => import('../app/auth/auth.module').then(a => a.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
