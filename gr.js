var casper = require('casper').create({pageSettings: {
        loadImages:  true,        // The WebPage instance used by Casper will
        loadPlugins: true         // use these settings
    }});
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X)');
var firstUrl;
casper.start('http://local.grportal.com/', function() {
    this.echo(this.getTitle());
    this.capture('gr.png');
    /*this.fill('form', {
        'username':    'gr_00023',
        'password':    'Bgt56yhN@',
    }, true);
    
    
   this.clickLabel('Sign In', 'button');
    this.wait(6000, function(){this.capture('gr1.png');});*/
    
});

casper.then(function() {
    this.mouse.move( 'li[username="gr_0031"]' );
    this.click('li[username="gr_0031"]' );
     this.mouse.up( 'li[username="gr_0031"]' );
     this.mouse.down( 'li[username="gr_0031"]' );
    //this.mouseEvent('mousedrag', 'li[username="gr_0031"]');
    this.wait(6000, function(){this.capture('gr2.png');});
});

casper.run();
