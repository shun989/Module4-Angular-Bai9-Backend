import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../service/users.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allUsers: any = [];
  search: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getDAta().subscribe(data=>{
      this.allUsers = data;
      this.allUsers.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {

  }
  displayedColumns: any[] =
    ['id', 'name', 'username', 'address', 'phone','website','company']
}
