import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-data-display',
  templateUrl: './person-data-display.component.html',
  styleUrls: ['./person-data-display.component.scss']
})
export class PersonDataDisplayComponent implements OnInit {
@Input() person:Person;
  constructor() { 
    this.person =new Person("",0,"")
  }

  ngOnInit(): void {
  }

}
