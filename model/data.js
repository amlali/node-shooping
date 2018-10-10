const mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

var option={
    useNewUrlParser: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shoppingDB',option);
console.log('inside user model');
const Schema = mongoose.Schema;
var ShoppingList=new Schema({
   
    _id:{},
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
ShoppingList.methods.dataForUser=function(_id,list){
    console.log('inside user creation methods.. trying to add obj = >  ' , JSON.stringify({_id,list}));
    this._id=_id;
    this.list=list;
    
}
module.exports = mongoose.model('ShoppingList', ShoppingList);