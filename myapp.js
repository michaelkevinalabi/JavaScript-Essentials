function Apple( color, weight )
{
    this.color = color;
    this.weight = weight;
}

Apple.prototype = {
    eat : function(){ return this; },
    throw : function(){ return "throw the apple"; }
};

var apple1 = new Apple( "blue", 58 );
var apple2 = new Apple( "black", 189 );
var Apple3 = new Apple("white", 380 );