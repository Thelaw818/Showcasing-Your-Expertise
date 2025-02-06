// Get references to the elements
const popup = document.getElementById("coupon-popup");
const closeBtn = document.querySelector(".close-btn");
const applyCouponBtn = document.getElementById("apply-coupon");
const showCouponBtn = document.getElementById("show-coupon-btn");
const openCouponPopupBtn = document.getElementById("open-coupon-popup");

// Function to show the coupon popup
function showCouponPopup() {
    popup.style.display = "flex"; // Shows the popup by changing display to flex
}

// Function to close the coupon popup
function closeCouponPopup() {
    popup.style.display = "none"; // Hides the popup by changing display to none
}

// Event listener to open the popup
openCouponPopupBtn.addEventListener("click", showCouponPopup);

// Event listener to close the popup when the close button is clicked
closeBtn.addEventListener("click", closeCouponPopup);

// Event listener to close the popup when the "Apply Coupon" button is clicked
document.getElementById("apply-coupon").onclick = function() {
    window.location.href = "https://www.example.com/offer"; // Redirect to new URL
    closeCouponPopup(); // Close the popup after redirect
};

// Example: Trigger to show the coupon popup (this could be triggered by an event like a button click)
showCouponBtn.addEventListener("click", showCouponPopup);
