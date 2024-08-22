class Vehicle {
    constructor(weight, company) {
        this.weight = weight;
        this.company = company;
    }

    displayInfo() {
        console.log(`Vehicle details, weight: ${this.weight} company: ${this.company}`);
    }

};

class Car extends Vehicle {
    constructor(weight, company, producingYear) {
        super(weight, company);
        this.producingYear = producingYear;
    }

    displayInfo() {
        console.log(`Car details, weight: ${this.weight} company: ${this.company} producing year: ${this.producingYear}`);
    }

};

let car1 = new Car(1000, 'nissan', 1994);

class Truck extends Vehicle {
    constructor(weight, company, color) {
        super(weight, company);
        this.color = color;
    };
    displayInfo() {
        console.log(`Truck details, weight: ${this.weight} company: ${this.company} color: ${this.color}`);
    }
};

/* 
Dealership Class: Manages a collection of vehicles (vehicles array) and provides methods to add vehicles, list their details (listInventory()  displayed all information about Vehicle), and count inventory (getInventoryCount()  Count of all Vehicle).
add to Dealership 1 Vehicle  weight: 1000 and company: Toyota    |  2 Car  weight:  800 and  900 company:  Honda and Ford year: 1993 and 1994 | 2 truck weight:  2300 and  2500 company:  Jeep and Ford color: Red and Blue
*/

class Dealership {
    constructor(name) {
        this.name = name;
        this.vehicles = [];
    }

    addToListInventory(vehicles) {
        this.vehicles.push(vehicles);
    };
    displayAllVehicles() {
        //this.vehicles.forEach(vehicle => console.log(vehicle.displayInfo()));
        for(let i of this.vehicles) {
            i.displayInfo();
        }
    };

    displayBigCars(weights) {
        this.vehicles.filter(vehicle => vehicle.weight > weights).forEach(vehicle => console.log(vehicle.displayInfo()));
    };

    sumOfCarsList() {
        const initialValue = 0;
        const sum = this.vehicles.reduce((a, c) => a + c.weight, initialValue);
        return sum;

    }
    doubleWeight() {
        let double = this.vehicles.map(vehicle => vehicle.weight*2);
        console.log(double);     
    }

};

let dealership = new Dealership('name');

dealership.addToListInventory(new Vehicle(1000, "Toyota"));
dealership.addToListInventory(new Car(800, "Honda", 1993));
dealership.addToListInventory(new Car(900, "Toyota", 1994));
dealership.addToListInventory(new Truck(2300, "Jeep", "Red"));
dealership.addToListInventory(new Truck(2500, "Ford", "Blue"));
//dealership.displayAllVehicles();
dealership.displayBigCars(2000);
console.log(dealership.sumOfCarsList());
dealership.doubleWeight();

//receive sum of all list cars

const str = '1 2 3 1 2 3 1 2 3';
const array = str.split(' ');
const uniqueSet = new Set(array);
const uniqueStr = Array.from(uniqueSet).join(' '); console.log(uniqueStr); // Output: '1 2 3'

const words = ["apple", "banana", "strawberry", "kiwi"]; //show the longest string

const expected = {
    "Electronics": [
      { id: 1, name: "Laptop", category: "Electronics", quantity: 50, price: 999 },
      { id: 2, name: "Phone", category: "Electronics", quantity: 100, price: 799 },
      { id: 5, name: "TV", category: "Electronics", quantity: 30, price: 1200 }
    ],
    "Clothing": [
      { id: 3, name: "Shirt", category: "Clothing", quantity: 200, price: 25 },
      { id: 4, name: "Jeans", category: "Clothing", quantity: 150, price: 50 }
    ]
  };
  //You have products. I want that you separate products by category and show me mostExpensive */
  
    //create a new array with the categorie selected
  const filterByCategorie = (arr) => {
    let newList = {
      "Electronics": [],
      "Clothing": []
    };
    try {
      arr.forEach(elem => {
        if(elem.category === "Electronics") {
          newList["Electronics"].push(elem);
        } else if(elem.category === "Clothing") {
          newList["Clothing"].push(elem);
        }
      });
      return newList;
    } catch (err) {
      console.log(err.message);
    }
  };
  
  const mostExpensive = () => {
    
  }
  
  filterByCategorie(products);