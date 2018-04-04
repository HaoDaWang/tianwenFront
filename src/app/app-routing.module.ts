import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { PaneComponent } from "./pane/pane.component";
import { PaneGuard } from "../services/pane-guard.service";
import { UserAllComponent } from "./user-all/user-all.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
import { ImeiAllComponent } from "./imei-all/imei-all.component";
import { ImeiAddComponent } from "./imei-add/imei-add.component";

let routes:Routes = [
    {path:'',pathMatch:'full',redirectTo:'main'},
    {path:'main',component:MainComponent},
    {path:'pane',component:PaneComponent,canActivate:[PaneGuard],children:[
        {path:'user',loadChildren:"app/user-lazy/user-lazy.module#UserLazyModule"},
        {path:'user',loadChildren:"app/user-lazy/user-lazy.module#UserLazyModule"},
        {path:"imei",loadChildren:"app/imei-lazy/imei-lazy.module#IMEILazyModule"},
        {path:"imei/add",loadChildren:"app/imei-lazy/imei-lazy.module#IMEILazyModule"}
    ]},
    {path:'**',redirectTo:'main'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{ }