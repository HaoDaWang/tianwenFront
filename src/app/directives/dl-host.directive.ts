import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[dl-host]"
})
export class DynamicLinkHost{
    constructor(
        public viewContainerRef:ViewContainerRef
    ){

    }
}