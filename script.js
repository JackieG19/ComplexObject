var rent = {
            cars: [
                {//objects
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
 



for (var i = 0; i < rent.cars.length; i++){
    var option = document.createElement("OPTION");
    var carTp = document.createElement("LABEL");
    option.setAttribute("type", "option");
    option.setAttribute("name", "cars"); 
    option.setAttribute("value", i); 
    option.setAttribute("id", "car" + i);
    carTp.innerHTML = rent.cars[i].name; 
    option.innerHTML = rent.cars[i].name;
    document.getElementById("dropdown").appendChild(option);
    document.getElementById("dropdown").appendChild(carTp);
}

function myFunction() {
        var typeIndex = document.getElementById("dropdown").value;
        document.getElementById("price").innerHTML = rent.cars[typeIndex].price;
        document.getElementById("available").innerHTML = rent.cars[typeIndex].available;
}

document.getElementById("reservationForm").onsubmit = function(event) {
    event.preventDefault();
    if (!document.getElementById("confirmation").checked) { 
        alert("Please agree to conditions and terms.");
        return;
        }  else {
            document.getElementById("confirmation").checked;
            alert("Thank you, Enjoy your travels!");
        return;
    }
}; 
