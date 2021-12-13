const form = document.getElementById("Form")
const textbox = form.elements["submission"];

//When form is submitted it will post to /submission

form.onsubmit = event => {
  event.preventDefault();
  const data = { submission: textbox.value };
  fetch("/submission", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(response => {
      console.log(JSON.stringify(response));
    });
  textbox.value = "";
  textbox.focus();
};