import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';


@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

  sendImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.sessionStorageService.getToken()}`
    });

    return this.http.post('http://localhost:3002/pet/getPetLost', formData, { headers });
  }


  recentlyReported(): Observable<any> {
    const data = ['pepe001', 'loki001', 'kuki001', 'love001', 'oddy001', 'maguie001'];
    return this.http.post('http://localhost:3002/pet/recentlyReported', data);
  }



}
