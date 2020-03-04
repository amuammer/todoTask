import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task;
  tasks = [];

  constructor(private http: HttpClient) {
    http.get('http://localhost:3000/tasks').subscribe((data: any) => {
      this.tasks = data;
    });
  }
  add() {
    // let id = this.tasks.length;
    // this.tasks.push({ id: id++, title: this.task, isDone: false });
    // this.task = "";

    this.http
      .post('http://localhost:3000/tasks', { title: this.task, isDone: false })
      .subscribe(data => {
        this.tasks.push(data);
      });
  }
  remove(id) {
    this.tasks = this.tasks.filter(t => {
      return t.id !== id;
    });
  }

  isDone(id) {
    //  this.tasks.filter((t)=>{
    //     if (t.id == id) {
    //         t.isDone = !t.isDone;
    //     }
    //   });

    for (const t of this.tasks) {
      if (t.id == id) {
        t.isDone = !t.isDone;
      }
    }
  }
}
