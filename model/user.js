const mongoose = require('mongoose');
const bcrypt=require('bcrypt');
var jwt = require('jsonwebtoken');
var moment=require('moment')
var date=require('./../helper/date');
const random = require('random')
const ObjectID=require('mongodb').ObjectID

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

User.methods.generateToken=function(userId){
    var user=this;
    var access={
        _id:userId,
        issueDate:date.getDate(),
        expireDate:moment(date.getDate(),'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY'),
        randnumber:random.int(min = 100, max = 10000) 

    };
console.log(access);

var token=jwt.sign(access,'amal1234');

return token;
}

// User.methods.verifyToken=function(token){
//     var decoded;

//     try{
//         decoded = jwt.verify(token,'amal1234');
//         console.log(decoded);
        

//         if(decoded.expireDate>date.getDate())
//         {  
            
//        return decoded;
//          }
//     else {
//         return decoded;
//          }
        
//     }
//     catch(e){
//         console.log('not token');

//        return  e
//     }
    
    
// }




module.exports = mongoose.model('User', User);