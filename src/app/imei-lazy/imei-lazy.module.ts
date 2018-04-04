import { NgModule } from "@angular/core";
import { ImeiAllComponent } from "../imei-all/imei-all.component";
import { ImeiAddComponent } from "../imei-add/imei-add.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LocalStorage } from "../../services/local-storage.service";
import { PaneGuard } from "../../services/pane-guard.service";
import { User } from "../../services/user.service";
import { AppConfig } from "../../services/config.service";
import { IMEIPipe } from "../../pipes/imeiPipe";
import { CurdTemplateComponent } from "../curd-template/curd-template.component";

@NgModule({
    declarations:[
        ImeiAllComponent,
        ImeiAddComponent,
        CurdTemplateComponent,
        IMEIPipe
    ],
    imports:[
        CommonModule,
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path:'all',
                component:ImeiAllComponent
            },
            {
                path:"add",
                component:ImeiAddComponent
            }
        ])
    ],
    providers: [
        LocalStorage,
        PaneGuard,
        User,
        AppConfig
    ]
})
export class IMEILazyModule{

}