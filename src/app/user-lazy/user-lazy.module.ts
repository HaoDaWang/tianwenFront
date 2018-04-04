import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserAllComponent } from "../user-all/user-all.component";
import { UpdatePasswordComponent } from "../update-password/update-password.component";
import { AppRoutingModule } from "../app-routing.module";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { LocalStorage } from "../../services/local-storage.service";
import { PaneGuard } from "../../services/pane-guard.service";
import { User } from "../../services/user.service";
import { AppConfig } from "../../services/config.service";

@NgModule({
    declarations:[
        UserAllComponent,
        UpdatePasswordComponent
    ],
    imports:[
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([
            {path:'all',component:UserAllComponent},
            {path:'update',component:UpdatePasswordComponent}
        ])
    ],
    providers: [
        LocalStorage,
        PaneGuard,
        User,
        AppConfig
    ]
})
export class UserLazyModule{

}