var express = require('express');
var request = require("request");
var	cheerio = require("cheerio");
var path = require('path');
var port = process.env.PORT || 5000;

express()
  .use('/public', express.static(__dirname + '/public'))

  /* e.g. 
	  /api/books?isbn=9780718181239
	   &title=everyday-super-food
	   &author=jamie-oliver
	   &seller=booktopia
  */

  .get('/api/books', function(req, res) {

  	var isbn = req.param('isbn');
  	var title = req.param('title');
  	var author = req.param('author');  
  	var seller = req.param('seller');
  	var url = '';

  	/* seller check */
	if(seller === "booktopia"){
  		url = 'http://www.booktopia.com.au/' + title + '-' + author + '/prod' + isbn + '.html';
	} else {
  		url = 'http://www.angusrobertson.com.au/books/' + title + '-' + author + '/p/' + isbn;
	}
	
	request(url, function (error, response, body) {
		if (!error) {
			var $ = cheerio.load(body);

		  	/* seller check */
			if(seller === "booktopia"){
				price = $('.sale-price').first().html();
			} else {
				price = $("span[itemprop='price']").html();
			}

		} else {
			console.log("We’ve encountered an error: " + error);
		}

		res.json(
      		{ 
      		  book: 
      			{ 
      				isbn: isbn, 
      				price: price,
      				author: author,
      				seller: seller,
      				title: title
      			} 
      		}
          )
	});
    
  })

  .get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  })


  .listen(port, function() {
    console.log("Listening on " + port + ".");
    console.log("Go to <http://localhost:" + port + "> in your browser.");
  });