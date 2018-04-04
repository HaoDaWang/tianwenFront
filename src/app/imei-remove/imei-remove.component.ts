import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imei-remove',
  templateUrl: './imei-remove.component.html',
  styleUrls: ['./imei-remove.component.css']
})
export class ImeiRemoveComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
    
    path:string = '';

    value1Listener(value:string){
        this.path = `/imei/remove/${value}`
    }

}
