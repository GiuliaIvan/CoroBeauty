// ------------ SIDE MENU ------------
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span").classList.toggle("active");
});
// ------------ END OF SIDE MENU ------------


// ------------ BOOKINGS FETCHING ------------
"use strict";

/* ---------- Global Variables ---------- */
 let _bookings = [];
 let _selectedBookingId;

/* -------------------------------------- */

 async function initApp() {
   await fetchBookings();
   appendBookings(_bookings);
 }

 initApp();

 async function fetchBookings() {
   const url = "https://giuliaivan.github.io/CoroBookings/data.json";
   const response = await fetch(url);
   const data = await response.json();
   console.log(data);
   _bookings = data;
 }

function appendBookings(Bookings) {
  const tbody = document.querySelector("table tbody");
  for (const booking of Bookings) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
                          <td>${booking.serviceName}</td>
                          <td>${booking.dateTime}</td>
                          <td>${booking.price}</td>
                          <td class="${
                            booking.status === "Declined"
                              ? "danger"
                              : booking.status === "Pending"
                              ? "warning"
                              : booking.status === "Confirmed"
                              ? "success"
                              : "primary"
                          }">${booking.status}</td>
                          <td class="primary">Details</td>
                          `;
    tbody.appendChild(tr);
  }
}

// ADD NEW BOOKING
function addNewBooking() {
  const sN = "new booking";
  const dT = "new booking";
  const pricing = "new booking";
  const stat = "new booking";

  const newBooking = {
    serviceName: sN,
    dateTime: dT,
    price: pricing,
    status: stat,
  };

  _bookings.push(newBooking);
  appendBookings(_bookings);
}
// ------------ END OF BOOKINGS ------------


// ------------ TOP-RIGHT-PROFILE SUBMENU ------------
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}


// fill orders in table
// Orders.forEach((order) => {
//   const tr = document.createElement("tr");
//   const trContent = `
//                         <td>${order.serviceName}</td>
//                         <td>${order.dateTime}</td>
//                         <td>${order.price}</td>
//                         <td class="${
//                           order.status === "Declined"
//                             ? "danger"
//                             : order.status === "Pending"
//                             ? "warning"
//                             : order.status === "Confirmed" ? "success"
//                             : "primary"
//                         }">${order.status}</td>
//                         <td class="primary">Details</td>
//                         `;
//   tr.innerHTML = trContent;
//   document.querySelector("table tbody").appendChild(tr);
// });