// Main JavaScript for the ServicePro website

// Registration Form Validation
document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real application, you would send this data to your server
    alert('Registration successful! Redirecting to dashboard...');
    window.location.href = 'dashboard.html';
});

// Service Request Form
document.getElementById('serviceRequestForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real application, you would send this data to your server
    alert('Service request submitted successfully!');
    window.location.href = 'dashboard.html';
});

// Tab functionality for admin panel
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Technician availability form
document.getElementById('availabilityForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Availability updated successfully!');
});

// Notification form in admin panel
document.querySelector('.notification-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Notification sent successfully!');
});

// Report form in admin panel
document.querySelector('.report-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Report generated successfully!');
});