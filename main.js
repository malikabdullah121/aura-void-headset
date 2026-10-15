// Bundle Price Selector
let currentPrice = 349;

function selectBundle(element, price) {
    // Remove active class from all bundles
    document.querySelectorAll('.bundle-card').forEach(card => card.classList.remove('active'));
    
    // Add active to selected
    element.classList.add('active');
    
    // Update price
    currentPrice = price;
    document.getElementById('subtotal-display').innerText = `$${price}.00`;
    document.getElementById('total-display').innerText = `$${price}.00`;
}

// Finish Color Selector
function selectFinish(element) {
    document.querySelectorAll('.finish-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
}

// Filter Tabs on Product Specs
function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Checkout Action
function completeOrder(method) {
    alert(`⚡ Deployment Confirmed via ${method}!\nTotal Charged: $${currentPrice}.00\nYour unit is queued for priority air dispatch.`);
}