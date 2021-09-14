import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-data-entry',
  templateUrl: './person-data-entry.component.html',
  styleUrls: ['./person-data-entry.component.scss']
})
export class PersonDataEntryComponent implements OnInit {
  // Name :any;
  // Age:number;

  Persons:Person[];
  PersonsArray : any[];
  // [+]
  personForm: FormGroup;
  workHistoryArray: Array<FormGroup>=[];
  
  //[-]

  constructor(private readonly fb:FormBuilder) { 
    // this.Age=0;
    // this.Name ="";
    // [+]
    // this.personForm =new FormGroup({
    //   Name :new FormControl("",Validators.required),
    //   Age:new FormControl(""),

    //   Address:new FormControl({
    //     Street1:new FormControl(''),
    //     City:new FormControl('')
    //   })
      
    // })
    this.personForm =this.fb.group({
      Name:['',Validators.required],
      Age:[''],
      Address:this.fb.group({
          Street1:[''],
          City:['']
        }),
      WorkHistory: this.fb.array(this.workHistoryArray)               
    });
  
    // [-]
    this.Persons = new Array<Person>();
    this.PersonsArray =[];
    this.personForm.controls['workHistory']
  }

  ngOnInit(): void {
    
  }
  // showData()
  // {
  //   this.Persons.push(new Person(this.Name,this.Age));
  //   this.PersonsArray.push({Name:this.Name,Age:this.Age});
  //   console.log(`Name is ${this.Name}, Age is ${this.Age}`);
  //   this.Age=0;
  //   this.Name ="";
  // }


  AddWorkHistory():void
  {
    this.workHistoryArray.push(this.fb.group({   
        CompanyName :[],
        StartDate:[],
        EndDate:[],
        Description:[]
      }));
  }

  
}
