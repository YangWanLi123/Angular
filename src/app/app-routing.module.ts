import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomTreeComponent } from './pages/custom-tree/custom-tree.component';
import { CustomDraggableComponent } from './pages/custom-draggable/custom-draggable.component';

const routes: Routes = [
  { path: 'tree', component: CustomTreeComponent },
  { path: 'draggable', component: CustomDraggableComponent },
  { path: '', pathMatch: 'full', redirectTo: '/tree' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
