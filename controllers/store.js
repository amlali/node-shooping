var ShoppingList=require('./../model/data');
var ObjectID = require('mongodb').ObjectID;
module.exports={
Store:function(){
return function(req,res,next){

var shoppingList=new ShoppingList();
ShoppingList.findOne({email:req.body.email}).then((result)=>{
             if(!result){
                 
                 shoppingList.dataForUser(req.body.email,req.body.list);
                 shoppingList.save();

                 return  res.status(200).send();

             }
             else{
                 var tempList=[];
                 (result.list).forEach(element => {
                   var elem={
                     //  _id:new ObjectID(),
                       name:element.name,
                       amount:element.amount

                   }
                   tempList.push(elem);
                   
               });

               (req.body.list).forEach(element => {
                var elem={
                 //   _id:new ObjectID(),
                    name:element.name,
                    amount:element.amount

                }
                tempList.push(elem);
                
            });
                 
                 console.log("inside update");
                 console.log(tempList);
                 
                 ShoppingList.deleteOne({email:req.body.email});
             shoppingList.dataForUser(req.body.email,tempList);
              shoppingList.save();
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





}}}