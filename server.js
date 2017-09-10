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
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });


// Convenience for allowing CORS on routes - GET only
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


var team  = [
  {
    id: 1,
    name: 'John Doe',
    sex: 'male',
    weight: 60,
    height: 177
  },
  {
    id: 2,
    name: 'John Doe1',
    sex: 'male',
    weight: 70,
    height: 187
  },
  {
    id: 3,
    name: 'John Doe2',
    sex: 'male',
    weight: 80,
    height: 197
  },
  {
    id: 4,
    name: 'Joe Doe',
    sex: 'female',
    weight: 80,
    height: 167
  },
  {
    id: 5,
    name: 'Joe Doe1',
    sex: 'female',
    weight: 90,
    height: 157
  },
  {
    id: 6,
    name: 'Ivana Alot1',
    sex: 'female',
    weight: 50,
    height: 57
  },
  {
    id: 7,
    name: 'Ivana Alot7',
    sex: 'female',
    weight: 50,
    height: 57
  },
  {
    id: 8,
    name: 'Ivana Alot8',
    sex: 'female',
    weight: 50,
    height: 57
  },
  {
    id: 9,
    name: 'Ivana Alot9',
    sex: 'female',
    weight: 50,
    height: 57
  },
  {
    id: 10,
    name: 'Ivana Alot10',
    sex: 'female',
    weight: 50,
    height: 57
  }

];


const planet =[
  {id: 1, name: 'Mercury'},
  {id: 2, name: 'Venus'},
  {id: 3, name: 'Earth'},
  {id: 4, name: 'Mars'},
  {id: 5, name: 'Jupiter'},
  {id: 6, name: 'Saturn'},
  {id: 7, name: 'Neptun'},
  {id: 8, name: 'Pluton'},
  {id: 9, name: 'Rambler'},
  {id: 10, name: 'Yandex'}

];


app.get("/pcs/api/v1/designers/:handoverkey", function(req, res){
  console.log('get designer api for handover key', req.params.handoverkey);
  var data = {"HandoverKey":"1b283d18-c2bf-4ba4-990a-63d5959f2750","FI":{"Id":267,"Name":"FalabellaChile"},"Subscriber":{"Id":1,"Name":"FalabellaChile"},"Product":{"Id":1,"Name":"PublicSite"},"Orientation":{"Type":"h","ShowButton":false,"ProxyHandoverKey":""},"Language":"es-ES","DesignerType":"Standard","Desktop":{"Top":0,"Left":0,"Bottom":153,"Right":241},"Printer":{"Resolution":300,"Size":{"Width":1013,"Height":638},"Bleed":{"Width":0.25,"Height":0.25},"Card":{"Width":1012.5,"Height":637.5},"Id":11,"Name":"MagTek EC1000"},"UploadImage":{"Allowed":true,"MinSize":{"Image":{"Width":405,"Height":405},"Logo":{"Width":405,"Height":405}},"MaxSize":{"Size":10485760,"Width":10000,"Height":10000}},"Coverage":{"Image":{"Type":"Error","LayerCategory":"Image","Top":0,"Left":0,"Bottom":153,"Right":241},"Text":null,"Logo":null},"TextOnImage":{"Enabled":false,"Fonts":null,"Top":null,"Left":null,"Bottom":null,"Right":null},"KeepAlive":{"Enabled":false,"URL":null,"Timing":0},"Galleries":{"Enabled":true,"Pagination":false,"URL":"http://localhost:9999/PCS/API/v1/designers/1b283d18-c2bf-4ba4-990a-63d5959f2750/ImageCategories"},"DesignTemplate":{"X":1013,"Y":638,"Id":11870,"UrlSmall":"http://localhost:9999/PCS/API/v1/designers/1b283d18-c2bf-4ba4-990a-63d5959f2750/Templates/11870.png?size=Small","UrlMedium":"http://localhost:9999/PCS/API/v1/designers/1b283d18-c2bf-4ba4-990a-63d5959f2750/Templates/11870.png?size=Medium","UrlLarge":"http://localhost:9999/PCS/API/v1/designers/1b283d18-c2bf-4ba4-990a-63d5959f2750/Templates/11870.png"},"DataCapture":{"HasCompetition":false,"CustomDataCaptureEnabled":false,"Url":"http://localhost:9999/PCS/API/v1/designers/1b283d18-c2bf-4ba4-990a-63d5959f2750/CustomDataFields","EmailCapture":"Disabled","HideEmailCapture":false,"AutoPublicImage":"Disabled"},"Handback":{"Url":"https://desa4.bancofalabella.cl/tarjeta-personalizar/start","Method":"post","HandbackEmailAddress":true,"HandbackWhiteList":[],"URLDecode":false},"Skin":{"Id":81,"Name":"Falabella","ThumbnailFilename":"classic_white.jpg","SwfFilename":"Falabella","Default":false,"SkinType":"HTML5Plugin"},"Tracking":false};
  res.json(data);
});

app.get("/pcs/api/v1/designers/:handoverkey/Templates/:imgId", function(req, res){
  console.log('serve template image ', req.params.imgId);
  var img = fs.readFileSync('./img/11870.png');
  res.writeHead(200, {'Content-Type': 'image/png' });
  res.end(img, 'binary');
});


app.post('/pcs/api/v1/designers/submit/:imgId', function(req, res){
  console.log('saving pictur with id ', req.params.imgId);

  var fileName = req.params.imgId + '.png';

  //var imageBuffer= decodeBase64Image(base64Data);

  var base64Data = req.body.img.replace(/^data:image\/png;base64,/, "");

  fs.writeFile(fileName, base64Data, 'base64', function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('file saved');
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



