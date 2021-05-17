'use strict';

const storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const salesDataTable = document.querySelector('table')
let storeLocationArray = [];

function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// console.log(randomInt(65, 23));

function GetLocationSalesData(locationName, custMin, custMax, averageSales) {
  this.locationName = locationName;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avgSales = averageSales;

  this.customersPerHour = [];
  this.salesPerHour = [];
  this.dailySalesTotal = 0;
  storeLocationArray.push(this);
};

// This function should use the randomInt() function and generate a randomized customer per hour for every hour that the store is open and return the value of each hour to the customersPerHour[],
 
GetLocationSalesData.prototype.projectedCustomerPerHour = function () {
  for (let i = 0; i < storeHoursArray.length; i++){
    console.log('im in my for loop')
  // randomInt(this.custMax, this.custMin);
  this.customersPerHour.push(randomInt(this.custMax, this.custMin));
  }
};


// This function should take the customersPerHour [] and then * each hour by the average sales of the shop location and then push those totals into salesPerHour[],
// Each hour total needs to be added to each other and than added to dailySalesTotal.

GetLocationSalesData.prototype.projectedCustomerSalesPerHour = function (){
for (let i = 0; i < this.customersPerHour.length; i++){
  this.salesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgSales))
}
};

//This function should take the salesPerHour[] and create a row of the table shown on the sales html page.
//The table must have a daylily sales total and an all shops daylily total.

GetLocationSalesData.prototype.createProjectedSalesTable = function (){

};

// This is the first new shop location but will call the rest once the above code is working with one location.

let seattle = new GetLocationSalesData('Seattle', 23, 65, 6.3);

seattle.projectedCustomerPerHour();
seattle.projectedCustomerSalesPerHour();
console.log(seattle);



// randomCustPerHour: function () {
//   //     return getRandomInteger(this.custMax, this.custMin);
//   //   },







// GetLocationSalesData.prototype.randomCustPerHour = function (){
//   return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
// };

// GetLocationSalesData.prototype.totalSoldPerHour = function () {
//   for (let i = 0; i < storeHoursArray.length; i++){
//     this.salesPerHour.push(Math.floor(this.avgSales * this.randomCustPerHour()));
//   }
//   return this.salesPerHour;
// };



  // GetLocationSalesData.prototype.randomCustPerHour = function () {
    //   for (let i = 0; i < storeHoursArray.length; i++) {
      //    randomInt(this.custMin, this.custMax);
      //     this.custPerHour.push;
      //   }
      // };


      // GetLocationSalesData.prototype.getRandomInteger = function (min, max){
        // };
        // getRandomInteger(1,5);

  //       GetLocationSalesData.prototype.dailySales = function () {
  //         for (let i = 0; i < storeHoursArray.length; i++) {
  //           console.log('this is random sales')
  //           let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
  //           this.salesPerHour.push(`${storeHoursArray[i]}: ${randomSales}`);
  //           this.dailySalesTotal += randomSales;
  //         };
  //       }

  //       console.log('random cust', seattle.randomCustPerHour);
  //       console.log(seattle.custPerHour);


  // console.log(storeLocationArray)


















// const seattleList = document.getElementById('seattle-list');
// let seattle = {
//   custMin: 23,
//   custMax: 65,
//   avgSales: 6.3,
//   salesPerHour: [],
//   dailySalesTotal: 0,
//   salesListItems: seattleList,
//   randomCustPerHour: function () {
//     return getRandomInteger(this.custMax, this.custMin);
//   },
//   dailySales: function () {
//     for (let i = 0; i < storeHoursArray.length; i++) {
//       let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
//       this.salesPerHour.push(`${storeHoursArray[i]}: ${randomSales}`);
//       this.dailySalesTotal += randomSales;
//       let li = document.createElement('li');
//       li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
//       seattleList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
//     seattleList.appendChild(liTotal);
//   }
// };
// seattle.dailySales();
// const tokyoList = document.getElementById('tokyo-list');
// let tokyo = {
//   locationName: 'Tokyo',
//   custMin: 3,
//   custMax: 24,
//   avgSales: 1.2,
//   salesPerHour: [],
//   dailySalesTotal: 0,
//   salesListItems: tokyoList,
//   randomCustPerHour: function () {
//     return getRandomInteger(this.custMax, this.custMin);
//   },
//   dailySales: function () {
//     for (let i = 0; i < storeHoursArray.length; i++) {
//       let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
//       this.salesPerHour.push(`${storeHoursArray[i]}: ${randomSales}`);
//       this.dailySalesTotal += randomSales;
//       let li = document.createElement('li');
//       li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
//       tokyoList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
//     tokyoList.appendChild(liTotal);
//   }
// };
// tokyo.dailySales();
// const dubaiList = document.getElementById('dubai-list');
// let dubai = {
//   locationName: 'Dubai',
//   custMin: 11,
//   custMax: 38,
//   avgSales: 3.7,
//   salesPerHour: [],
//   dailySalesTotal: 0,
//   salesListItems: dubaiList,
//   randomCustPerHour: function () {
//     return getRandomInteger(this.custMax, this.custMin);
//   },
//   dailySales: function () {
//     for (let i = 0; i < storeHoursArray.length; i++) {
//       let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
//       this.salesPerHour.push(`${storeHoursArray[i]}: ${randomSales}`);
//       this.dailySalesTotal += randomSales;
//       let li = document.createElement('li');
//       li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
//       dubaiList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
//     dubaiList.appendChild(liTotal);
//   }
// };
// dubai.dailySales();
// const parisList = document.getElementById('paris-list');
// let paris = {
//   locationName: 'Paris',
//   custMin: 20,
//   custMax: 38,
//   avgSales: 2.3,
//   salesPerHour: [],
//   dailySalesTotal: 0,
//   salesListItems: parisList,
//   randomCustPerHour: function () {
//     return getRandomInteger(this.custMax, this.custMin);
//   },
//   dailySales: function () {
//     for (let i = 0; i < storeHoursArray.length; i++) {
//       let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
//       this.salesPerHour.push(`${storeHoursArray[i]}: ${randomSales}`);
//       this.dailySalesTotal += randomSales;
//       let li = document.createElement('li');
//       li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
//       parisList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
//     parisList.appendChild(liTotal);
//   }
// };
// paris.dailySales();
// const limaList = document.getElementById('lima-list');
// let lima = {
//   locationName: 'Lima',
//   custMin: 23,
//   custMax: 65,
//   avgSales: 4.6,
//   salesPerHour: [],
//   dailySalesTotal: 0,
//   salesListItems: limaList,
//   randomCustPerHour: function () {
//     return getRandomInteger(this.custMax, this.custMin);
//   },
//   dailySales: function () {
//     for (let i = 0; i < storeHoursArray.length; i++) {
//       let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
//       this.salesPerHour.push(`${storeHoursArray[i]}: ${randomSales}`);
//       this.dailySalesTotal += randomSales;
//       let li = document.createElement('li');
//       li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
//       limaList.appendChild(li);
//     }
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
//     limaList.appendChild(liTotal);
//   }
// };
// lima.dailySales();


