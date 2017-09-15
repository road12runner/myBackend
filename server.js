var url     = require('url'),
    http    = require('http'),
    https   = require('https'),
    fs      = require('fs'),
    qs      = require('querystring'),
    express = require('express'),
    bodyParser = require('body-parser'),
    app     = express();


app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));


// // Load config defaults from JSON file.
// // Environment variables override defaults.
// function loadConfig() {
//   var config = JSON.parse(fs.readFileSync(__dirname+ '/config.json', 'utf-8'));
//   for (var i in config) {
//     config[i] = process.env[i.toUpperCase()] || config[i];
//   }
//   console.log('Configuration');
//   console.log(config);
//   return config;
// }
//
// var config = loadConfig();

// function authenticate(code, cb) {
//   var data = qs.stringify({
//     client_id: config.oauth_client_id,
//     client_secret: config.oauth_client_secret,
//     code: code
//   });
//
//   var reqOptions = {
//     host: config.oauth_host,
//     port: config.oauth_port,
//     path: config.oauth_path,
//     method: config.oauth_method,
//     headers: { 'content-length': data.length }
//   };
//
//   var body = "";
//   var req = https.request(reqOptions, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) { body += chunk; });
//     res.on('end', function() {
//       cb(null, qs.parse(body).access_token);
//     });
//   });
//
//   req.write(data);
//   req.end();
//   req.on('error', function(e) { cb(e.message); });
// }
//

