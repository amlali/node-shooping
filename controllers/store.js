var ShoppingList=require('./../model/data');
var ObjectID = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');
module.exports={
Store:function(){
return function(req,res,next){

var shoppingList=new ShoppingList();
var token=req.headers['auth'];
var decoded;

try{
    console.log("inside try store");
    console.log("token stor",token);
    
    decoded = jwt.verify(token,'amal1234');
    console.log("token store:-------",decoded);

ShoppingList.findOne({_id:decoded._id}).then((result)=>{
    console.log('=========================>',result);

             if(!result){
                 console.log('=========================>',result);
                 
                 shoppingList.dataForUser(decoded._id,req.body.list);
                 shoppingList.save();
                 console.log('=========================>',shoppingList);

                 return  res.status(200).send();

             }
             else{
                 var tempList=[];
                 (result.list).forEach(element => {
                   var elem={
                       name:element.name,
                       amount:element.amount

                   }
                   tempList.push(elem);
                   
               });
            

               (req.body.list).forEach(element => {
                var elem={
                    name:element.name,
                    amount:element.amount

                }
                tempList.push(elem);
                
            });
                 
                 console.log("inside update");
                 console.log(tempList);
                 
              ShoppingList.findOneAndRemove({_id:decoded._id}).then(()=>{
                shoppingList.dataForUser(decoded._id,tempList);
                shoppingList.save();
              });
             
                // ShoppingList.findOneAndUpdate({email:req.body.email},{email:req.body.email,list:tempList});

                 return  res.status(200).send();

             }
            //  ShoppingList.deleteOne({email:req.body.email});
            //  shoppingList.dataForUser(req.body.email,tempList);
            //   shoppingList.save();


}).catch((error)=>{
    console.log("leh ha");
    
    return res.status(404).send(error)
});
}
catch(e){
    return  res.status(401).send(e);
}


}}}