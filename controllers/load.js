var ShoppingList=require('./../model/data');
module.exports={
Load:function(){
return function(req,res,next){



ShoppingList.findOne({email:req.body.email}).then((result)=>{
    var tempList=[];
    (result.list).forEach(element => {
      var elem={
          name:element.name,
          amount:element.amount

      }
      tempList.push(elem);
      
  });
  console.log(tempList);

             return  res.status(200).send(tempList);

}).catch((error)=>{
    return res.status(404).send(error)
});





}}}