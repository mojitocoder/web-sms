// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("Hello Simply Coding");

const dreamsForm = document.querySelector("form");
dreamsForm.addEventListener("submit", event => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const phone = dreamsForm.querySelector('input').value.toString();
  const message = dreamsForm.querySelector('textarea').value.toString();

  // dreamsForm.reset();
  fetch('/sms', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      phone,
      message
    })
  });
  // alert('Sending SMS');
});
