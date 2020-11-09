import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'profile.component.html' })
export class ProfileComponent {
    text = "Profile Detail"
    loading = false;
    posts= [];
    comments= [];
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    constructor(private userService: UserService,private authenticationService: AuthenticationService , private route: ActivatedRoute, private router: Router)
    {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }
    
    ngOnInit() {
        this.loading = true;

        this.userService.getAllPosts(this.currentUser.id).subscribe(posts => {
            this.loading = false;
            posts.forEach(post => {
                JSON.stringify(post);
                this.userService.getAllComments(post.id).subscribe(comments => {
                    post.comment = comments;
            });
        });
        this.posts = posts;

        });
    }
        

    
}