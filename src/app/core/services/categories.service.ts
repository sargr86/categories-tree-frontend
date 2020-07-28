import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../constants/app.config';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private http: HttpClient
  ) {
  }

  get() {
    return this.http.get(`${API_URL}categories/get`);
  }
}
