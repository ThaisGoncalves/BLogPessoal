import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule) { }

  logar(userLogin: UserLogin){
    return this.http.post('http://localhost:9000/users/logar', userLogin )
  }

  cadastrar(user: User){
    return this.http.post('http://localhost:9000/users/cadastrar', user )
  }
}

