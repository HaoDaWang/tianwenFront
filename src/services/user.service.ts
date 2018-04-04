import { Injectable } from "@angular/core";

@Injectable()
export class User{
    private _username:string

    get username():string{
        return this._username
    }

    set username(username:string){
        this._username = username
    }
}