var express=require('express');
var url = require('url');
var router = express.Router();

var multer = require('multer');
var upload = multer({dest:'public/images/'});
var fs = require('fs');


router.get('/image', function(req, res){
		res.sendfile('views/image.html');
});

router.post('/image', upload.any(),  function(req,res,next){

		var path = './images/';
		var realpath = path+req.files[0].originalname;

		var rename1 = '/root/myapp/public/images/'+req.files[0].filename;
		var rename2 = '/root/myapp/public/images/'+req.files[0].originalname;
		fs.rename(rename1, rename2, function(err){
				if(err){
				console.log(err);
				}
				else{
				console.log("rename success");
        	    	fs.readFile('/root/myapp/public/images/'+req.files[0].originalname,function(err,data){
			        	var tmp = new Buffer(data).toString('base64');
						var purl = '/images/'+req.files[0].originalname;
         		        res.io.emit('image', {img:true, buffer:tmp, url:purl});
						//서버에 저장되있는 url로 받아오라고? 
		         	});

             		res.sendfile('views/image.html');
				}
		});



		/*
		 * res.io.emit('image',{img:true, buffer:tmp});
		res.sendfile('views/image.html');
		*/
});
/*
exports.upload = function(req, res){
	upload(req, res, function(err){
			console.log('qweqrqwrqrwqrwrqwr');
			console.log(req.file);
			fs.readFile(req.file.image.path, function(err, data){
					var dirname = "root/myapp/public/images";
					var newPath = dirname+req.body.filename;
					fs.writeFile(newPath, data, function(err){
							if(err){
							console.log('error upload');
							res.end();
							}
							else{
							console.log('file is uploaded');
							res.end();
							}
						});
				});
		});
};*/
module.exports = router;
