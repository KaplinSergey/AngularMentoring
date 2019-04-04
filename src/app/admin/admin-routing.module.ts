import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent, ManageOrdersComponent, ManageProductsComponent } from './components';
import { AuthGuard } from './../core';
import { ProductFormComponent } from '../products/components/product-form/product-form.component';
import { ProductResolveGuard } from '../products';

const adminRoutes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      children: [
        { path: 'orders', component: ManageOrdersComponent },
        {
          path: 'products',
          children: [
            {
              path: 'edit/:productID',
              component: ProductFormComponent,
              resolve: {
                product: ProductResolveGuard
              }
            },
            { path: 'add', component: ProductFormComponent },
            { path: '', component: ManageProductsComponent }
          ]
        },
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
