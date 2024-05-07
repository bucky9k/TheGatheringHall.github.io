// Add event listeners to each checkbox
document.querySelectorAll('.item input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Toggle the "checked" class on the parent item div
        this.parentNode.classList.toggle('checked');

        // Add additional actions as needed
    });
});
