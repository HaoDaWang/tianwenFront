import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Placeholder } from '_@angular_compiler@5.2.9@@angular/compiler/src/i18n/i18n_ast';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../services/config.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientDTO } from '../../interfaces/clientDTO';

@Component({
  selector: 'app-curd-template',
  templateUrl: './curd-template.component.html',
  styleUrls: ['./curd-template.component.css']
})
export class CurdTemplateComponent implements OnInit {
    //placeholder
    @Input()
    placeholder1:string;
    @Input()
    placeholder2:string;

    //请求的方法
    @Input()
    method:string;
    
    //请求的path
    @Input()
    path:string;
    
    //是否显示第二个输入框
    @Input()
    isViewInput2:boolean;

    //value
    value1:string;
    value2:string;
    
    //监听
    @Output()
    value1Emitter = new EventEmitter();
    @Output()
    value2Emitter = new EventEmitter();

    form:FormGroup
    
    value1Listener(){
        this.value1Emitter.emit(this.value1)
    }
    
    value2Listener(){
        this.value2Emitter.emit(this.value2)
    }

    constructor(
        private httpClient:HttpClient,
        private config:AppConfig,
        private fb:FormBuilder,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            'imei':[''],
            'newIMEI':['']
        })
    }
    
    //提交表单
    submit(){
        this.httpClient[this.method](`http://${this.config.HOST}:${this.config.PORT}${this.path}${this.value1}`,{imei:this.value1,newIMEI:this.value2})
        .subscribe((data:ClientDTO) => {
            console.log(data)
            if(data.err) {
                alert("请勿提交重复的imei")
                return
            }
            else alert('操作成功')   
            this.router.navigate(['/pane/imei/all'],{relativeTo:this.activatedRoute})
        })
    }

}
