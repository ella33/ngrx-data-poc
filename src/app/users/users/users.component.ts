import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '@core/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<any[]>;
  loading$: Observable<boolean>;

  constructor(private usersService: UsersService) {
    this.users$ = this.usersService.entities$;
    this.loading$ = this.usersService.loading$;
  }

  ngOnInit(): void {
    this.loading$.subscribe((value) => {
      console.log(value);
    });
    this.usersService.getAll();
  }
}
