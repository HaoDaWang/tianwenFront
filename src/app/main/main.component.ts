import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { checkboxObject } from '../../interfaces/checkbox-object.interface';
import { LocalStorage } from '../../services/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { ClientDTO } from '../../interfaces/clientDTO';
import { Router } from '@angular/router';
import { User } from '../../services/user.service';
import { AppConfig } from '../../services/config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    //选择框数组
    checkboxArray:Array<checkboxObject> = [
        {label:"记住账号", value:'username'},
        {label:"记住密码",value:'password'}
    ]

    //是否加载
    isLoading:boolean = false;
    
    //账号密码变量
    username:string = '';
    password:string = '';
    
    //表单
    login:FormGroup;

    //模态框
    isModalVisible:boolean = false;
    modalContent:string = '';

    constructor(
        private localStorage:LocalStorage,
        private formBuilder:FormBuilder,
        private httpClient:HttpClient,
        private router:Router,
        private user:User,
        private config:AppConfig
    ){
        
    }

    //初始化钩子
    ngOnInit(){
        //读取记住的账号密码
        if(this.localStorage.get('username')) {this.username = this.localStorage.get('username');this.checkboxArray[0].checked = true};
        if(this.localStorage.get('password')) {this.password = this.localStorage.get('password');this.checkboxArray[1].checked = true};
        
        this.login = this.formBuilder.group({
            username:['', Validators.compose([Validators.required])],
            password:['', Validators.compose([Validators.required])]
        })
    }
    
    private rem(checkbox:checkboxObject){
        if(checkbox.checked) this.localStorage.set(checkbox.value,this[checkbox.value]);
        else this.localStorage.remove(checkbox.value);
    }
    //记住账号密码
    remValue(e:Array<checkboxObject>){
        let userCheckBox = e[0];
        let passwCheckBox = e[1];
        this.rem(userCheckBox);
        this.rem(passwCheckBox);
    }
    //输入框改变记住账号密码
    inputRem(tag:string){
        if(tag == 'username') this.rem(this.checkboxArray[0])
        else this.rem(this.checkboxArray[1])
    }

    private setModal(isVisible:boolean, content:string){
        this.isModalVisible = isVisible;
        this.modalContent = content;
    }
    //提交表单
    submit(){
        this.isLoading = true;
        //验证表单
        this.httpClient.post(`http://${this.config.HOST}:${this.config.PORT}/user/validate`,{username:this.username,password:this.password})
            .subscribe((data:ClientDTO) => {
                console.log(data)
                if(data.err) {
                    this.setModal(true,"用户名或密码错误");
                    this.isLoading = false;
                    this.modalOk = () => this.isModalVisible = false;
                }
                else {
                    this.setModal(true, "登陆成功，点击确认跳转")
                    this.modalOk = () => {
                        this.isModalVisible = false;
                        //写入用户信息
                        this.user.username = this.username;
                        //跳转
                        this.router.navigate(['pane']);
                    }
                }
            })
    }

    //模态框确认按钮
    modalOk(){
        this.isModalVisible = false;
    }
}
