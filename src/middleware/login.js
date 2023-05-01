const loginMdw = (req, res, next)=>{
    console.log(`Se hizo un request a la url ${req.url}`);
    res.setHeader("Content-Type","Application/json");
    next();
}
module.exports = loginMdw;