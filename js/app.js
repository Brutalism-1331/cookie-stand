'use strict';
const storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const salesDataTable = document.querySelector('table')
const storeLocationArray = [];
const hourlySalesArray = [];
let grandTotal = 0;
function randomInt(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function GetLocationSalesData(locationName, custMin, custMax, averageSales) {
  this.locationName = locationName;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avgSales = averageSales;
  this.customersPerHour = [];
  this.salesPerHour = [];
  this.dailySalesTotal = 0;
  storeLocationArray.push(this);
  this.callPrototypeFunctions();
};
// This function should use the randomInt() function and generate a randomized customer per hour for every hour that the store is open and return the value of each hour to the customersPerHour[],
GetLocationSalesData.prototype.projectedCustomerPerHour = function () {
  for (let i = 0; i < storeHoursArray.length; i++) {
    this.customersPerHour.push(randomInt(this.custMax, this.custMin));
  }
};
// This function should take the customersPerHour [] and then * each hour by the average sales of the shop location and then push those totals into salesPerHour[],
// Each hour total needs to be added to each other and than added to dailySalesTotal.
GetLocationSalesData.prototype.projectedCustomerSalesPerHour = function () {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    this.salesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgSales))
  }
};
//This function should take the salesPerHour[] and create a row of the table shown on the sales html page.
//The table must have a daylily sales total and an all shops daylily total.
// step 1 create element, step 2, give textcontent, step 3 append child.
function createSalesDataTableHead() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Location:';
  tr.appendChild(td)
  for (let i = 0; i < storeHoursArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = storeHoursArray[i];
    tr.appendChild(td)
  }
  td = document.createElement('td');
  td.textContent = 'Total:';
  tr.appendChild(td);
  thead.appendChild(tr);
  salesDataTable.appendChild(thead);
};
GetLocationSalesData.prototype.createProjectedSalesTable = function () {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.locationName;
  tr.appendChild(td)
  for (let i = 0; i < this.salesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.salesPerHour[i];
    tr.appendChild(td);
    this.dailySalesTotal += this.salesPerHour[i];
  }
  td = document.createElement('td');
  td.textContent = this.dailySalesTotal;
  tr.appendChild(td)
  salesDataTable.appendChild(tr);
};
function createSalesDataFooter() {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Hour Total:';
  tr.appendChild(td);
  for (let i = 0; i < storeHoursArray.length; i++) {
    let hourSale = 0;
    // let thisStore = storeLocationArray[i];

    for (let j = 0; j < storeLocationArray.length; j++) {
      hourSale += storeLocationArray[j].salesPerHour[i];
    }
    hourlySalesArray.push(hourSale);
    grandTotal += hourSale
  };
  salesDataTable.appendChild(tr);
  for (let i = 0; i < hourlySalesArray.length; i++) {
    td = document.createElement('td');
    td.textContent = hourlySalesArray[i];
    tr.appendChild(td)
    salesDataTable.appendChild(tr);
  }
};
GetLocationSalesData.prototype.callPrototypeFunctions = function () {
  this.projectedCustomerPerHour();
  this.projectedCustomerSalesPerHour();
  this.createProjectedSalesTable();
};
new GetLocationSalesData('Seattle', 23, 65, 6.3);
new GetLocationSalesData('Tokyo', 3, 24, 1.2);
new GetLocationSalesData('Dubai', 11, 38, 3.7);
new GetLocationSalesData('Paris', 20, 38, 2.3);
new GetLocationSalesData('Lima', 23, 65, 4.6);
createSalesDataTableHead();
createSalesDataFooter();
