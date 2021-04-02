import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Todo } from '../_models/Todo';

@Injectable({
    providedIn: 'root'
})

export class TodoService{
    baseUrl = 'https://jsonplaceholder.typicode.com/';

    constructor(private http: HttpClient) { }

    getTodos() {
        return this.http.get<Todo[]>(this.baseUrl + 'todos');
    }

    getTodo(id: number) {
        return this.http.get<Todo>(this.baseUrl + 'todos/' + id);
    }
}