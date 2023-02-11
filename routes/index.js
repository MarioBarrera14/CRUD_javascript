const { Router }=require('express');
const router= Router();


//rtas
router.get('/',(req,res)=>{
    res.json({"title":"Spielberghola mundo"})
});

module.exports=router;