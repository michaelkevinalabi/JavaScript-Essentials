var car = {
    make: "volvo",
    speed: 160,
    engine: {
        size: 2.0,
        make: "bmw",
        fuel: "petrol",
        pistons: [ { maker: "BMW" }, { maker: "BMW2" } ]  
    },
    drive: function(){ return "drive"; }
};

var array = [
    "string",
    150,
    [ "embed", 200 ],
    { car: "ford" },
    function(){ return "drive"; }  
];

console.log( car.make );