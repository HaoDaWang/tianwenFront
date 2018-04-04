import { Component, OnInit, ComponentFactoryResolver, ViewChild, AfterViewInit, ComponentRef, ApplicationRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../services/config.service';
import { ClientDTO } from '../../interfaces/clientDTO';
import { User } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit,AfterViewInit {
    form:FormGroup;
    password:string;
    confirmPassword:string;

    constructor(
      private fb:FormBuilder,
      private componentFactoryResolve:ComponentFactoryResolver,
      private applicationRef:ApplicationRef,
      private httpClient:HttpClient,
      private config:AppConfig,
      private user:User,
      private router:Router
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            'password':['']
        })
    }

    ngAfterViewInit(){
    }
    
    submit(){
        if(this.password != this.confirmPassword || this.password == '') {
            alert("两次输入密码不一致")
            return;
        }
        else {
            if(!this.user.username) {this.router.navigate(['main']);return;}
            this.httpClient.put(`http://${this.config.HOST}:${this.config.PORT}/user/update`,{username:this.user.username,password:this.password})
                .subscribe(() => {
                    alert('修改成功')
                    this.router.navigate(['main']);
                })
        }
    }
}
