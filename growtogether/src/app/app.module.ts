import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/auth/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatList, MatListModule } from '@angular/material/list';
import { StudentsDetailComponent } from './components/students-detail/students-detail.component';
import { TrainingDetailsComponent } from './components/training-details/training-details.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';

const typographyConfig = {
  fontFamilies: {
    main: ['Montserrat', 'sans-serif'],
  },
};

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
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsDetailComponent,
    TrainingDetailsComponent,
    AddTrainingComponent,
    AddExerciseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...matModules,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
