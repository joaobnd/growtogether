import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'src/app/model/exercise';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss']
})
export class AddTrainingComponent implements OnInit {

  trainingForm = new FormGroup({
    muscleGroup: new FormControl('', Validators.required),
    restTimeSeconds: new FormControl('', Validators.required)
  });

  exercises: Exercise[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addNewExercise(exercise: Exercise) {
    this.exercises.push(exercise)
  };

  removeExercise(exercise: Exercise) {
    const index = this.exercises.indexOf(exercise);
    if (index > -1) {
      this.exercises.splice(index, 1);
    }
  };

  saveTraining() {

  }


}
