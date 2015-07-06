var casper = require("casper").create({
    viewportSize: {
        width: 1024,
        height: 768
    }
});
 
casper.start('http://www.google.de/maps', function() {	
	this.wait(2000);
	this.capture('before.png');	
	this.mouse.down(400, 550);
   	this.mouse.move(850, 650);
}).then(function() {
    this.mouse.up(910, 700);
}).then(function() {
	this.capture('after.png');
	});
 
casper.run();
