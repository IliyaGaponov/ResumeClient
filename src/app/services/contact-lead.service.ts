import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Lead } from '../models/lead';

@Injectable({
  providedIn: 'root'
})
export class ContactLeadService {

  constructor(private http: HttpClient) { }

  createLead(lead: Lead) {
    return this.http.post(environment.apiUrl + 'contact', lead);
  }
}
