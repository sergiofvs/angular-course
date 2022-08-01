import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../animal';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private base_url: string = `${API_URL}animals`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.base_url);
  }

  post(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.base_url, animal);
  }

  remove(animal_id: number) {
    return this.http.delete<number>(`${this.base_url}/${animal_id}`);
  }
}
