import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { FeaturesComponent } from './components/features/features.component';

const routes: Routes = [
  { path: '*', redirectTo: 'auth' },
  {
    path: '',
    component: FeaturesComponent,
    loadChildren: () =>
      import('./components/features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./components/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'student',
    component: FeaturesComponent,
    loadChildren: () =>
      import('./components/features/student/student.module').then(
        (m) => m.StudentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
