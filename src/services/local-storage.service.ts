import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorage{
    private localStorage = localStorage;
   
    public set(key:string, value:any){
        this.localStorage.setItem(key, value);
    }
    public get(key:string):any{
        return this.localStorage.getItem(key) || null;
    }

    public setObject(key:string, value:object){
        this.localStorage.setItem(key, JSON.stringify(value));
    }
    public getObject(key:string):object{
        return JSON.parse(this.localStorage.getItem(key)) || null;
    }
    
    public remove(key:string){
        this.localStorage.removeItem(key)
    }
}