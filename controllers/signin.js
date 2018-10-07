const User=require('../model/user');
const uCheck=require('ucheck');
module.exports={
    signIn:function(){
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
        User.findOne({email:req.body.email}).exec(function(err,result){
           user.email=result.email;
           user.password=result.password;
            if(user.isValidPassword(req.body.password)){
             return res.status(200).send(user);
            }
            else{
                return res.status(400).send('not valid');
    
            }
          
        });
    
    }}}}