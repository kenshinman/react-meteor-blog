import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

const Schemas = {};

const Posts = new Mongo.Collection("posts");

Schemas.Post = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  content: {
    type: String,
    label: "Title",
    optional: false
  },
  featuredImage: {
    type: String,
    label: 'Image',
    optional: true
  },
  createdAt: {
    type: Date,
    label: "Created On",
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();
      }
    }
  },
  author: {
    type: String,
    optional: false
  }
});

Posts.allow({
  insert: function(){
    return true;
  }
})

Posts.attachSchema(Schemas.Post);

export default Posts;
