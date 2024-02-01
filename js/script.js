// <!-- ---------------------FOR NAVBAR ------------------------------- -->

// JavaScript for Dropdowns
document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class 'group'
  const dropdowns = document.querySelectorAll(".group");

  // Close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        dropdown.querySelector(".absolute").classList.add("hidden");
      }
    });
  });

  // Toggle dropdown on button click
  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector("button");
    const menu = dropdown.querySelector(".absolute");

    button.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
  });
});

// -----------------------DATE TIME PICKER -------------------------
// Get the current date and time in the format required by datetime-local input
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const day = String(now.getDate()).padStart(2, "0");
const hours = String(now.getHours()).padStart(2, "0");
const minutes = String(now.getMinutes()).padStart(2, "0");

// Construct the value in the required format
const currentDatetime = `${year}-${month}-${day}T${hours}:${minutes}`;

// Set the value of the input to the current date and time
document.getElementById("startDateInput").value = currentDatetime;
document.getElementById("endDateInput").value = currentDatetime;

var divAlert = document.getElementsByClassName("alertBox")[0]; // Assuming there is only one element with the class "alertBox"
var divSummary = document.getElementsByClassName("summaryBox")[0]; // Assuming there is only one element with the class "summaryBox"
var divTable = document.getElementsByClassName("detailReportBox")[0]; // Assuming there is only one element with the class "detailReportBox"

// -----------------------CLEAR BUTTON --------------------------
// Store references to elements
const searchBox = document.getElementById("searchBox");
const daterange = document.getElementById("daterange");

const element = document.getElementById("btn_clear_me");
element.addEventListener("click", function () {
  // Find the searchBox element

  // Check if searchBox element exists
  if (searchBox) {
    // Find all input elements within the searchBox
    const inputs = searchBox.querySelectorAll("input");

    var today = new Date();
    // Function to format the date in the desired format
    function formatDate(date) {
      var day = ("0" + date.getDate()).slice(-2);
      var month = ("0" + (date.getMonth() + 1)).slice(-2);
      var year = date.getFullYear();
      var hours = ("0" + date.getHours()).slice(-2);
      var minutes = ("0" + date.getMinutes()).slice(-2);

      return day + "/" + month + "/" + year + " " + hours + ":" + minutes;
    }

    // Get the current date and format it
    var startDate = formatDate(today);
    // Assuming you want the end date to be the same as the start date for this example
    var endDate = formatDate(today);
    // Combine start and end dates in the desired format
    var formattedDate = startDate + " - " + endDate;

    // Iterate over the inputs and clear their values
    inputs.forEach((input) => {
      input.value = "";
    });
    daterange.value = formattedDate;

    divAlert.classList.remove("hidden");
    divSummary.classList.add("hidden");
    divTable.classList.add("hidden");
  } else {
    console.error("SearchBox element not found");
  }
});

// ----------------------------DETAIL REPORT BUTTON ------------------------------

function detailReport() {
  // Show both summary and table box
  divAlert.classList.add("hidden");

  if (divSummary.classList.contains("hidden")) {
    divSummary.classList.remove("hidden");
  }

  if (divTable.classList.contains("hidden")) {
    divTable.classList.remove("hidden");
  }
}

// ----------------------------SUMMARY BUTTON ------------------------------

function summary() {
  // Show both summary and table box
  divAlert.classList.add("hidden");
  divTable.classList.add("hidden");

  if (divSummary.classList.contains("hidden")) {
    divSummary.classList.remove("hidden");
  }
}

// ---------------------------- REPORT BUTTON ------------------------------
function report() {
  // Show both summary and table box
  divAlert.classList.add("hidden");
  divSummary.classList.add("hidden");

  if (divTable.classList.contains("hidden")) {
    divTable.classList.remove("hidden");
  }
}

// ---------------------------------RANGE SELECTING ---------------------------
var mrrangeSelect = $(".rangeSelect");
var receiptRangeSelect = $(".rangeSelectReceipt");
var orderRangeSelector = $(".rangeSelectOrder");
var argeRangeSelector = $(".agerangeSelect");
var TestRangeSelector = $("#Test");

