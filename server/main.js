import { Meteor } from 'meteor/meteor';
import Posts from '../imports/api/collections/Posts';

Meteor.startup(() => {
  //console.log(Posts.find().fetch());
});

Meteor.publish('AllPosts', function(){
  return Posts.find({});
})

