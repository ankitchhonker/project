const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 

const listSchema = new Schema({
    title: {
        type: String,
        required:true
            
    },
    description: {
        type: String,
        required:true   
    },

    image:{
        
            url:String,
            filename:String
    },
    
    price: {
        type: Number,
        required:true   
       
    },
    location: {
        type: String,
        required:true   
    },
    country: {
        type: String,
        required:true   
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Reviews"
        }
    ],
    owner:
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        },
        geometry: {
            type: {
              type: String, // Don't do `{ location: { type: String } }`
              enum: ['Point'], // 'location.type' must be 'Point'
              
            },
            coordinates: {
              type: [Number]
            },
          },
        category:{
            type:String,
            required:true
        }
    
});

const Listings = mongoose.model("Listings", listSchema);
module.exports = Listings;
