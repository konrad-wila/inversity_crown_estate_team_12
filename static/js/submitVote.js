document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    document.getElementById('submit-vote').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate selections
        var firstPlace = document.getElementById('first-place').value;
        var secondPlace = document.getElementById('second-place').value;
        var thirdPlace = document.getElementById('third-place').value;
        
        if (firstPlace === '' || secondPlace === '' || thirdPlace === '') {
            M.toast({ html: 'Please select your preferences for 1st, 2nd, and 3rd place' });
            return;
        }
  
      // Retrieve textarea input
      var textareaValue = document.getElementById('textarea1').value;
  
      // Log selections and textarea input to console
      console.log('1st place: ' + firstPlace);
      console.log('2nd place: ' + secondPlace);
      console.log('3rd place: ' + thirdPlace);
      console.log('Textarea input: ' + textareaValue);
 
        // Clear selections using MaterializeCSS
        var selects = document.querySelectorAll('select');
        selects.forEach(function(select) {
            M.FormSelect.getInstance(select).destroy(); // Destroy previous instance
            select.selectedIndex = 0; // Reset to default option
            M.FormSelect.init(select); // Reinitialize select element
        });

      // Clear text area
      document.getElementById('textarea1').value = ''; // Clear textarea
  
      // Display toast or message
      M.toast({ html: 'Response submitted' });
    });
});
