let errors = [];
const alertBox = document.getElementById("alertContainer");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  errors = [];
  const fullname = String(document.getElementById("fullname").value);
  const email = document.getElementById("email").value;
  const password = String(document.getElementById("password").value);
  const phone = String(document.getElementById("phone").value);
  const address = String(document.getElementById("address").value);
  const birthday = document.getElementById("birthday").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const isSubscribed = document.querySelector("#subscribe").checked;

  if (fullname.length < 5) {
    errors.push("Fullname");
  }
  if (password.length < 8) {
    errors.push("Password");
  }
  if (phone.length != 11) {
    errors.push("Phone Number");
  }
  if (address.length < 5) {
    errors.push("Address");
  }

  if (errors.length > 0) {
    //Error
    alertBox.innerHTML = `<div class="alert alert-error">Invalid Fields (${errors.join(
      ","
    )})</div>`;
  } else {
    //Success
    alertBox.innerHTML = `<div class="alert alert-success">Registration Successful!</div>`;
    const data = {
      fullname,
      email,
      password,
      gender,
      birthday,
      phone,
      address,
      isSubscribed,
    };
    console.log(data);
  }
});