// Convenience for allowing CORS on routes - GET only
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get("/pcs/api/v1/designers/:handoverkey", function(req, res){
  console.log('get designer api for handover key', req.params.handoverkey);
  var data = {"HandoverKey":"7f13608b-ac66-4da0-8ce6-29a15fb5d770","FI":{"Id":334,"Name":"HTML5"},"Subscriber":{"Id":1,"Name":"HTML5 Test 1"},"Product":{"Id":18,"Name":"istate"},"Orientation":{"Type":"h","ShowButton":false,"ProxyHandoverKey":""},"Language":"en-US","DesignerType":"Standard","Desktop":{"Top":0,"Left":0,"Bottom":153,"Right":241},"Printer":{"Resolution":300,"Size":{"Width":1050,"Height":672},"Bleed":{"Width":18.75,"Height":17.25},"Card":{"Width":1012.5,"Height":637.5},"Id":1,"Name":"Datacard Artista"},"UploadImage":{"Allowed":true,"MinSize":{"Image":{"Width":420,"Height":420},"Logo":{"Width":420,"Height":420}},"MaxSize":{"Size":10485760,"Width":10000,"Height":10000}},"Coverage":{"Image":{"Type":"Warning","LayerCategory":"Image","Top":-5,"Left":-5,"Bottom":158,"Right":246},"Text":null,"Logo":null},"TextOnImage":{"Enabled":true,"Fonts":{"URL":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Fonts"},"Top":14,"Left":28,"Bottom":98,"Right":169},"KeepAlive":{"Enabled":false,"URL":null,"Timing":0},"Galleries":{"Enabled":true,"Pagination":false,"URL":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/ImageCategories"},"DesignTemplate":{"X":1013,"Y":638,"Id":4426,"UrlSmall":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Templates/4426.png?size=Small","UrlMedium":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Templates/4426.png?size=Medium","UrlLarge":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Templates/4426.png"},"DataCapture":{"HasCompetition":false,"CustomDataCaptureEnabled":false,"Url":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/CustomDataFields","EmailCapture":"Disabled","HideEmailCapture":false,"AutoPublicImage":"Disabled"},"Handback":{"Url":"http://localhost:9999/PCS/Designer/Exit.aspx","Method":"get","HandbackEmailAddress":true,"HandbackWhiteList":[],"URLDecode":false},"Skin":{"Id":72,"Name":"Istate","ThumbnailFilename":"classic_white.jpg","SwfFilename":"IState","Default":false,"SkinType":"HTML5Plugin"},"Tracking":true};
  res.json(data);
});

app.get("/API/designers/:handoverkey/ImageCategories", function(req, res){
  console.log('get designer api for handover key', req.params.handoverkey);
  var data = [{"Id":814,"Name":"Default","Url":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/ImageCategories/814","Locked":false,"Size":9,"ImageType":""},{"Id":815,"Name":"Landscapes","Url":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/ImageCategories/815","Locked":true,"Size":10,"ImageType":""},{"Id":975,"Name":"Locked","Url":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/ImageCategories/975","Locked":true,"Size":3,"ImageType":""}];
  res.json(data);
});

app.get("/API/designers/:handoverkey/ImageCategories/:id", function(req, res){
  console.log('get designer api for handover key', req.params.handoverkey);
  var data = {"Id":814,"Name":"Default","Locked":false,"TextEnabled":true,"PriceCode":"","KnockoutCategory":false,"Images":[{"Name":"image 1","Id":5939,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5939.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5939.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5939.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5939.Jpg?size=Thumbnail"},{"Name":"Robot","Id":6837,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":true,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/6837.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/6837.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/6837.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/6837.Jpg?size=Thumbnail"},{"Name":"image 12","Id":5950,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5950.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5950.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5950.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5950.Jpg?size=Thumbnail"},{"Name":"image 13","Id":5951,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5951.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5951.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5951.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5951.Jpg?size=Thumbnail"},{"Name":"image 14","Id":5952,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5952.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5952.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5952.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5952.Jpg?size=Thumbnail"},{"Name":"image 15","Id":5953,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5953.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5953.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5953.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5953.Jpg?size=Thumbnail"},{"Name":"image 18","Id":5956,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5956.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5956.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5956.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5956.Jpg?size=Thumbnail"},{"Name":"image 17","Id":5955,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5955.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5955.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5955.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5955.Jpg?size=Thumbnail"},{"Name":"image 16","Id":5954,"LimitedEdition":false,"LimitedEditionCount":0,"Locked":false,"TextEnabled":true,"ImageSource":{"Name":"HTML5","Code":"HTML5","Id":212},"PriceCode":"","Tags":"","Metadata":"","Description":"","Format":1,"LargeImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5954.Jpg","ReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5954.Jpg?size=Review","LargeReviewImage":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5954.Jpg?size=LargeReview","ThumbNail":"http://localhost:9999/API/designers/7f13608b-ac66-4da0-8ce6-29a15fb5d770/Images/5954.Jpg?size=Thumbnail"}]};
  res.json(data);
});


app.get('/API/designers/:handoverkey/Templates/:image', function(req, res) {
  console.log('serve  image ', req.params.image);
  var img = fs.readFileSync('./img/' + req.params.image);
  res.writeHead(200, {'Content-Type': 'image/jpeg' });
  res.end(img, 'binary');
});
  app.get('/API/designers/:handoverkey/Images/:image', function(req, res) {
  console.log('serve  image ', req.params.image);
  var img = fs.readFileSync('./img/' + req.params.image);
  res.writeHead(200, {'Content-Type': 'image/jpeg' });
  res.end(img, 'binary');
});



app.post('/pcs/api/v1/designers/submit/:imgId', function(req, res){
  console.log('saving picture with id ', req.params.imgId);

  var fileName = req.params.imgId + '.png';


  var fileNameWithTemaplte = req.params.imgId + '-template.png';
  //var imageBuffer= decodeBase64Image(base64Data);

  var base64Data = req.body.img.replace(/^data:image\/png;base64,/, "");

  var base64DataTemplate = req.body.imgWithTemplate.replace(/^data:image\/png;base64,/, "");

  fs.writeFile(fileName, base64Data, 'base64', function(err) {
    if (err) {
      console.log(err);
    } else {
      fs.writeFile(fileNameWithTemaplte, base64DataTemplate, 'base64', function(err){
        console.log('file saved');
      });
    }
    res.json({result: 'ok'});
  });
});

function decodeBase64Image(dataString)  {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var response = {};

  if (matches.length !== 3)
  {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}


app.get('/starwarsTeam/', function(req, res) {
  console.log('get team' + req);
   res.json({result: team});
});


app.get('/starwarsTeam/:id', function(req, res) {
  console.log('member id:' + req.params.id);
  res.json(team.filter( function (item) {
    return item.id === parseInt(req.params.id);
  })) ;

});



app.get('/people/:id', function(req, res) {
  console.log('member id:' + req.params.id);
  res.json(team.filter( function (item) {
    return item.id === parseInt(req.params.id);
  })) ;

});

app.get('/planets/:id', function(req, res) {
  console.log('planet id:' + req.params.id);
  res.json(planet.filter( function (item) {
    return item.id === parseInt(req.params.id);
  })) ;

});


var port = process.env.PORT || 9999;

app.listen(port, null, function (err) {
  console.log('Gatekeeper, at your service: http://localhost:' + port);
});



