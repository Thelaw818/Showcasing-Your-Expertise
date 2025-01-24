// Script to display the coupon when the button is clicked
document.addEventListener('DOMContentLoaded', () => {
    const couponButton = document.getElementById('coupon-button');
    const couponBox = document.getElementById('coupon');

    couponButton.addEventListener('click', () => {
        // Show the coupon
        couponBox.style.display = 'block';

        // Scroll to the coupon for visibility
        couponBox.scrollIntoView({ behavior: 'smooth' });
    });
});

