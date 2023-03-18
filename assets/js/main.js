

function toggleSearch(){
  document.getElementById("searchInput").classList.toggle('d-none');
}

function toggleProfile() {
  
  document.getElementById("myOrdersLink").classList.remove('active-user');
  document.getElementById("cashBackLink").classList.remove('active-user');
  document.getElementById("myDataLink").classList.add('active-user');
  document.getElementById("myOrders").classList.add('d-none');
  document.getElementById("cashBack").classList.add('d-none');
  document.getElementById("myData").classList.remove('d-none');
}

function toggleMyOrders() {
  document.getElementById("myDataLink").classList.remove('active-user');
  document.getElementById("cashBackLink").classList.remove('active-user');
  document.getElementById("myOrdersLink").classList.add('active-user');
  document.getElementById("myData").classList.add('d-none');
  document.getElementById("cashBack").classList.add('d-none');
  document.getElementById("myOrders").classList.remove('d-none');

}
function toggleCashBack() {
  document.getElementById("myOrdersLink").classList.remove('active-user');
  document.getElementById("myDataLink").classList.remove('active-user');
  document.getElementById("cashBackLink").classList.add('active-user');
  document.getElementById("myOrders").classList.add('d-none');
  document.getElementById("myData").classList.add('d-none');
  document.getElementById("cashBack").classList.remove('d-none');

}

function newOrders() {
  
  document.getElementById("OrderHistoryBtn").classList.remove('active-order');
  document.getElementById("NewOrdersBtn").classList.add('active-order');
  document.getElementById("OrderHistory").classList.add('d-none');
  document.getElementById("NewOrders").classList.remove('d-none');
}

function ordersHistory() {
  document.getElementById("NewOrdersBtn").classList.remove('active-order');
  document.getElementById("OrderHistoryBtn").classList.add('active-order');
  document.getElementById("NewOrders").classList.add('d-none');
  document.getElementById("OrderHistory").classList.remove('d-none');

}

var data = 0;
function increment() {
  data = data + 1;
  document.getElementById("root").innerText = data;
}
function decrement() {
  data = data - 1;
  document.getElementById("root").innerText = data;
}