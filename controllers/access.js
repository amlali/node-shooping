var date=require('./../helper/date');
var User=require('./../model/user');
var jwt = require('jsonwebtoken');

module.exports={
access:function(){
return function(req,res,next){


    var token=req.headers['auth'];
    console.log(token);
    
    if(!token){
        console.log("token",token);
        
   return res.status(404).send();
}
//  var valid= user.verifyToken(token);
//  console.log(valid);
 
var decoded;

    try{
        console.log("inside try");
        
        decoded = jwt.verify(token,'amal1234');
        console.log("token",decoded);
        
console.log(decoded.expireDate);

        if(decoded.expireDate>date.getDate())
        {  
            console.log(decoded);
            console.log('true');
            
            User.findById(decoded._id).then((user)=>{
                if(user){
                    console.log(' valid');
                
                    return  res.status(200).send();
                }
                else{
                    console.log('not valid');
                    
                    return res.status(400).send();
                }

            }).catch(()=>{
             return res.status(400).send("not valid token");

            })
 
}
}
catch(e){
    return  res.status(404).send(e);

}





}}}