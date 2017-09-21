var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's rest", 
            image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui nibh, tincidunt ut luctus quis, feugiat sit amet mauris. Maecenas posuere sapien in nulla convallis, fermentum aliquet magna aliquet. Integer at interdum arcu. Duis lorem neque, volutpat vel pellentesque quis, vestibulum sed tortor. Vestibulum ac porta lorem, vitae vulputate lorem. Duis ullamcorper orci in sem tempor rutrum. Phasellus tempor risus purus, id mattis quam fringilla sed. Aliquam ut mi lacus. Aliquam a dignissim leo. Aliquam aliquam varius finibus. Morbi molestie, augue at tincidunt lacinia, nisl arcu sollicitudin justo, id posuere quam magna eget massa."
            
        },
        {
            name: "Desert Mesa", 
            image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui nibh, tincidunt ut luctus quis, feugiat sit amet mauris. Maecenas posuere sapien in nulla convallis, fermentum aliquet magna aliquet. Integer at interdum arcu. Duis lorem neque, volutpat vel pellentesque quis, vestibulum sed tortor. Vestibulum ac porta lorem, vitae vulputate lorem. Duis ullamcorper orci in sem tempor rutrum. Phasellus tempor risus purus, id mattis quam fringilla sed. Aliquam ut mi lacus. Aliquam a dignissim leo. Aliquam aliquam varius finibus. Morbi molestie, augue at tincidunt lacinia, nisl arcu sollicitudin justo, id posuere quam magna eget massa."
            
        },
        {
            name: "Cannion floor", 
            image: "https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui nibh, tincidunt ut luctus quis, feugiat sit amet mauris. Maecenas posuere sapien in nulla convallis, fermentum aliquet magna aliquet. Integer at interdum arcu. Duis lorem neque, volutpat vel pellentesque quis, vestibulum sed tortor. Vestibulum ac porta lorem, vitae vulputate lorem. Duis ullamcorper orci in sem tempor rutrum. Phasellus tempor risus purus, id mattis quam fringilla sed. Aliquam ut mi lacus. Aliquam a dignissim leo. Aliquam aliquam varius finibus. Morbi molestie, augue at tincidunt lacinia, nisl arcu sollicitudin justo, id posuere quam magna eget massa."
            
        }
    ];

function seedDB() {
    // Remove Campgrounds from DB
        Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        } 
        
        console.log("Removed all campgrounds");
        
        // Add Campgrounds
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Campground created");
                    
                    // Add Comments
                    Comment.create({
                        text: "This place is great but I wish there was internet",
                        author: "Homer"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    })
                }
            });
        });
    });
    
    
}

module.exports = seedDB;