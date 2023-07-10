const usersData = [
	{ name: 'Andrea', email: 'andrea@email.com', password: '1234' },
	{ name: 'Johnn', email: 'john@email.com', password: '1234' },
	{ name: 'Peter', email: 'peter@email.com', password: '1234' },
];

let loginSubmit = document.querySelector('#register-form');

loginSubmit.addEventListener('submit', function validateLogin(e) {

	e.preventDefault();

	let emailInput = document.querySelector('#email').value;
	let passwordInput = document.querySelector('#password').value;
	let validLogin = false;

	for (let i in usersData) {
		if (emailInput == usersData[i].email &&	passwordInput == usersData[i].password) {
			validLogin = true;
			let user_data = ({name: usersData[i].name, email: usersData[i].email});
			localStorage.setItem('user_data', JSON.stringify(user_data));
			break;

		}
	}

	if (validLogin == true) {
		location.href = 'index.html';
		alert('Redirecionando para home...');
	} else {
		alert('Incorret email or password!');
	}
});
