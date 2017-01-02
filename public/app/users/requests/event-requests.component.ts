import { UserService } from './../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './event-request.component.html'
})
export class EventRequestsComponent implements OnInit {
    private requests: any[];
    private currentUser: String;

    constructor(private userService: UserService) {

    }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')).username;

        this.userService.getUserByUsername(this.currentUser)
            .subscribe(res => {
                // this.requests = res.requests;
                console.log(res);
            })
    }
}
