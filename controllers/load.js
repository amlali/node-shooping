var ShoppingList=require('./../model/data');
var jwt = require('jsonwebtoken');

module.exports={
Load:function(){
return function(req,res,next){


    var token=req.headers['auth'];
    console.log("in load",token);
    
    var decoded;
    
    try{                        
        console.log("inside try load");
        
        decoded = jwt.verify(token,'amal1234');
ShoppingList.findById(decoded._id).then((result)=>{
    console.log('result------------>',result);
    
    var tempList=[];
    (result.list).forEach(element => {
      var elem={
          name:element.name,
          amount:element.amount

      }
      tempList.push(elem);
      
  });
  console.log(tempList);
  console.log("=============================in side load",tempList);

    return res.status(200).send(tempList);

}).catch((error)=>{
    console.log('==================>catch',error);
    
    return res.status(404).send(error)
});

    }
catch(e){
    console.log('==================>',e);

    return res.status(404).send(e)

}


}}}