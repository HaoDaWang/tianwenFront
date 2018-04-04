import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LocalStorage } from '../services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { PaneComponent } from './pane/pane.component';
import { AppRoutingModule } from './app-routing.module';
import { User } from '../services/user.service';
import { PaneGuard } from '../services/pane-guard.service';
import { UserAllComponent } from './user-all/user-all.component';
import { AppConfig } from '../services/config.service';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { DynamicLinkHost } from './directives/dl-host.directive';
import { ImeiAllComponent } from './imei-all/imei-all.component';
import { ImeiAddComponent } from './imei-add/imei-add.component';
import { ImeiUpdateComponent } from './imei-update/imei-update.component';
import { ImeiFindComponent } from './imei-find/imei-find.component';
import { ImeiRemoveComponent } from './imei-remove/imei-remove.component';
import { CurdTemplateComponent } from './curd-template/curd-template.component';
import { IMEIPipe } from '../pipes/imeiPipe';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PaneComponent,
    DynamicLinkHost
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    LocalStorage,
    PaneGuard,
    User,
    AppConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(
        @Inject(PLATFORM_ID) platformId:string
    ){
        const platform:string = isPlatformBrowser(platformId)? 'in the browser':'on the server';
        console.log(platform)
    }
}
