import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database'; 
@Injectable()
export class TodoService {
  toDolist: AngularFireList<any>;

  constructor(private firebasedb:AngularFireDatabase) { }

  getToDoList(){
    this.toDolist = this.firebasedb.list('titles');
    return this.toDolist;
  }
  addTitle(title:string){
    this.toDolist.push({
      title: title,
      isChecked: false
    });
  }
  checkorUncheckTitle($key: string,flag: boolean){
    this.toDolist.update($key, {isChecked: flag});
  }
  removeTitle($key:string){
    this.toDolist.remove($key);
  }
}
