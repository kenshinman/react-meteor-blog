import Posts from "../imports/api/collections/Posts";

//fetch user Profile
JsonRoutes.add("GET", "api/users/:id/profile", function(req, res){
	const _id = req.params.id;
	console.log(_id);
	JsonRoutes.sendResult(res, {
		data: Meteor.users.findOne({_id},{fields:{services: 0}})
	});
})

//feth posts that belong to a user
JsonRoutes.add("GET", "api/posts/:userId/", function(req, res){
	let id = req.params.userId;

})

//fetch all posts
JsonRoutes.add("GET", "api/posts", function(req, res) {
  //ser defuault params
  let limit = 10;
  let orderBy = "createdAt";
  let sortDirection = -1;
  if (req.query.direction) {
    sortDirection = req.query.direction.toLowerCase() == "desc" ? -1 : 1;
  }

  if (req.query.limit) {
    limit = Number(req.query.limit);
  }
	
	if (req.query.orderBy) {
    orderBy = req.query.orderBy;
  }

  //   console.log(typeof sortDirection);
  JsonRoutes.sendResult(res, {
    data: Posts.find(
      {},
      { limit, sort: { [orderBy]: sortDirection } }
    ).fetch()
  });
});

//fetch single post
JsonRoutes.add("GET", "api/posts/:id", function(req, res) {
  JsonRoutes.sendResult(res, {
    data: Posts.findOne({ _id: req.params.id })
  });
});

//create new Post
JsonRoutes.add("POST", "api/posts/new", function(req, res) {
  const { title, content, featuredImage } = req.body;
  const newPost = {
    title,
    content,
    featuredImage,
    author: "Kenshinman",
    createdAt: new Date()
  };
  JsonRoutes.sendResult(res, {
    data: Posts.insert(newPost)
  });
});

//update post
JsonRoutes.add("PUT", "api/posts/:id/update", function(req, res) {
  const { title, content, featuredImage } = req.body;
  let id = req.params.id;
  const newPost = {
    title,
    content,
    featuredImage,
    author: "Kenshinman",
    createdAt: new Date()
  };
  JsonRoutes.sendResult(res, {
    data: Posts.update({ _id: id }, { $set: { title, content, featuredImage } })
  });
});
