import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Eletronic } from '../models/eletronic';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EletronicsService {

  private eletronicSubject$ : BehaviorSubject<Eletronic[]> = new BehaviorSubject<Eletronic[]>([])
  public eletronics$ = this.eletronicSubject$.asObservable()


  constructor() { 
    timer(1000)
      .subscribe(()=>{
        this.eletronicSubject$.next([
          {name:"headphone",brand:"LG",price:200,description:"headphone bluetooth"},
          {name:"Phone",brand:"Xiaomi",price:800,description:"Phone Redmi7"},
          {name:"Notebook",brand:"Acer",price:2000,description:"Notebook acer 4gb"},
          {name:"TV",brand:"Philips",price:1399,description:"Tv smart Philips "},
          {name:"Mouse",brand:"Positivo",price:60,description:"Mouse bluetooth"}
        ])
      })
   }

   get(i:number):Observable<Eletronic>{
    return this.eletronics$.pipe(
      map(eletronics => (i>=0 && i < eletronics.length) ? eletronics[i] : null),
      delay(1000)
    )
  }
}
