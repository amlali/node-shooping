var ShoppingList=require('./../model/data');
module.exports={
Load:function(){
return function(req,res,next){



ShoppingList.find({email:req.body.email}).then((result)=>{
             return  res.status(200).send(result);

}).catch((error)=>{
    return res.status(404).send(error)
});





}}}