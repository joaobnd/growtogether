import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { StudentRoutingModule } from './student-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTrainingComponent } from '../add-training/add-training.component';
import { FeaturesModule } from '../features.module';

const matModules = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatRadioModule,
  MatExpansionModule,
  MatTableModule,
  MatListModule,
];

@NgModule({
  declarations: [AddComponent, DetailComponent],
  imports: [
    StudentRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeaturesModule,
    ...matModules,
  ],
})
export class StudentModule {}
