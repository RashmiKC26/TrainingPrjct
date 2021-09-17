import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LinkedInService } from '../linked-in.service';
import { LinkedIn, LinkedInList } from '../models/linkedin';
import { Student } from '../models/student';
import { StudentServiceService } from '../student-service.service';

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
  previewImage: string='';
  
  constructor(
    public linkedinService : LinkedInService,
    public readonly routes:ActivatedRoute,
    public fb: FormBuilder
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
  debugger;
    this.linkedinData.ImageBase64=this.previewImage;
   this.linkedinService.postData(this.linkedinData).subscribe(result=>{
     this.linkedinService.getAllList().subscribe(list=>{
       this.lists = list
     })
   });
   this.linkedinData.inputText='';
   this.linkedinData.ImageBase64='';
   this.previewImage='';
   lnform.form.controls.filename='';

  }
}
//[-][post linkedin]

onFileChange(event:any) {

  const fileControl = event.target as HTMLInputElement;
  if (!fileControl || !fileControl.files || fileControl.files.length<=0) {
    return;
  }

  const file = fileControl.files[0];
  
  // File Preview
  const reader = new FileReader();
  reader.onload = () => {
    this.previewImage = reader.result as string;
  }
  reader.readAsDataURL(file);
}


}
