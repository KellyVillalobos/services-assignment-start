// This is a service to handle any prossessing of user data //
export class UsersService {

  // Two arrays: one for active users and the other for inactive users //
  activeUsers = [
    {
      id: 1,
      name: 'Max',
      status: 'active'
    },
    {
      id: 2,
      name: 'Anna',
      status: 'active'
    }
  ];

  inactiveUsers = [
    {
      id: 3,
      name: 'Chris',
      status: 'inactive'
    },
    {
      id: 4,
      name: 'Manu',
      status: 'inactive'
    }
  ];

  // Method to change users status from inactive to active //
  setToActive(id: number) {
    console.log(id);
    // Find the inactive user by its id and set it to a new constant //
    const aUser = this.inactiveUsers.find(u => u.id === id);
    console.log(aUser);
    // Set the aUser status from inactive to active //
    aUser.status = 'active';
    // To remove the inactiveUser you just set to active you need to
    // find its index in the array by using the findIndex method where
    // the item.id is equal to the id we took in and set it to a new constant
    const slice = this.inactiveUsers.findIndex(function (item) {
      return item.id === id;
    });
    console.log(slice);
    // Remove the inactiveUser with the index you just found and remove only 1 //
    this.inactiveUsers.splice(slice, 1);
    console.log(this.inactiveUsers);
    // Add that aUser to the activeUsers array //
    this.activeUsers.push(aUser);
    console.log(this.activeUsers);
  }

  // Method to change active users status from active to inactive //
  setToInactive(id: number) {
    console.log(id);
    // Find the inactive user by its id and set it to a new constant //
    const inaUser = this.activeUsers.find(u => u.id === id);
    console.log(inaUser);
    // Set the aUser status from inactive to active //
    inaUser.status = 'inactive';
     // To remove the activeUser you just set to inactive you need to
    // find its index in the array by using the findIndex method where
    // the item.id is equal to the id we took in and set it to a new constant
    const slice = this.activeUsers.findIndex(function (item, i) {
      return item.id === id;
    });
    console.log(slice);
    // Remove the activeUser with the index you just found and remove only 1 //
    this.activeUsers.splice(slice, 1);
    console.log(this.activeUsers);
    // Add that inaUser to the inactiveUsers array //
    this.inactiveUsers.push(inaUser);
    console.log(this.inactiveUsers);
  }
}
