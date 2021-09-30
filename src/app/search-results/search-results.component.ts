import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() loading: string[] = [];

  // property: number;
  // method(){

  // }
  constructor() { }

  ngOnInit(): void {

  }

}
