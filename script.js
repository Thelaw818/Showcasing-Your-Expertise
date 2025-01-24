// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const couponButton = document.getElementById('coupon-button');
    const couponPopup = document.getElementById('coupon-popup');
    const closeButton = document.querySelector('.close-btn');
    const applyCouponButton = document.getElementById('apply-coupon');

    // Show the popup when the button is clicked
    couponButton.addEventListener('click', () => {
        couponPopup.style.display = 'flex';
    });

    // Hide the popup when the close button is clicked
    closeButton.addEventListener('click', () => {
        couponPopup.style.display = 'none';
    });

    // Optional: Hide the popup when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === couponPopup) {
            couponPopup.style.display = 'none';
        }
    });

    // Simulate applying the coupon
    applyCouponButton.addEventListener('click', () => {
        alert('Your 50% discount has been applied! 🎉');
        couponPopup.style.display = 'none';
    });
});
