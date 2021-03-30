import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Dvd } from '../models/dvd.model';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$ : BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([])
  public dvds$ = this.dvdSubject$.asObservable()

  constructor() {
    timer(2000)
    .subscribe(()=>{
      this.dvdSubject$.next([
        {title:'Bee gees',genre:'Music',year:1976},
        {title:'Sherek',genre:'Movie',year:2008}
      ])
    })
   }


  add(d:Dvd){
    this.dvdSubject$.getValue().push(d)
   }
   remove(i:number){
     let books = this.dvdSubject$.getValue()
     if(i>=0 && i<books.length){
       books.splice(i,1)
     }
   }
   get(i:number):Observable<Dvd>{
     return this.dvds$.pipe(
       map(dvds => (i>=0 && i<dvds.length) ? dvds[i] : null),
       delay(1000)
     )
   }

}
