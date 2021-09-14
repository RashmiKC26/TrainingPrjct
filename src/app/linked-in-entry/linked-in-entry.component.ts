import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LinkedInService } from '../linked-in.service';
import { LinkedIn, LinkedInList } from '../models/linkedin';


@Component({
  selector: 'app-linked-in-entry',
  templateUrl: './linked-in-entry.component.html',
  styleUrls: ['./linked-in-entry.component.scss']
})
export class LinkedInEntryComponent implements OnInit {
  description:any;
  postData:string="";
  linkedinData: LinkedIn = new LinkedIn();
  public lists : Array<LinkedInList>;
  public listPosts1 : any;
  constructor(
    public linkedinService : LinkedInService,
    public readonly routes:ActivatedRoute
    ) { 
        this.lists = new Array<LinkedInList>();
      }

  ngOnInit(): void {
    this.routes.data.subscribe(linkedIdDataList=>{
      this.lists = linkedIdDataList.linkedIdData as Array<LinkedInList>;
    })
   
   // this.getAllList();
  
  }
 

//[+][getlist]
public getAllList(){
  this.linkedinService.getAllList()
   .subscribe(data => this.lists = data);
}
//--promise
// async getAllLinkedIn(){
//   await this.linkedinService.getAllLinkedinsAnsyc().then(data=>{
//     this.lists =data;
//   });
// }


//[-][getlist]


//[+][post linkedin]
insertRecord(lnform:any):void {
  if(!lnform.form.valid){ 
     return;
  }else{
   this.linkedinService.postData(this.linkedinData).subscribe(result=>{
     this.linkedinService.getAllList().subscribe(list=>{
       this.lists = list
     })
   });
   this.linkedinData.inputText='';
  }
}
//[-][post linkedin]

}