mrrangeSelect.on("change", function () {
  var to = $("#fromToMR");
  $(this).nextAll("input, label").remove();
  if ($(this).val() === "Range") {
    $(this).after(
      "<div id='fromToMR' class='sm:grid md:grid lg:grid xl:grid flex justify-between'>" +
        "<input id='fromMR' name='fromMR' type='text' class='sm:ml-0 sm:w-60 md:ml-0 md:w-80 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 ml-2 mt-1 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='From MRN' />" +
        "<p id='toText' style='padding: 10px'> To </p> " +
        "<input id='toMR' name='toMR' type='text' class='sm:ml-0 sm:w-60 md:w-80 lg:ml-0 lg:w-80 xl:w-80 w-56 mt-1 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='To MRN' />" +
        "</div>"
    );
  } else if ($(this).val() === "Like") {
    to.remove();
    $(this).after(
      "<input id='mr' name='mr' type='text' class='sm:ml-0 sm:w-60 md:w-80 md:ml-0 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 mt-1 ml-2 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='MRN' />"
    );
  }
});

receiptRangeSelect.on("change", function () {
  var to = $("#fromToReceipt");
  $(this).nextAll("input, label").remove();
  if ($(this).val() === "Range") {
    $(this).after(
      "<div id='fromToReceipt' class='sm:grid md:grid lg:grid xl:grid flex justify-between'>" +
        "<input id='fromReceipt' name='fromReceipt' type='text' class='sm:ml-0 sm:w-60 md:ml-0 md:w-80 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 ml-2 mt-1 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='From Receipt' />" +
        "<p id='toText' style='padding: 10px'> To </p> " +
        "<input id='toReceipt' name='toReceipt' type='text' class='sm:ml-0 sm:w-60 md:w-80 lg:ml-0 lg:w-80 xl:w-80 w-56 mt-1 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='To Receipt' />" +
        "</div>"
    );
  } else if ($(this).val() === "Like") {
    to.remove();
    $(this).after(
      "<input id='receipt' name='receipt' type='text' class='sm:ml-0 sm:w-60 md:w-80 md:ml-0 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 mt-1 ml-2 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='Receipt#' />"
    );
  }
});

orderRangeSelector.on("change", function () {
  var to = $("#fromToOrder");
  $(this).nextAll("input, label").remove();
  if ($(this).val() === "Range") {
    $(this).after(
      "<div id='fromToOrder' class='sm:grid md:grid lg:grid xl:grid flex justify-between'>" +
        "<input id='fromOrder' name='fromOrder' type='text'  placeholder='From Order' class='sm:ml-0 sm:w-60 md:ml-0 md:w-80 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 ml-2 mt-1 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' />" +
        "<p id='toText' style='padding: 10px'> To </p> " +
        "<input id='toOrder' name='toOrder' type='text' placeholder='To Order' class='sm:ml-0 sm:w-60 md:w-80 lg:ml-0 lg:w-80 xl:w-80 w-56 mt-1 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' />" +
        "</div>"
    );
  } else if ($(this).val() === "Like") {
    to.remove();
    $(this).after(
      "<input id='Order' name='Order' type='text' placeholder='MRN'  class='sm:ml-0 sm:w-60 md:w-80 md:ml-0 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 mt-1 ml-2 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' />"
    );
  }
});

argeRangeSelector.on("change", function () {
  var to = $("#fromToAge");
  $(this).nextAll("input, label").remove();
  if ($(this).val() === "Range") {
    $(this).after(
      "<div id='fromToAge' class='sm:grid md:grid lg:grid xl:grid flex justify-between'>" +
        "<input id='fromAge' name='fromAge' type='text' class='sm:ml-0 sm:w-60 md:ml-0 md:w-80 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 ml-2 mt-1 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='From Age' />" +
        "<p id='toText' style='padding: 10px'> To </p> " +
        "<input id='toAge' name='toAge' type='text' class='sm:ml-0 sm:w-60 md:w-80 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 mt-1 w-56 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='To Age' />" +
        "</div>"
    );
  } else if ($(this).val() === "Like") {
    to.remove();
    $(this).after(
      "<input id='Age' name='Age' type='text' class='sm:ml-0 sm:w-60 md:w-80 md:ml-0 lg:ml-0 lg:w-80 xl:w-80 xl:ml-0 w-56 mt-1 ml-2 px-3 py-2 shadow-lg ring-1 bg-white border rounded-md text-sm placeholder-slate-400 focus:outline-none focus:border-blue-800 focus:ring-2 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='Age' />"
    );
  }
});

