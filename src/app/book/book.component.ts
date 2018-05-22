import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styles: []
})
export class BookComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  books: any;

  ngOnInit() {
    this.http.get('/book').subscribe(data => {
      this.books = data;
    });
  }

}
