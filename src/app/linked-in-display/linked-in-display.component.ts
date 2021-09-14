import { Component, Input, OnInit } from '@angular/core';
import { LinkedInService } from '../linked-in.service';
import { LinkedIn, LinkedInComments, LinkedInLike, LinkedInList } from '../models/linkedin';

@Component({
  selector: 'app-linked-in-display',
  templateUrl: './linked-in-display.component.html',
  styleUrls: ['./linked-in-display.component.scss']
})
export class LinkedInDisplayComponent implements OnInit {
@Input() posteditem: any;
enablecmntbox:boolean =false;
highlightTrue:boolean =false;
cmtindex:number | undefined;
likeindex:number | undefined;
liked:boolean =false;
linkedinlikeData: LinkedInLike = new LinkedInLike();
linkedinCommentData: LinkedInComments = new LinkedInComments();
  constructor(public linkedinService : LinkedInService) {    
    console.log('this.posteditem',this.posteditem);
  }

  ngOnInit(): void {
  }

  enableCmtBox(i: number | undefined){
 
    this.cmtindex = i;
    this.enablecmntbox = !this.enablecmntbox;
    
  }
    //[+][save comments]
  // saveComments(i: number | undefined,id:number | undefined)
  // {
  //   this.linkedinService.saveCommentPost(id,this.linkedinCommentData).subscribe(async (result)=>
  //   {     
  //     await this.linkedinService.getAllList();
  //       this.linkedinCommentData.comments ='';
       
  //   })
  // }

  saveComments(i:number|undefined,id:number|undefined):void{
    this.linkedinService.saveCommentPost(id,this.linkedinCommentData).subscribe(result=>{
      this.linkedinService.getAllList().subscribe(cmt=>{
        this.posteditem =cmt;
      })
      this.linkedinCommentData.comments ="";
    });
  }
  //[-][save comments]

  //[+][save like post]
  enableLikeButton(i: number | undefined,id:number | undefined,liked: any)
  {
    this.likeindex = i;
    this.liked =!liked;
    if(this.liked )
    {
      this.highlightTrue =true;
      this.linkedinlikeData.liked =true;
    }
    else{
      this.highlightTrue =false;
      this.linkedinlikeData.liked =false;
    }

      this.linkedinService.saveLikedPost(id,this.linkedinlikeData).subscribe(result=>{
      this.linkedinService.getAllList().subscribe(list=>{
      this.posteditem =list
  
    })
  });

 //[-][save like post]


  }

}
