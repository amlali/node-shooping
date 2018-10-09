var User=require('./../model/user');
const uCheck=require('ucheck');
const ObjectID=require('mongodb').ObjectID
module.exports={
signUp:function(){
return function(req,res,next){
var x=[

{
    param: 'email',
    label: 'Email',
    required: true,
    type: 'string',
    regex:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
},
{
    param: 'password',
    label: 'Password',
    required: true,
    type: 'string',
    length: { min:8, max: 20},
    regex: /^[A-Za-z0-9_-]{8,20}$/
}];

let ucheck = new uCheck.validate(req).scenario(x);
if(ucheck.hasErrors()){
    res.status(400).send({error: ucheck.getErrors()});
    return false;
}
else{
    var user=new User();
    console.log('valid wallahy');
    
    User.findOne({email:req.body.email}).then((result)=>{
        
        if(!result)
        {
            
            var newUser={
                email:req.body.email,
                password:req.body.password
                
            };
            console.log('not Exist Email before add user ')
            user.addUser(newUser);
            user.save();

            var token= user.generateToken(user._id);
            if(token){
                res.setHeader('auth',token);
                return res.status(200).send(token);   
            }
            else{
                return res.status(400).send('this Email Exists');
            }
         
            
        }
        

    }).catch((e)=>{
        console.log(e);
        
        return  res.status(404).send(e);

    });
    

}

}}


}