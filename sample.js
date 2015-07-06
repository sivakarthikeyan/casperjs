var casper = require('casper').create({pageSettings: {
        loadImages:  true,        // The WebPage instance used by Casper will
        loadPlugins: true         // use these settings
    }});
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
var firstUrl;
casper.start('http://www.neobux.com/', function() {
    this.echo(this.getTitle());
    
});

casper.then(function() {
    // Click on 1st result link
    this.clickLabel('Login', 'span');
});

casper.then(function() {
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
    this.capture('google.png');
    this.echo(this.getTitle());
    this.sendKeys('form#loginform input#Kf1', "sivamahe");
    this.sendKeys('form#loginform input#Kf2', "suryacse");
    this.clickLabel('send','span');
    this.wait(11000, function() {
    this.capture('login.png'); 
    this.clickLabel('View Advertisements','span');
    this.wait(9000, function() {
    this.capture('Advertisements.png');
    this.click('#i21'); 
    });
    });
});

casper.then(function() {
    this.click('#i21');
    var ad_url=this.getElementAttribute('a#l21','href');
    this.echo(ad_url);
    this.capture('Advertisements2.png'); 
});

/*casper.then(function() {
    this.mouseEvent('click','table#l0l1');
});

casper.then(function() {
    this.wait(70000, function() {
    this.capture('Advertisements1.png'); 
    var ad_url=this.getElementAttribute('a#l1','href');
    this.echo(ad_url);
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
    });
    
});*/


casper.run();
