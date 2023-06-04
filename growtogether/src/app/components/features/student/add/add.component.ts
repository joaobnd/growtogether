import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  studentForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
    height: new FormControl('', Validators.required),
    objective: new FormControl(''),
    hasLesion: new FormControl(),
    hasExperience: new FormControl(),
    hasFoodRestriction: new FormControl(),
    useMedicine: new FormControl(),
    isSmoker: new FormControl(),
    routineDescription: new FormControl(''),
  });

  constructor(
    private auth: AuthService,
    private data: DataService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  addStudent() {
    const studentObj: Student = {
      id: '',
      firstName: this.studentForm.get('firstName')?.value,
      emailOfPersonal: this.auth.getPersonalEmail(
        sessionStorage.getItem('token') || ''
      ),
      lastName: this.studentForm.get('lastName')?.value,
      weight: this.studentForm.get('weight')?.value,
      height: this.studentForm.get('height')?.value,
      hasExperience: this.studentForm.get('hasExperience')?.value,
      hasLesion: this.studentForm.get('hasLesion')?.value,
      hasFoodRestriction: this.studentForm.get('hasFoodRestriction')?.value,
      objective: this.studentForm.get('objective')?.value,
      useMedicine: this.studentForm.get('useMedicine')?.value,
      isSmoker: this.studentForm.get('isSmoker')?.value,
      routineDescription: this.studentForm.get('routineDescription')?.value,
      workouts: [],
    };

    this.data.addStudent(studentObj);
    this.studentForm.reset();
  }

  deleteStudent(student: Student) {
    if (
      window.confirm(
        `Tem certeza que deseja excluir ${student.firstName} ${student.lastName} ?`
      )
    ) {
      this.data.deleteStudent(student);
    }
  }
}
