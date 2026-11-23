var link = document.getElementById("suv-enquiry");

if (link) {
    link.onclick = function() {
        window.location.href = "enquiry.html";
    };
}
var enquiryForm = document.getElementById("enquiry-form");
var feedback = document.getElementById("form-feedback");

if (enquiryForm && feedback) {
  enquiryForm.onsubmit = function(event) {
    event.preventDefault();
    feedback.textContent = "Thank you for contacting us. we aim to respond within two working days.";
    enquiryForm.reset();
  };
}
