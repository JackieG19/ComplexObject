var rent = {
            cars: [
                {
                    name: "Economy", // car type 1
                    price: "$75 per day",
                    available: 40
                },
                {
                    name: "Standard",   // car type 2
                    price: "$90 per day",
                    available: 30
                },
                {
                    name: "Full Size SUV",   // car type 3
                    price: "$150 per day",
                    available: 20
                },
                
                {
                    name: "Luxery Sport Car",   // car type 4
                    price: "$350 per day",
                    available: 10
                }
            ],
            
        name: "Rentopia"
};
 

function myFunction(car) {
    document.getElementById("price").innerHTML = rent.cars[car].price;
    document.getElementById("available").innerHTML = rent.cars[car].available;
}

for (var i = 0; i < rent.cars.length; i++){
    var option = document.createElement("OPTION");
    var carTp = document.createElement("LABEL");
    document.getElementById("dropdown").appendChild(option);
    //option.setAttribute("type", "option");
    option.setAttribute("name", "cars"); 
    option.setAttribute("value", i); 
    option.setAttribute("id", "car" + i); 
    option.setAttribute("onclick", "myFunction(" + i + ")"); 
    carTp.innerHTML = rent.cars[i].name; 
    option.innerHTML = rent.cars[i].name; 
    
    document.getElementById("dropdown").appendChild(option);
    //document.getElementById("carSelect").appendChild(carTp);
}

document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault();
    if (!document.getElementById("confirmation").checked) { 
        alert("Please agree to conditions and terms.");
        return;
    } //if(!doc)
}; //document

