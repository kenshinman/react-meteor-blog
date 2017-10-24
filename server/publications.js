import Posts from "../imports/api/collections/Posts";
JsonRoutes.ErrorMiddleware.use(RestMiddleware.handleErrorAsJson);
JsonRoutes.setResponseHeaders({
  "Cache-Control": "no-store",
  Pragma: "no-cache",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, X-Requested-With"
});

Meteor.publish(
  "AllPosts",
  function() {
    return Posts.find({});
  },
  {
    url: "api/posts",
    httpMethod: "get"
  }
);

Meteor.publish(
  "SinglePost",
  function(postId) {
    check(postId, String);
    return Posts.findOne({ _id: postId });
  },
  {
    url: "api/post/:0",
    httpMethod: "get"
  }
);
