Accounts.onCreateUser(function(options, user) {
  user.profile = {
    firstname: "",
    lastname: "",
    phone: ""
  };
  return user;
});
