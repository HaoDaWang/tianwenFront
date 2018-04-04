import { Component, OnInit } from '@angular/core';
import { IMEI } from '../../interfaces/imei.interface';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../services/config.service';
import { User } from '../../services/user.service';
import { UserSchema } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent implements OnInit {
    //表格加载
    isLoading = true;
    //表格数据
    data:Array<UserSchema> = [
        {username:"null",password:"null"}
    ];

    constructor(
        private httpClient:HttpClient,
        private config:AppConfig
    ) { }

    ngOnInit() {
        //请求用户数据
        this.httpClient.get(`http://${this.config.HOST}:${this.config.PORT}/user/all`)
            .subscribe((data:Array<UserSchema>) => {
                this.data = data;
                this.isLoading = false;
            })
    }

}
