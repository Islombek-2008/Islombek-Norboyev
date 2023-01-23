// email end password

let form = document.getElementById("form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

form.addEventListener("submit", (btn) => {
	btn.preventDefault();
	let emailEl = email.value;
	let passwordEl = password.value;
	if (emailEl === "" || passwordEl === "") {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong!",
			button: "true",
		});
	} else {
		Swal.fire({
			title: "Good job!",
			text: "You clicked the button!",
			icon: "success",
			footer: "Good job!",
		});
		style.background - aliceblue;
	}
});
