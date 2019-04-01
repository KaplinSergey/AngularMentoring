import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent, PathNotFoundComponent, LoginComponent } from './layout';
const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        // The router will match this route if the URL requested
        // doesn't match any paths for routes defined in our configuration
        path: '**',
        component: PathNotFoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
