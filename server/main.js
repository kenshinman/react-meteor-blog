import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  console.log(Roles.userIsInRole("addUsersToRoles", "admin"))
});
