var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp_v3", {useMongoClient: true});
// mongoose.Promise = global.Promise;

// Schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String, 
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment"
            }
        ]
});

// creates model
module.exports = mongoose.model("Campground", campgroundSchema);