import { LoginComponent } from './login.component';
import { AuthenticationService } from '../_services';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms'; 
import { of } from 'rxjs'; 


  describe('UsersService', () => {
    let authenticationService: AuthenticationService; 
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          LoginComponent
        ],
        imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule], 
        providers: [AuthenticationService]
      });
  
      authenticationService = TestBed.get(AuthenticationService); 
    });
  
    it('should be created', () => { 
      expect(authenticationService).toBeTruthy();
    });

    it('should login', () => {
      const loginResponse = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }];
      let response;
      spyOn(authenticationService, 'login').and.returnValue(of(loginResponse));
  
      authenticationService.login('Sincere@april.biz').subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(loginResponse);
    });
  });

  

