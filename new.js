var casper = require('casper').create();

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
    this.wait(7000, function() {
    this.capture('login.png'); 
    this.clickLabel('View Advertisements','span');
    this.wait(9000, function() {
    this.capture('Advertisements.png'); 
    });
    });
});


casper.then(function() {
    this.click('table#l0l1');
});

casper.then(function() {
    this.wait(70000, function() {
    this.capture('Advertisements1.png'); 
    var ad_url=this.getElementAttribute('a#l1','href');
    this.echo(ad_url);
    console.log('clicked ok, new location is ' + this.getCurrentUrl());
    });
    
});



casper.run();
