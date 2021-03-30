import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$:Observable<Book> = null;
  index:number;
  authors:string[];
  constructor(private route:ActivatedRoute,
     private bookService:BookService,
     private router:Router) { }

  ngOnInit(): void {
    console.log("SNAPSHOT:index", this.route.snapshot.paramMap.get("index"))

    this.book$ = this.route.paramMap
    .pipe(
      tap((params:ParamMap)=>this.index = +params.get('index')),
      switchMap((params:ParamMap)=> this.bookService.get( + params.get('index'))),
      tap((b)=>{ this.authors = (b)? b.authors : [] })
    ) 
    /* .subscribe((param:ParamMap)=>{
      console.log("SUBSCRIBE:Index ", param.get('index'))
    }) */
  }

  remove(){
    this.bookService.remove(this.index)
    this.router.navigate(['/books'])
  }

  goAuthors(){
    let url = "/books/" + this.index + '/authors'
    this.router.navigate([url,{authors: this.authors}])
  }

}
