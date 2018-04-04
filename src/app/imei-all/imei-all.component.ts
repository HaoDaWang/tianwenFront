import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef } from '@angular/core';
import { IMEI } from '../../interfaces/imei.interface';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../services/config.service';
import { IMEIPipe } from '../../pipes/imeiPipe';

@Component({
  selector: 'app-imei-all',
  templateUrl: './imei-all.component.html',
  styleUrls: ['./imei-all.component.css']
})
export class ImeiAllComponent implements OnInit {
    //表格加载
    isLoading = true;
    //表格数据
    data:Array<IMEI> = [
        {id:0,imei:"null"}
    ];
    
    //搜索框内容
    searchValue:string;

    //搜索回调
    search(){
        // this.pipeValue = this.searchValue;
    }

    constructor(
        private httpClient:HttpClient,
        private config:AppConfig
    ) { }
    
    ngOnInit() {
        //请求用户数据
        this.httpClient.get(`http://${this.config.HOST}:${this.config.PORT}/imei/all`)
            .subscribe((data:Array<IMEI>) => {
                console.log(data)
                this.data = data;
                this.isLoading = false;
            })
    }
    
    private closeModal(){
        this.isVisible = false;
        this.targetIMEI = "";
    }

    private setTargetItem(value:string, id:number){
        this.targetItem.imei = value;
        this.targetItem.id = id;
    }
    
    //modal 是否显示
    isVisible:boolean = false;
    //modal title
    modalTitle:string;
    //ok按钮点击
    okText:string = "确认";
    //当前选中项目
    targetItem:{imei:string, id:number} = {imei:"",id:0};
    //是否显示删除项目
    isViewDelete:boolean = false;
    //输入框历史内容
    historyIMEI:string = ''
    //更新imei
    update(value:string, id:number | string){
        if(id == 'null') alert('该项目无效')
        this.setTargetItem(value, id as number);
        this.isViewDelete = false;
        this.targetIMEI = this.targetItem.imei;
        this.historyIMEI = this.targetIMEI;
        //修改imei        
        this.okText = "确认修改";
        this.modalTitle = "修改IMEI";
        this.isVisible = true;
    }

    //删除imei
    delete(value:string, id:number | string){
        if(id == 'null') alert('该项目无效')
        this.setTargetItem(value, id as number);
        
        this.isViewDelete = true;
        this.okText = "确认删除"
        this.modalTitle = "删除IMEI"
        this.isVisible = true;
    }
    
    targetIMEI:string;
    //确认按钮
    handleOk(){  
        if(this.historyIMEI == this.targetIMEI){
            alert('请提交新的IMEI')
            return;
        }
        
        let path;
        let method;
        //更新
        if(this.modalTitle == '修改IMEI'){
            path = "/imei/update"
            method = 'put'
        }
        //删除
        else{
            path = `/imei/remove/${this.targetItem.imei}`
            method = 'delete'
        }
        
        this.httpClient[method](`http://${this.config.HOST}:${this.config.PORT}${path}`,{imei:this.targetItem.imei,newIMEI:this.targetIMEI})
        .subscribe(() => {
            alert('操作成功')
            //更新数据
            this.ngOnInit();
        })

        this.closeModal();
    }

    //取消按钮
    handleCancel(e:Event){
        this.closeModal();
    }
}
