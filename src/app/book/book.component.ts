import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books$:Observable<Book[]>

  constructor(private booksService:BookService) { }

  ngOnInit(): void {
    this.books$ = this.booksService.books$
  }

}
