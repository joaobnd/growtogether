import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.scss']
})
export class StudentsDetailComponent implements OnInit {

  student!: Student;
  counter: number = 0
  showAddTraining: boolean = false;

  constructor(private route: ActivatedRoute, private service: DataService) { }

  ngOnInit(): void {
    this.service.getStudentById(this.route.snapshot.paramMap.get('id')).subscribe((res:any) => {
      this.student = res;
    }
    );
  }

  addTraining() {
    this.showAddTraining = true;
  }

}
