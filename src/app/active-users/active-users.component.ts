// Import UsersService for the handling of any user data //
import { UsersService } from './../users.service';
// Import OnChanges so you can monitor the changeing state of your component //
import { Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
// In order to use OnInit or OnChanges you must implement them first //
export class ActiveUsersComponent implements OnInit, OnChanges {
  // Array for the activeUsers //
  activeUsers: any[];

  // After importing the UsersService you add it to the constructor to be used in
  // this component
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    // On the loading of the app the activeUsers are loaded from the UsersService //
    this.setUsers();
  }
  ngOnChanges() {
    // On any changes the app checks the inactiveUsers array for any changes in its state //
    this.setUsers();
  }
  // Method to set the inactiveUsers from the UsersService //
  setUsers() {
    this.activeUsers = this.usersService.activeUsers;
  }
  // Method to change the selected users status to an inactive //
  onSetToInactive(id: number) {
    // Method in the UsersService to change the users status //
    this.usersService.setToInactive(id);
    // Activate the ngOnChanges method to review for changes specifically to the
    // activeUsers array since the method to change the staus also removes that entry
    // from the inactiveUsers array
    this.ngOnChanges();
  }
}
