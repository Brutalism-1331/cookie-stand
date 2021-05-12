'use strict';

const myContainer = document.getElementById('container');
const seattleList = document.getElementById('seattle-list');

let seattle = {
  locationName: 'Seattle',
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
      let randomSales = this.randomCustPerHour();
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

// console.log(seattle.randomCustPerHour());
seattle.dailySales();
// console.log(seattle.salesPerHour);
// console.log(seattle.dailySalesTotal);


























// console.log('Hello World');

// let hours = ['6am', '7am', '8am'];

// let seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   dailyTotal: 0,
//   avgCookiesSoldEachHourArray: [],
//   avg: 6.3,
//   getRandomNumberCustomers: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
//   // enter your sudo code:
//   // come up with a plan of how to do this!
// };

// console.log(seattle.getRandomNumberCustomers());

// // DOM - Document Object Model
// // get the element from the DOM  that has an ID of container - this will be my foothold
// const myContainer = document.getElementById('container');
// const seattleList = document.getElementById('seattle-list');

// // ANY TIME I am interacting with the DOM or just writing JS.  I want:
// // PROOF OF LIFE
// console.log(myContainer);

// // 1. create element
// let section = document.createElement('section');
// // 2. give it content // this will happen later - stay tuned
// // 3. append to the DOM
// myContainer.appendChild(section);
// // remember PROOF OF LIFE - important

// // create element
// let img = document.createElement('img');
// // given content
// img.src = 'img/bee-brood.jpg';
// img.alt = 'closeup picture of brood';
// // append it to the dom
// section.appendChild(img);
// //  remember - PROOF OF LIFE

// //create element
// let article = document.createElement('article');
// // give content -- this is other elements, will do later
// // append to teh DOM
// section.appendChild(article);
// //remember - POL

// // create element
// let h3 = document.createElement('h3');
// // give it content
// // relevant to lab-06
// // h3.textContent = `6am: ${'seatttle.someValueInAnArray[i]} cookies`;
// h3.textContent = 'Bee Brood';
// // append to the DOM
// article.appendChild(h3);

// let p = document.createElement('p');
// p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
// article.appendChild(p);


// // remeber this for today's lab
// let beeHive = {
//   name: 'Hive One',
//   honeyYieldArray: [10, 15, 12],
//   render: function(){
//     for (let i = 0; i < this.honeyYieldArray.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `Our yield is ${this.honeyYieldArray[i]} lbs.`;
//       seattleList.appendChild(li);
//     }
//   }
// };

// beeHive.render();
