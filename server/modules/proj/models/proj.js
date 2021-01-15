// MODEL
//const { Schema, model } = require('mongoose');

// const postSchema = new Schema({
//   title: String,
//   content: String
// });

// const Post = model('post', postSchema);

// module.exports = Post;


console.log ('running proj')
const { Schema, model } = require('mongoose');

const projSchema = new Schema({
  title: String,
  type: String,
  desc: String,
  tech: String,
  monPic: String,
  mobPic: String,
  liveURL: String,
  codeURL: String,
  viewURL: String
});

const Proj = model('proj', projSchema);

module.exports = Proj;