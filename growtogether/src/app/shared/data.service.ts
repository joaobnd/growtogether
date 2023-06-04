import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private afs: AngularFirestore) {}

  addStudent(student: Student) {
    return this.afs.collection('/Students').add(student);
  }

  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  deleteStudent(student: Student) {
    return this.afs.collection('/Students').doc(student.id).delete();
  }

  updateStudent(id: any, student: Student) {
    console.log(student.id);
    return this.afs.collection('Students').doc(id).update(student);
  }

  getStudentById(id: any) {
    return this.afs.collection('/Students').doc(id).valueChanges();
  }
}
