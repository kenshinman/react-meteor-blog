import { Meteor } from "meteor/meteor";
import Posts from "../imports/api/collections/Posts";

Meteor.methods({
  "posts.insert": function(newPost) {
      if(newPost){
          console.log(newPost);
          Posts.insert(newPost)
      }else{
          throw new Meteor.Error(500, "Nothing was done")
      }
  }
});
