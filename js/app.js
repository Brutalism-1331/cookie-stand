'use strict';
const seattleList = document.getElementById('seattle-list');
let seattle = {
  // locationName: 'Seattle',
  custMin: 23,
  custMax: 65,
  avgSales: 6.3,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySalesTotal: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  dailySales: function () {
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(`${this.storeHoursArray[i]}: ${randomSales}`);
      this.dailySalesTotal += randomSales;
      let li = document.createElement('li');
      li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
      seattleList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
    seattleList.appendChild(liTotal);
    return
  }
};
seattle.dailySales();
const tokyoList = document.getElementById('tokyo-list');
let tokyo = {
  locationName: 'Tokyo',
  custMin: 3,
  custMax: 24,
  avgSales: 1.2,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySalesTotal: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  dailySales: function () {
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(`${this.storeHoursArray[i]}: ${randomSales}`);
      this.dailySalesTotal += randomSales;
      let li = document.createElement('li');
      li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
      tokyoList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
    tokyoList.appendChild(liTotal);
    return
  }
};
tokyo.dailySales();
const dubaiList = document.getElementById('dubai-list');
let dubai = {
  locationName: 'Dubai',
  custMin: 11,
  custMax: 38,
  avgSales: 3.7,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySalesTotal: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  dailySales: function () {
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(`${this.storeHoursArray[i]}: ${randomSales}`);
      this.dailySalesTotal += randomSales;
      let li = document.createElement('li');
      li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
      dubaiList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
    dubaiList.appendChild(liTotal);
    return
  }
};
dubai.dailySales();
const parisList = document.getElementById('paris-list');
let paris = {
  locationName: 'Paris',
  custMin: 20,
  custMax: 38,
  avgSales: 2.3,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySalesTotal: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  dailySales: function () {
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(`${this.storeHoursArray[i]}: ${randomSales}`);
      this.dailySalesTotal += randomSales;
      let li = document.createElement('li');
      li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
      parisList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
    parisList.appendChild(liTotal);
    return
  }
};
paris.dailySales();
const limaList = document.getElementById('lima-list');
let lima = {
  locationName: 'Lima',
  custMin: 23,
  custMax: 65,
  avgSales: 4.6,
  storeHoursArray: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  salesPerHour: [],
  dailySalesTotal: 0,
  randomCustPerHour: function () {
    return Math.floor(Math.random() * (this.custMax - this.custMin + 1) + this.custMin);
  },
  dailySales: function () {
    for (let i = 0; i < this.storeHoursArray.length; i++) {
      let randomSales = Math.ceil(this.randomCustPerHour() * this.avgSales);
      this.salesPerHour.push(`${this.storeHoursArray[i]}: ${randomSales}`);
      this.dailySalesTotal += randomSales;
      let li = document.createElement('li');
      li.textContent = `(${this.salesPerHour[i]}) - Cookie's Sold.`;
      limaList.appendChild(li);
    }
    let liTotal = document.createElement('li');
    liTotal.textContent = `Daily Total: (${this.dailySalesTotal}) - Cookie's Sold.`;
    limaList.appendChild(liTotal);
    return
  }
};
lima.dailySales();
