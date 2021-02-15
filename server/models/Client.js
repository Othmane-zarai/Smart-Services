const mongoose = require('mongoose'),extend = require('mongoose-schema-extend');
const UserSchema = require('./User');
const ClientSchema = UserSchema.extend({
    description:{
        type:String,
        require:false
    }
})

const Client = mongoose.model('Client',ClientSchema);
module.exports = Client;