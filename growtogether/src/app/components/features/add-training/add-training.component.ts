import { Training } from './../../../model/training';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'src/app/model/exercise';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.scss'],
})
export class AddTrainingComponent implements OnInit {
  @Output() trainingCreated = new EventEmitter<Training>();
  @Output() close = new EventEmitter<Training>();

  trainingForm = new FormGroup({
    muscleGroup: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    restTimeSeconds: new FormControl('', Validators.required),
  });

  exercises: Exercise[] = [];

  constructor() {}

  ngOnInit(): void {}

  addNewExercise(exercise: Exercise) {
    this.exercises.push(exercise);
  }

  removeExercise(exercise: Exercise) {
    const index = this.exercises.indexOf(exercise);
    if (index > -1) {
      this.exercises.splice(index, 1);
    }
  }

  saveTraining() {
    let training: Training = {
      muscleGroup: this.trainingForm.get('muscleGroup')?.value,
      restTimeSeconds: this.trainingForm.get('restTimeSeconds')?.value,
      exercises: this.exercises,
      name: this.trainingForm.get('name')?.value,
    };

    this.trainingCreated.emit(training);
  }
}
