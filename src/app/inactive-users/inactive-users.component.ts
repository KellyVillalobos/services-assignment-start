// Import UsersService for the handling of any user data //
import { UsersService } from './../users.service';
// Import OnChanges so you can monitor the changeing state of your component //
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
// In order to use OnInit or OnChanges you must implement them first //
export class InactiveUsersComponent implements OnInit, OnChanges {
  // Array for the inactiveUsers //
  inactiveUsers: any[];

  // After importing the UsersService you add it to the constructor to be used in
  // this component
  constructor(private userService: UsersService) {}

  ngOnInit() {
    // On the loading of the app the inactiveUsers are loaded from the UsersService //
    this.setUsers();
  }
  ngOnChanges() {
    // On any changes the app checks the inactiveUsers array for any changes in its state //
    this.setUsers();
  }
  // Method to set the inactiveUsers from the UsersService //
  setUsers() {
    this.inactiveUsers = this.userService.inactiveUsers;
  }
  // Method to change the selected users status to an active //
  onSetToActive(id: number) {
    // Method in the UsersService to change the users status
    this.userService.setToActive(id);
    // Activate the ngOnChanges method to review for changes specifically to the
    // inactiveUsers array since the method to change the staus also removes that entry
    // from the inactiveUsers array
    this.ngOnChanges();
  }
}
