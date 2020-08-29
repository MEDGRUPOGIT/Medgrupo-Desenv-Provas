import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enrollment-search',
  templateUrl: './enrollment-search.component.html',
  styleUrls: ['./enrollment-search.component.scss']
})
export class EnrollmentSearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(enrollmentValue) {
    this.onSearch.emit(enrollmentValue)
  }

  onKeyUp(event) {
    if(event.keyCode === 13){
      this.search(event.target.value);
    }
  }

}
