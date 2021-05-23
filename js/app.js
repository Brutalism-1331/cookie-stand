'use strict';
const storeHoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const salesDataTable = document.querySelector('table')
let tfoot = document.createElement('tfoot');
let newLocationSalesData = document.getElementById('add_new_cookie_location');
const storeLocationArray = [];
let hourlySalesArray = new Array(storeHoursArray.length).fill(0);
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

GetLocationSalesData.prototype.projectedCustomerPerHour = function () {
  for (let i = 0; i < storeHoursArray.length; i++) {
    this.customersPerHour.push(randomInt(this.custMax, this.custMin));
  }
};

GetLocationSalesData.prototype.projectedCustomerSalesPerHour = function () {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    this.salesPerHour.push(Math.floor(this.customersPerHour[i] * this.avgSales))
  }
};

GetLocationSalesData.prototype.createProjectedSalesTable = function () {
  let tbody = document.createElement('tbody');
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
  tbody.appendChild(tr);
  salesDataTable.appendChild(tbody);
};

GetLocationSalesData.prototype.callPrototypeFunctions = function () {
  this.projectedCustomerPerHour();
  this.projectedCustomerSalesPerHour();
  this.createProjectedSalesTable();
};

function createNewLocationSalesData(event) {
  event.preventDefault();
  let formLocation = event.target.location.value;
  let formCustMin = parseInt(event.target.cust_min.value);
  let formCustMax = parseInt(event.target.cust_max.value);
  let formAverageSales = parseInt(event.target.average_sales.value);
  new GetLocationSalesData(formLocation, formCustMin, formCustMax, formAverageSales);
  tfoot.innerHTML = '';
  createSalesDataFooter();
};

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

function createSalesDataFooter() {
  let hourlySalesArray = new Array(storeHoursArray.length).fill(0);
  let grandTotal = 0;
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = 'Hour Total:';
  tr.appendChild(td);
  for (let i = 0; i < storeLocationArray.length; i++) {
    for (let j = 0; j < storeHoursArray.length; j++) {
      hourlySalesArray[j] += storeLocationArray[i].salesPerHour[j];
      grandTotal += storeLocationArray[i].salesPerHour[j];
    }
  };
  salesDataTable.appendChild(tr);
  for (let i = 0; i < hourlySalesArray.length; i++) {
    td = document.createElement('td');
    td.textContent = hourlySalesArray[i];
    tr.appendChild(td);
    salesDataTable.appendChild(tr);
  }
  td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
  tfoot.appendChild(tr);
  salesDataTable.appendChild(tfoot);

};

new GetLocationSalesData('Seattle', 23, 65, 6.3);
new GetLocationSalesData('Tokyo', 3, 24, 1.2);
new GetLocationSalesData('Dubai', 11, 38, 3.7);
new GetLocationSalesData('Paris', 20, 38, 2.3);
new GetLocationSalesData('Lima', 23, 65, 4.6);

newLocationSalesData.addEventListener('submit', createNewLocationSalesData);

createSalesDataTableHead();
createSalesDataFooter();
