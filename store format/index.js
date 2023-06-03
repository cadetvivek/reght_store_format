document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
  
    // Create user object
    var user = {
      name: name,
      email: email
      
    };
  
    // Store user object in local storage
    localStorage.setItem('userDetails', JSON.stringify(user));
  
    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
   
  
    alert('User details stored successfully!');
  });
  