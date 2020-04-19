import { Component, OnInit, EventEmitter, Input, ContentChild, TemplateRef, Output } from '@angular/core';

@Component({
  selector: 'app-shell-fact',
  templateUrl: './shell-fact.component.html',
  styleUrls: ['./shell-fact.component.css']
})
export class ShellFactComponent implements OnInit {
  
  @Input() options; 
 
  @ContentChild('optionTemplate', {static: false}) optionTemplateRef: TemplateRef<any>;

  @Output() selectionChanged = new EventEmitter<any>();
  
  constructor() {

  }
  
  ngOnInit(): void { 
    console.log(this.options);
  }


  selectOption(option) { 
    this.selectionChanged.emit(option);
  }
}
