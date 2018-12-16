var express = require('express');
var axios = require('axios');
var cors = require('cors');
var qs = require('querystring');
var crypto = require('./crypto');

var app = express();
app.use(cors());
var apiRoutes = express.Router();

var http = axios.create({
  baseURL: 'https://music.163.com/weapi/',
  headers: {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Referer': 'https://music.163.com/m/',
    'host': 'music.163.com',
    'Origin': 'https://music.163.com',
    'Cookie': 'Province=0571; City=0571; UM_distinctid=166d42bdc7daff-0e2b4ee05ee9a5-50432518-1fa400-166d42bdc7e13f; vjuids=-3008758cb.166d42bde1b.0.b9f46d8d54112; vjlast=1541157937.1541157937.30; _ntes_nnid=c02681846c84c30908c44e943c4a77ee,1541157936678; _ntes_nuid=c02681846c84c30908c44e943c4a77ee; __gads=ID=f2df2bdd5b2faa5b:T=1541157936:S=ALNI_MZTZoDH8cO7lza-IX5-rGt9JRmOpQ; vinfo_n_f_l_n3=cb08b6190f98d6f8.1.0.1541157936690.0.1541157944224; NTES_PASSPORT=7wyYH9cp4U13BTTtj6_yEWyvY2OXN0pQ_QQnbHAOW4LkSKFLWBCEj_LJzX0HbmuEISAnDFjhpn4LtwX6jqmB4uJJHwcvex_a3Drsz4.2yOETTzH18NL.egIUXahIF6pv0J4ft2ezluI5hZJoXCzIP7Lq_ZRfr2pHx.UIZadlYE9hujgEwFOrLjWFN; P_INFO=haohaoxuexi330884@163.com|1541506540|1|cc|00&14|zhj&1540707718&xyq#zhj&330100#10#0#0|&0|163|haohaoxuexi330884@163.com; __f_=1541678517830; _iuqxldmzr_=32; WM_TID=YiEQNiySLkBEFBUQVFMpO0EGBEb9b5zZ; __utmz=94650624.1541928599.3.2.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; JSESSIONID-WYYY=%2Fs9y1bcy6I6JvI2GZ2E%2BAzdEOh1F2HDRyntCDaZe9bhqI4zYeGOkb3xW8ptnHKRwOgD%5CFsDy4Gecyxru41se3c8QgqftHQo162tAVpVepE2pZObG6jgKFN%5CpVIqqupGBKIV3idp2Zm4mqfaumtsDx9Knrc%2F8TUBVZWd1AAyOKYXkHXOO%3A1542000392061; __utma=94650624.772358148.1541910161.1541931250.1541998592.5; __utmc=94650624; WM_NI=wXRbVojYpGF757nt7Da0mspGVQak1FAaP%2FnrSWmuNNoAVah5K0eD43bQl%2B9qt%2BG6%2FLpSQKpcp5iqK%2B%2FNiV0NfwD0NYBMEX3%2BSWUZ3tkQbe3nctcN6xMYg13Z1vZ48lCidHk%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee89e67fa79283baee3a8cb88eb2d84b878a8eaeee48ac8ec0aedb7cb09c8d89c12af0fea7c3b92ab5889e83d565aa87c0a8c53df7e9a295b650a3f0a394f34d968faf8cb44e83bfa0d0ed7a9189a396cd46ad9f9a82eb3f89f0aba5b739a28fa4ccbc7bb8f589d7ae48b48d9facf369b4eba792ca21ed92a7b7b346a6a98cd1cd5382938bb9b22191899bbbb280a98fae86b266a1acadafb5748f87a9d2b252f3aa96d5bb6881b7aca9ea37e2a3; __utmb=94650624.2.10.1541998592'
  }
});

