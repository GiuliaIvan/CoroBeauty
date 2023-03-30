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
// ------------ END OF BOOKINGS ------------

for (const booking of Bookings) {
  function addNewUser() {
    const mail = `${booking.serviceName}`;
    const enrollmentType = `${booking.serviceName}`;
    const img = `${booking.serviceName}`;
    const id = `${booking.serviceName}`;

    const newUser = {
      serviceName: img,
      dateTime: mail,
      price: enrollmentType,
      status: id,
    };

    _bookings.push(newUser);
    appendBookings(_bookings);
  }
}



// ------------ TOP-RIGHT-PROFILE SUBMENU ------------
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}