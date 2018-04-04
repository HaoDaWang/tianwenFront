import { Component, OnInit, ApplicationRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imei-add',
  templateUrl: './imei-add.component.html',
  styleUrls: ['./imei-add.component.css']
})
export class ImeiAddComponent implements OnInit {
    
    path:string = '/imei/add/';
    param:string = '';
    constructor(
        
    ) { }

    ngOnInit() {
        
    }
    
    value1Listener(value:string){
        this.param = value;
    }
    
}
