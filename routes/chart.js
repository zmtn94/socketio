var express=require('express');
var url = require('url');
var router = express.Router();
var fs = require('fs');


router.get('/chart', function(req, res){
		res.sendfile('views/chart.html');
});
router.post('/chart', function(req, res){
   /*
   data1 = req.body.test1 ;
   console.log(data1);
   */
   res.io.emit('chart', {crt:true, data1:req.body.test1, data2:req.body.test2, data3:req.body.test3, data4:req.body.test4, data5:req.body.test5, data6:req.body.test6});
   res.sendfile('views/chart.html');
});

module.exports = router;
