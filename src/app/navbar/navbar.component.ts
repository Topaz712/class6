import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

// @Output


export class NavbarComponent implements OnInit {
  // <------ properties are listed at the top of the class
  @Output() words = new EventEmitter<string>();

  whatever:string;

  constructor() { }

  ngOnInit(): void {

  }
  onSearch() {
    this.words.emit(this.whatever)
  }

}