// When option test5 is selected it should show dengue test by ELISA input fields
TestRangeSelector.on("change", function () {
  // console.log($(this).val());
  $(this).nextAll("input, label").remove();
  if ($(this).val() === "Test5") {
    $(this).after(
      "<div id='fromToAge'>" +
        "<input id='fromAge' name='fromAge' type='text' class='input-btn' placeholder='From Age' />" +
        "<p id='toText'> To </p> " +
        "<input id='toAge' name='toAge' type='text' class='input-btn' placeholder='To Age' />" +
        "</div>"
    );
  } else if ($(this).val() === "Like") {
    $(this).after(
      "<input id='Age' name='Age' type='text' class='input-btn' placeholder='Age' />"
    );
  }
});

// PDF, Print, CSV, Excel buttons
$(document).ready(function () {
  $("#example").DataTable({
    pageLength: 100,
    dom: '<"container-fluid"<"row d-flex align-content-center justify-content-center"<"col"l><"col btn btn-sm text-center"B><"col"f>>>rtip',
    buttons: [
      {
        extend: "copy",
        text: '<i class="text-center bg-orange-400 font-bold px-5 py-2 rounded-lg text-black hover:bg-orange-200"> Copy </i>',
        titleAttr: "Copy",
        className: "btn btn-sm btn-primary",
      },
      {
        extend: "excel",
        text: '<i class="text-center bg-lime-400 font-bold px-5 py-2 rounded-lg text-black hover:bg-lime-200"> Excel </i>',
        title:
          '@ViewData["HeadTitle"] of @ViewData["hospital"] From: @ViewData["fromdate"] To: @ViewData["todate"]',
        titleAttr: "Excel",
        className: "btn btn-sm btn-success",
      },
      {
        extend: "csv",
        text: '<i class="text-center bg-teal-400 font-bold px-5 py-2 rounded-lg text-black hover:bg-teal-200"> Csv </i>',
        title:
          '@ViewData["HeadTitle"] of @ViewData["hospital"] From: @ViewData["fromdate"] To: @ViewData["todate"]',
        titleAttr: "Csv",
        className: "btn btn-sm btn-danger",
      },
      {
        extend: "pdf",
        text: '<i class="text-center bg-cyan-400 font-bold px-5 py-2 rounded-lg text-black hover:bg-cyan-200"> Pdf </i>',
        pageSize: "A4",
        alignment: "center",
        download: "open",
        title:
          '@ViewData["HeadTitle"] of @ViewData["hospital"] From: @ViewData["fromdate"] To: @ViewData["todate"]',
        titleAttr: "Pdf",
        className: "btn btn-sm btn-warning",
        //orientation: 'landscape'
      },
      {
        extend: "print",
        text: '<i class="text-center bg-emerald-400 font-bold px-5 py-2 rounded-lg text-black hover:bg-emerald-200"> Print </i>',
        autoPrint: false,
        title:
          '<div class="row"><div class="col-2"><img width="60px" height="60px" alt="" title="PIMS" src="/img/pimsLogo.png" /></div> <div class="col-10"><h2>PIMS (Pakistan Institute of Medical Sciences)</h2></div></div>',
        messageTop:
          '<hr/> <p class="text-center fs-5 fw-bold">@ViewData["HeadTitle"] of @ViewData["hospital"] From: @ViewData["fromdate"] To: @ViewData["todate"]</p> <hr/>',
        titleAttr: "Print",
        className: "btn btn-sm btn-info",
        messageBottom:
          '<br/> <br/> <br/> <p class="text-end fs-5 fw-bold">Incharge HMIS </p>',
        //orientation: 'landscape'
      },
    ],
  });
});

// -------------------SUMO SELECT ------------------
// Ensure the DOM is ready
$(document).ready(function () {
  // Initialize SumoSelect after a slight delay to ensure it's loaded after the page elements
  setTimeout(function () {
    $(".combined-select").SumoSelect({
      search: true,
      searchText: "Enter here.",
      selectAll: true,
    });
  }); // You can adjust the delay if needed
});
