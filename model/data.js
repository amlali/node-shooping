const mongoose = require('mongoose');
 
var option={
    useNewUrlParser: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shoppingDB',option);
console.log('inside user model');
const Schema = mongoose.Schema;
var ShoppingList=new Schema({
   
    email:{
        type:String,
        required:true
    },
   list:[
       {
       name:{
        type:String,
        required:true
       },
       amount:{
        type:Number,
        required:true
       }
   }]

});
ShoppingList.methods.dataForUser=function(email,list){
    console.log('inside user creation methods.. trying to add obj = >  ' , JSON.stringify({email,list}));
    this.email=email;
    this.list=list;
    
}
module.exports = mongoose.model('ShoppingList', ShoppingList);