import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  serverURL: string = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) { }

  public getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.serverURL}/albums`);
  }

  public delAlbum(id: number): Observable<Album> {
    return this.http.delete<Album>(`${this.serverURL}/albums/${id}`);
  }
}
