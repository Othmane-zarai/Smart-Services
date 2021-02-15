const mongoose = require("mongoose"),extend = require('mongoose-schema-extend');
const UserSchema = require('./User');
const AssistantSchema = UserSchema.extend({
    serviceType:{
        type:String,
        required:true
    },
    lat:{
        type: Number,
        required: true
    },
    lng:{
        type:Number,
        required:true
    }
})

const Assistant = mongoose.model('Assistant',AssistantSchema);
module.exports = Assistant;