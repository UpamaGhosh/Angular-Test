import { ProfileComponent } from './profile.component';
import { UserService } from '../_services';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs'; 


  describe('UsersService', () => {
    let usersService: UserService; 
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [
          ProfileComponent
        ],
        imports: [HttpClientTestingModule, RouterTestingModule], 
        providers: [UserService]
      });
  
      usersService = TestBed.get(UserService); 
    });
  
    it('should be created', () => { 
      expect(usersService).toBeTruthy();
    });

    it('should return a post', () => {
      const postResponse = [{
        "userId": 2,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
      },
      {
        "userId": 2,
        "id": 12,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
      }];
      let response;
      spyOn(usersService, 'getAllPosts').and.returnValue(of(postResponse));
  
      usersService.getAllPosts(2).subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(postResponse);
    });
  });

  

