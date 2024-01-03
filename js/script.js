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

mrrangeSelect.on("change", function () {
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
