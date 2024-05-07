document.querySelectorAll('.item input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Toggle the "checked" class on the parent item div
        this.parentNode.classList.toggle('checked');
        
        // Update the checkbox's appearance
        if (this.checked) {
            this.setAttribute('checked', 'checked');
        } else {
            this.removeAttribute('checked');
        }

        // Add additional actions as needed
    });
});
