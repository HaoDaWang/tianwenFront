import { PipeTransform, Pipe } from "@angular/core";
import { IMEI } from "../interfaces/imei.interface";

@Pipe({name:"IMEIPipe"})
export class IMEIPipe implements PipeTransform {
    transform(value: any, ...args: any[]):Array<IMEI> {
        let targetIMEI;
        for(let imeiobj of value){
            if(imeiobj.imei == args[0]) targetIMEI = imeiobj;
        }

        if(!targetIMEI) return value;
        else return [targetIMEI];
    }
}