import { Component, OnInit, EventEmitter, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-shell-fact',
  templateUrl: './shell-fact.component.html',
  styleUrls: ['./shell-fact.component.css']
})
export class ShellFactComponent implements OnInit {
  
  @Input() options; 
 
  @ContentChild('optionTemplate', {static: false}) optionTemplateRef: TemplateRef<any>;

  constructor() {

  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.options);
  }
}
