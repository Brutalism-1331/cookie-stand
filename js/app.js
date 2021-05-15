'use strict';
const storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomInteger(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}









const seattleList = document.getElementById('seattle-list');
let seattle = {
  custMin: 23,
  custMax: 65,
  avgSales: 6.3,
  salesPerHour: [],
  dailySalesTotal: 0,
  salesListItems: seattleList,
  randomCustPerHour: function () {
    return getRandomInteger(this.custMax, this.custMin);
  },
  dailySales: function () {
    for (let i = 0; i < storeHoursArray.length; i++) {
      let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(`${storeHoursArray[i]}: ${randomSales}`);
      this.dailySalesTotal += randomSales
    }

      let li = document.createElement('li');
      li.textContent = ` ${this.salesPerHour[0]} - Cookie's Sold.`;
      seattleList.appendChild(li);
    }
  //   let liTotal = document.createElement('li');
  //   liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
  //   seattleList.appendChild(liTotal);
  // }
};
seattle.dailySales();

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
tokyo.dailySales();
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
dubai.dailySales();
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
paris.dailySales();
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
lima.dailySales();
