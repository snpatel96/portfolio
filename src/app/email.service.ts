import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  url = '';
  headers = new HttpHeaders({ Accept: 'application/json' });
  constructor(private http: HttpClient) {}

  SendEmail(input: any) {
    console.log(input);
    return this.http.post('https://formspree.io/f/mdovoqlq', input, {
      headers: this.headers,
    });
  }
}
