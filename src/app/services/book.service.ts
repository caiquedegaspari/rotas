import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable, from } from 'rxjs';
import { Book } from '../models/book.model';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private bookSubject$:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])
  public books$ = this.bookSubject$.asObservable()
  constructor() { 
    timer(2000)
    .subscribe(()=>{
      this.bookSubject$.next([
        {title:"Book 1",page:200,authors:['Nicole','John']},
        {title:"Book 2",page:192,authors:['Nick']},
        {title:"Book 3",page:93,authors:['Watson']},
        {title:"Book 4",page:273,authors:['Anne','Peter','Sammy']},
        {title:"Book 5",page:550,authors:['Paul','John Amber']}
      ])
    })
  }

  add(b:Book){
   this.bookSubject$.getValue().push(b)
  }
  remove(i:number){
    let books = this.bookSubject$.getValue()
    if(i>=0 && i<books.length){
      books.splice(i,1)
    }
  }
  get(i:number):Observable<Book>{
    return this.books$.pipe(
      map(books => (i>=0 && i<books.length) ? books[i] : null),
      delay(1000)
    )
  }
}
