import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.scss']
})
export class StudentDisplayComponent implements OnInit {
  @Input() students: Array<Student>;
  @Output() editStudent : EventEmitter<Student>;
  @Output() deleteStudent : EventEmitter<Student>;

  constructor() { 
    this.students = new Array<Student>();
    this.editStudent = new EventEmitter<Student>();
    this.deleteStudent = new EventEmitter<Student>();
  }

  ngOnInit(): void {
  }

  EditStudent(student :Student) : void
  {
    this.editStudent.emit(student);
  }

  DeleteStudent(student :Student) 
  {
    this.deleteStudent.emit(student);
  }

}
