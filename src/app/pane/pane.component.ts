import { Component, OnInit, ViewChild, ElementRef, Renderer, AfterViewInit, ContentChild, Renderer2, ChangeDetectorRef } from '@angular/core';
import { User } from '../../services/user.service';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { AppConfig } from '../../services/config.service';

@Component({
  selector: 'app-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.css']
})
export class PaneComponent implements OnInit, AfterViewInit {
    selectedColor:string = "#108ee9";
    normalColor:string = "transparent";
    normalFontColor:string = "rgba(255, 255, 255, 0.67)";
    selectedFontColor:string = "#fff";
    
    private changeSelected(ele:any){
        ele.style.background = this.selectedColor;
        ele.style.color = this.selectedFontColor;
    }
    private changeNormal(ele:any){
        ele.style.background = this.normalColor;
        ele.style.color = this.normalFontColor;
    }

    @ViewChild("all")
    all:ElementRef;
    @ViewChild("add")
    add:ElementRef
    ngAfterViewInit(): void {
        this.router.navigate(['user/all'],{relativeTo:this.routerInfo})
    }
    ngOnInit(): void {
        this.router.events
            .subscribe((event:any) => {
                if(event instanceof NavigationEnd) {
                    let all = this.all.nativeElement.firstElementChild;
                    let add = this.add.nativeElement.firstElementChild;
                    if(event.url == '/pane/imei/all'){
                        //更改颜色
                        this.changeSelected(all)
                        this.changeNormal(add)
                    }
                    else if(event.url == '/pane/imei/add'){
                        this.changeSelected(add)
                        this.changeNormal(all)                        
                    }
                    else{
                        this.changeNormal(all)
                        this.changeNormal(add)
                    }
                }
            })
    }
    

    //初始是否伸缩sider
    isCollapsed:boolean = false;
    constructor(
        public user:User,
        private router:Router,
        private renderer:Renderer2,
        private routerInfo:ActivatedRoute,
        private config:AppConfig,
        private ref:ChangeDetectorRef
    ) { }
    
}
