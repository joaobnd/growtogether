import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/model/student';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  studentsList: Student[] = [];

  constructor(
    private auth: AuthService,
    private data: DataService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  logout() {
    this.auth.logout();
  }

  getAllStudents() {
    this.data.getAllStudents().subscribe(
      (res) => {
        this.studentsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      () => {
        alert('Erro ao buscar os alunos!');
      }
    );
  }

  navigateToStudent(id: any) {
    this.route.navigate(['/student', id]);
  }
}
