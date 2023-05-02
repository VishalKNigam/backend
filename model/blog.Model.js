const mongoose = require("mongoose");
const BlogSchema = mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user: {type: String, required: true},
    userID: {type: String, required: true},
    category: {type: String, required: true},
    live: {type: Boolean, required: true}

},{
    versionKey: false
})
const BlogModel = mongoose.model("user", BlogSchema);
module.exports = {BlogModel};
// title: String
// body: String
// user: String
// userID: String
// category: String
// live: Boolean