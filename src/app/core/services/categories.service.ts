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

  get(params) {
    return this.http.get(`${API_URL}categories/get`, {params});
  }

  getParentElements(params) {
    return this.http.get(`${API_URL}categories/get-parent-list`, {params});
  }

  getList() {
    return this.http.get(`${API_URL}categories/get-list`);
  }

  getCategoryById(params) {
    return this.http.get(`${API_URL}categories/get-by-id`, {params});
  }

  add(data) {
    return this.http.post(`${API_URL}categories/create`, data);
  }

  update(data) {
    return this.http.put(`${API_URL}categories/update-details`, data);
  }

  remove(params) {
    return this.http.delete(`${API_URL}categories/remove`, {params});
  }

  updateCategoriesOrder(data) {
    return this.http.put(`${API_URL}categories/update-order`, data);
  }
}
