import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  studentsList: Student[] = []

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
      routineDescription: new FormControl('')
  });

  constructor(private auth: AuthService, private data : DataService, private route: Router) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  logout() {
    this.auth.logout()
  }

  getAllStudents() {
    this.data.getAllStudents().subscribe(res => {
      this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, (err:any) => {
      alert('Erro ao buscar os alunos!')
    })
  }

  deleteStudent(student: Student) {
    if(window.confirm(`Tem certeza que deseja excluir ${student.firstName} ${student.lastName} ?`)) {
      this.data.deleteStudent(student);
    }
  }

  addStudent() {
    const studentObj: Student = {
      id: '',
      firstName: this.studentForm.get('firstName')?.value,
      emailOfPersonal: this.auth.getPersonalEmail(sessionStorage.getItem('token') || ""),
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
      workouts: []
    }

    this.data.addStudent(studentObj);
    this.studentForm.reset();
  }

  navigateToStudent(id:any) {
    this.route.navigate(['/student', id ])
  }

}
