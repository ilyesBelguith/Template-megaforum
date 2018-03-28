import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 public seen=false;
 public b=false;
  constructor() { }

  ngOnInit() {
  }
show(){
  this.seen=!this.seen;
  this.b=!this.b;
}
}
