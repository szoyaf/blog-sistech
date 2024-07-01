const bearerToken = '6c9b9619-e40f-4862-b1dc-e58ea32856fd';
const apiUrl = 'https://sistech-api.vercel.app/blog/';

function submitForm(event) {
    event.preventDefault(); 
    const title = document.getElementById('titleForm').value;
    const content = document.getElementById('contentForm').value;

    const requestBody = {
      title: title,
      content: content
    };

    // Send POST request to the server
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => {
      if (response.ok) {
        // Redirect to home.html after successful submission
       window.location.href = 'home.html';
    } else {
        throw new Error('Form submission failed.');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }

  const form = document.getElementById('myForm');
  form.addEventListener('submit', submitForm);