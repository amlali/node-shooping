const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
 
var option={
    useNewUrlParser: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shoppingDB',option);
console.log('inside user model');
const Schema = mongoose.Schema;
var User=new Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user'
    }
   

});
User.methods.generateHash=function (password) {
    var sult=bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,sult);
}

User.methods.addUser=function(obj){
   
   console.log('inside user creation methods.. trying to add obj = >  ' , JSON.stringify(obj));

    this.email=obj.email;
    this.password=this.generateHash(obj.password);
  
     
}

User.method.setUser=function(obj){
    this.email=obj.email;
    this.password=obj.password;
}
User.methods.isValidPassword=function(password){
    console.log(`password is:${password},hash:${this.password}`)
  return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model('User', User);