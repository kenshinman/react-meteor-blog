import { Meteor } from "meteor/meteor";
import { isValid } from "../imports/helpers/isValid";
import Posts from "../imports/api/collections/Posts";

Meteor.methods({
  "posts.insert": function(newPost) {
    if (newPost) {
      newPost.createdAt = new Date();
      newPost.author = "Kehind Orilogbon";
      console.log(newPost);
      if (
        isValid(newPost.title, "string", 4) &&
        isValid(newPost.content, "string", 20) &&
        isValid(newPost.featuredImage, "string", 10)
      ) {
        let status =  Posts.insert(newPost);
        if(status){
          return {
            success: true,
            _id: status
          }
        }
      } else {
        throw new Meteor.Error(
          401,
          "Please check all fields to make sure they are filled rightly"
        );
      }
    } else {
      throw new Meteor.Error(500, "Nothing was done");
    }
  },
  "posts.update": function(newPost) {
    if (newPost) {
      Posts.update(
        { _id: newPost.id },
        {
          $set: {
            title: newPost.title,
            content: newPost.content,
            featuredImage: newPost.featuredImage
          }
        }
      );
    }
  },
});
