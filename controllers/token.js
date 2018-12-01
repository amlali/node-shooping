var date=require('./../helper/date');
var User=require('./../model/user');
var jwt = require('jsonwebtoken');

module.exports={
access: function(req,res,next){

    var token=req.headers['auth'];

    console.log("incoming token in heade r======> ")
    console.log(token);
    
    if(!token){
        console.log("token",token);
        
   return res.status(401).send("noToken");
    }

 
        var decoded;

            try{
                console.log("inside try");
                
                decoded = jwt.verify(token,'amal1234');
                console.log("token",decoded);
       
                if(decoded.expireDate>date.getDate())
                {  
                    console.log(decoded);
                     res.status(200).send();
                        next();   
             }
             else{
                return  res.status(401).send();
             }
        
            }
    catch(e){
        
        return  res.status(401).send(e);
    }





  }
}