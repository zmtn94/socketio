var express=require('express');
var router = express.Router();

router.get('/input', function(req, res){
		res.render('input',{});
});

router.post('/input',  function(req,res,next){
	    //console.log(req);
		res.io.emit('test',req.body.contents);
		console.log(req.body.contents);
		res.render('input',{});
});

module.exports = router;
