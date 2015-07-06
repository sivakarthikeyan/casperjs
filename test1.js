var casper = require('casper').create();
var login_url;
casper.start("http://www.neobux.com/", function() {
    this.echo(this.getTitle());   
});

casper.then(function() {
    // Click on 1st result link
    //this.clickLabel('Register', 'span');
    var info = this.getElementsInfo('table a:nth-child(4)'); // an array of object literals
    login_url = info[0].attributes.href;
    this.echo('"'+login_url+'"');
    /*for (var i = 0; i < info.length; i++) {
        this.echo('"'+info[i].attributes.href+'"');
    }*/


});

casper.thenOpen(''+login_url+'', function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
    this.echo("I'm in. Bazinga.");
    this.echo('"'+login_url+'"');
    this.capture('google1.png');
});

/*casper.then(function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
    this.capture('google.png');
});*/

casper.run();
