import {Component,Input, Output} from "@angular/core";
import { EventEmitter } from "../../../node_modules/protractor";
@Component({
    selector:'event-thumbnail',
    templateUrl:'./event-thumbnail.component.html'
})
export class EventThumbnailComponent{
@Input() event:any;
@Output() eventClicked = new EventEmitter();
    handleClickMe(){
        this.eventClicked.emit("foo");
    }
}