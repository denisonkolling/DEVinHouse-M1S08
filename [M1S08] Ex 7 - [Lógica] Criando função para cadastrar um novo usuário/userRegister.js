const usersData = [
	{ name: 'Andrea', email: 'andrea@email.com', password: '1234' },
	{ name: 'Johnn', email: 'john@email.com', password: '1234' },
	{ name: 'Peter', email: 'peter@email.com', password: '1234' },
];

let registerSubmit = document.querySelector('#register-form');

registerSubmit.addEventListener('submit', function registerUser(e) {
	e.preventDefault();

	let nameInput = document.querySelector('#name').value;
	let emailInput = document.querySelector('#email').value;
	let passwordInput = document.querySelector('#password').value;
	let newUser = true;

	for (let i in usersData) {
		if (emailInput == usersData[i].email) {
			newUser = false;
			alert('Email já cadastrado!');
			break;
		}
	}

	if (newUser == true) {
		usersData.push({
			name: nameInput,
			email: emailInput,
			password: passwordInput,
		});
		console.log(usersData)
	}

});
