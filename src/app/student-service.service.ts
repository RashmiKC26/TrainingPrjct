import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private students : Array<Student>;
  private readonly baseUrl : string = "https://localhost:44309/api/student"
  constructor(
    private readonly http:HttpClient
  ) {
    this.students = new Array<Student>();
   }
  
   //[+][without API call]
  
   // getAllStudents() :Array<Student> | undefined
  // {
  //   return this.students;
  // }

  // getStudentByRollNumber(rollNumber:number) : Student | undefined
  // {
  //   return this.students.find(x=>x.RollNumber === rollNumber);
   // return undefined;
  //} 

  // updateStudent(rollNumber : number, student : Student) : Student | undefined
  // {
  //   let currentStudent = this.getStudentByRollNumber(rollNumber);
  //   if(currentStudent !== undefined)
  //   {
  //     currentStudent ={...student} // call as spread operator,it will match all property and bind with property of model
  //   }
  //   return currentStudent;
  // }
  //[-][without API call]

  //[+][with API call][using observable]
  getAllStudents() :Observable<Array<Student>>
  {
    return this.http.get<Array<Student>>(this.baseUrl);
  }

  getStudentByRollNumber(rollNumber:number) : Observable<Student> | undefined
  {
    return this.http.get<Student>(`${this.baseUrl}/${rollNumber}`);
   
  } 

   updateStudent(rollNUmber : number, student : Student) : Observable<Student> | undefined
  {
    return this.http.put<Student>(`${this.baseUrl}/${rollNUmber}`,JSON.stringify(student));
   
  }
  //[-][with API call][using observable]

   //[+][with API call][using promise]
   async getAllStudentsAsync() : Promise<Array<Student>>
   {
     return await this.http.get<Array<Student>>(this.baseUrl).toPromise();
   }

//[-][with API call][using promise]

async postData(postData: string) : Promise<Observable<any>>
{

  return await this.http.post<any>(`${this.baseUrl}`,JSON.stringify(postData));
 
}
}