// 推荐歌单
apiRoutes.get('/v1', function(req, res) {
  const params = {
    params: '5u7jLzq0clpj4iqaFRCL7Dw9Lz94KwyuzXiKpRjRikI=',
    encSecKey: '83685aac276cecd274b21b1fd99d6bc369945cb2db80e3eee611876a4f308e87a1f11eb34d6b7d03b2c640f4a9baf30667a1de254cac011bd54e53c4347b4fbb2d86cd2600803b03fbd3ea1ced4ce1aa042994b221a90384af61340edd15a8f02174fecdad80062abe40581cc09d8176e02d243a06d4a2a2592bbe827c315e3b',
  };
  http.post('personalized/playlist/v1', qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
})

apiRoutes.get('/newsong', function(req, res) {
  const params = {
    params: 'rRzoTyT4PAWG+ZPWME72x/694n9MMzfVpT1TLnmzBM0=',
    encSecKey: 'b905d90e1d8d85b1124e98d70310c288ff5f6218492170f030982cb336828843ac0fdee34514cf1e68ccd7dc12ce813e86e73503569cad79297b66b9db0cc1b686e57bc5e766d6abb356049dde6157cc7deb4d7d678a05cf601f04772c5d8cab13e2051708ef65929a6cc25a16984831dcd56371d258cdc62c51f8e948066aef',
  };
  http.post('personalized/newsong', qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
});


apiRoutes.get('/hotsongs', function(req, res) {
  const params = {
    params: 'i5+trn+8EKLzTmI8rHrlG7uq0Jk0TYkdrHE2nZ4gn/a9nqIie6iW8YhypI0Qi09t',
    encSecKey: 'cfbb3c121690d39f001c613b487490ef4968b0158f67a4fcfca32a22f9f20c58c8b8b3ef7817148b04460a0a1507010094f76c96b28f47af9ea636b71296272d4a1b8ce050a674390f9c615e3e942d85b7d400bd2ebff75dfa35951175b87f8ea26bd6551d22452f400d9713f65295e48fa4561293f1f7342b884e5f601883c8',
  };
  http.post('v3/playlist/detail', qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
});

apiRoutes.get('/hots', function(req, res) {
  const params = {
    params: '42Gh4x5kxQftKBGxCuSwWVNs5cbsfGQbrN6sIiMevWo=',
    encSecKey: 'b5644a6159c26e28c8e1b5cfc1357cf7b4c5b248ef497a72e8acfdbfb2c0d0c9ef1a2dc52c6fef0d825447d604aa5de3ff422cbaa883ae33977090110ba2f001f2b2ed0b6764d757043fa51035718d014314b09d170a5be596e1bc5c3d921b58fda0258207b6c60e5427b503c97c609c0097e6c482bc013849f0773d0e2bdb2c',
  };
  http.post('search/hot', qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
});

apiRoutes.get('/playlist', function(req, res) {
  const data = {
    id: req.query.id
  };
  const params = crypto(data);
  http.post('v3/playlist/detail', qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
})

apiRoutes.get('/playlist/comments/', function(req, res) {
  const data = {
    rid: req.query.rid
  };
  const params = crypto(data);
  http.post(`v1/resource/comments/A_PL_0_${req.query.rid}`, qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
})

apiRoutes.get('/keyword', function(req, res) {
  const data = {
    s: req.query.text || ''
  };
  const params = crypto(data);
  http.post(`search/suggest/keyword`, qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
});

apiRoutes.get('/multimatch', function(req, res) {
  const data = {
    type: req.query.type || 1,
    s: req.query.text || ''
  };
  const params = crypto(data);
  http.post(`search/suggest/multimatch`, qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
});

apiRoutes.get('/matchsongs', function(req, res) {
  const data = {
    s: req.query.text,
    type: req.query.type || 1, // 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
    limit: req.query.limit || 20,
    offset: req.query.offset || 0
  };
  const params = crypto(data);
  http.post(`search/get`, qs.stringify(params))
    .then(response => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
    })
});

app.use('/api', apiRoutes);

app.listen(3001, () => console.log('Example app listening on port 3001!'));
