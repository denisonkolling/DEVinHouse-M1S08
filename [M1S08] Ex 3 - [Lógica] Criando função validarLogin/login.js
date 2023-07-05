const usersData = [
	{ name: 'Johnn', email: 'john@email.com', password: 1234 },
	{ name: 'Peter', email: 'peter@email.com', password: 1234 },
	{ name: 'Andrea', email: 'andrea@email.com', password: 1234 },
];

const loginBtn = document.querySelector('#btn-login');

loginBtn.addEventListener('click', function login() {
	let emailInput = document.querySelector('#email').value;
	let passwordInput = document.querySelector('#password').value;
	let validLogin = false;

	for (let i in usersData) {
		if (emailInput == usersData[i].email && passwordInput == usersData[i].password) {
			validLogin = true;
      alert('Loged user!')
      break;
		} else {
			alert('Incorret email or password!');
		}
	}
});
