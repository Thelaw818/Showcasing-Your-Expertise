// Get references to the elements
const popup = document.getElementById("coupon-popup");
const closeBtn = document.querySelector(".close-btn");
const applyCouponBtn = document.getElementById("apply-coupon");

// Function to show the coupon popup
function showCouponPopup() {
    popup.style.display = "flex"; // Shows the popup by changing display to flex
}

// Function to close the coupon popup
function closeCouponPopup() {
    popup.style.display = "none"; // Hides the popup by changing display to none
}

// Event listener to close the popup when the close button is clicked
closeBtn.addEventListener("click", closeCouponPopup);

// Event listener to close the popup when the "Apply Coupon" button is clicked
applyCouponBtn.addEventListener("click", function() {
    alert("Coupon Applied!"); // Placeholder for coupon logic
    closeCouponPopup(); // Hide the popup after applying coupon
});

// Example: Trigger to show the coupon popup (this could be triggered by an event like a button click)
document.getElementById("show-coupon-btn").addEventListener("click", showCouponPopup);
