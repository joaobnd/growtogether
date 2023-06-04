import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { Training } from 'src/app/model/training';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  student!: Student;
  counter: number = 0;
  showAddTraining: boolean = false;

  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit(): void {
    this.service
      .getStudentById(this.route.snapshot.paramMap.get('id'))
      .subscribe((res: any) => {
        this.student = res;
        console.log(this.student);
      });
  }

  addTraining() {
    this.showAddTraining = true;
  }

  saveTraining(training: Training) {
    this.showAddTraining = false;
    this.student.workouts.push(training);
    this.service.updateStudent(
      this.route.snapshot.paramMap.get('id'),
      this.student
    );
  }
}
