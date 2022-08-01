const btnOut = document.getElementById('btn-out');

btnOut.addEventListener('click',(e) => {
    e.preventDefault();
    self.location.href = 'http://localhost:3000/api/v1/users/signin'

  })