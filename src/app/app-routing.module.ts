import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomTreeComponent } from './pages/custom-tree/custom-tree.component';

const routes: Routes = [
  { path: 'tree', component: CustomTreeComponent },
  { path: '', pathMatch: 'full', redirectTo: '/tree' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
