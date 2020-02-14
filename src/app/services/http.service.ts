import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const usersUrl: string = 'http://localhost:3000/users';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-type' : 'application/json'
	})
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	constructor(private http: HttpClient) { }

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(usersUrl)
	}

	getSingleUser(id: string): Observable<User> {
		return this.http.get<User>(`${usersUrl}/${id}`)
	}

	updateUser(user: User): Observable<any> {
		return this.http.patch(`${usersUrl}/${user.id}`, { name: user.name }, httpOptions)
	}
}
