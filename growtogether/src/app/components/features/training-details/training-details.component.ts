import { Component, Input, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {

  @Input() training!: Training

  constructor() { }

  ngOnInit(): void {
  }

}
