import { Injectable } from "@angular/core";

/**
 * 常量
 */

@Injectable()
export class AppConfig{
    // public HOST:string = "47.106.73.193";
    // public PORT:string = '80';
    public HOST:string = "localhost";
    public PORT:string = "3000";

    public allSelected:boolean = false;
    public addSelected:boolean = false;
}