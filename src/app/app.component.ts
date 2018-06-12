import { Component, OnInit } from '@angular/core';
import { UserService } from './core/service/user.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  users: Array<User>;

  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.users = new Array<User>();

    this.service.getUser().subscribe((resp: any) => {
      for ( let i = 0; i < resp.response.length; i++) {
        const user = new User().deserialize(resp.response[i]);

        this.users.push(user);
      }

      console.log(this.users);
    });
  }
}
