import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent } from './components';
import { AuthGuard } from './../core';

const adminRoutes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      children: [
        { path: 'orders', component: ManageOrdersComponent },
        { path: 'products', component: ManageProductsComponent },
        { path: '', component: AdminDashboardComponent }
      ]
    }
  ]
}];

export const adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
