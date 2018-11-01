import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from "../models/useraccount/profile.interface";
import 'rxjs/Rx';
import firebase from 'firebase';

@Injectable()
export class TutorListService {

  public db1: any;

  private tutorListRef = this.db.list<Profile>('tutor-list');

  constructor(private db: AngularFireDatabase) { }

  getTutorList() {
    return this.tutorListRef;
  }

  init() {
    this.db1 = firebase.database().ref('/');
  }


}





/*import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../models/useraccount/profile.interface';

export class TutorListService {

  private profilesCollection: AngularFirestoreCollection<Profile>; 

  private profiles: Observable<Profile[]>;

  constructor(db: AngularFirestore) {
    
    this.profilesCollection = db.collection<Profile>('profiles');

    this.profiles = this.profilesCollection.snapshotChanges().pipe(
      map( action => {
        return action.map( a=> {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    )
  }

  getTodos() {
    return this.profiles;
  }

  getTodo(id) {
    return this.profilesCollection.doc<Profile>(id).valueChanges();
  }

  updateTodo (todo: Todo, id: string) {
    return this.todosCollection.doc<Todo>(id).update(todo);
  }

  addTodo (todo: Todo) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }
}*/
