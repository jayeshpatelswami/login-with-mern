const jwt =require('jsonwebtoken');

const jwt_secrate=" 23w4er!@#$%^YHbjgtfre4dhgdyfvhfsgygfasesrjk";

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token');

    if (!token) {
        res.status(401).error({error:"Plese authenicate using valid credential"});
    }

    try{
        const verify = jwt.verify(token,jwt_secrate)
        req.user = verify.user;
        next();

    }
    catch(error){
    res.status(401).send({error:"Plese authenicate using valid credential"})
    }
}

module.exports = fetchuser;