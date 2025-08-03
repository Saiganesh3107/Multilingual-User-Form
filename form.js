function redirectLanguage() {
    const selectedLang = document.getElementById("l1").value;
    switch (selectedLang) {
        case "English":
            window.location.href = "engform.html";
            break;
        case "Telugu":
            window.location.href = "telform.html";
            break;
        case "Hindi":
            window.location.href = "hiform.html";
            break;
        case "Tamil":
            window.location.href = "tamilform.html";
            break;
        case "Kannada":
            window.location.href = "kanform.html";
            break;
        case "Malayalam":
            window.location.href = "malaform.html";
            break;
    }
}


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('userForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Failed to submit the form.');
    });
  });
});
