const User = require('../models/User');
async function affectAssistant(serviceType){
    User.find({serviceType:serviceType,role:"assistant"})
     .then(function(assistants){
        var names = [];
        assistants.map(function(assistant, index){
            names[index] = assistant.username;
        })
        console.log(names);
        return names;
     })
     .catch(function(err){
         console.log(err);
     });
}
module.exports = affectAssistant;