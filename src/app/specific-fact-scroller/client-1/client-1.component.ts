import { FactService } from './../../fact-scroller/fact.service';
import { FactsDataSource } from './../../fact-scroller/fact-scroller.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-one',
  templateUrl: './client-1.component.html',
  styleUrls: ['./client-1.component.scss']
})
export class ClientOneComponent implements OnInit {

  dataSource: FactsDataSource;

  constructor(private factService: FactService) {
    this.dataSource = new FactsDataSource(factService);
  }

  ngOnInit() {
  }
 
  reactToSelection(event) {
    console.log(event)
  }

  clickedYear(text) {
    console.log(text)
  }
}
