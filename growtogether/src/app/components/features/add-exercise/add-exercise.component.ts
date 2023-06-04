import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'src/app/model/exercise';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.scss']
})
export class AddExerciseComponent implements OnInit {

  @Output() exerciseCreated = new EventEmitter<Exercise>();

  exerciseForm = new FormGroup({
    name: new FormControl('', Validators.required),
    sxr: new FormControl('', Validators.required),
    technique: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  addExercise() {
    let exec: Exercise = {
      name: this.exerciseForm.get('name')?.value,
      sxr: this.exerciseForm.get('sxr')?.value,
      technique: this.exerciseForm.get('technique')?.value,
    };

    this.exerciseCreated.emit(exec);
  }

}
