let isAuthenticated = false;

if (localStorage.getItem('user_data')) {
	isAuthenticated = true;
} else {
	isAuthenticated == false;
	alert('Usuário não está logado!');
	location.href = 'login.html';
}
