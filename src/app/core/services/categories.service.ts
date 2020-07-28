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

  getList() {
    return this.http.get(`${API_URL}categories/get-list`);
  }

  add(data) {
    return this.http.post(`${API_URL}categories/create`, data);
  }

  update(data) {
    return this.http.put(`${API_URL}categories/update-details`, data);
  }

  updateCategoriesOrder(data) {
    return this.http.put(`${API_URL}categories/update-order`, data);
  }
}
