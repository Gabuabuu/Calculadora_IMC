const calc = document.querySelector('#calc')

calc.addEventListener('click', function(event) {
  event.preventDefault()
  
  const name = document.getElementById('name').value 

  const weight = document.getElementById('weight').value
  
  const height = document.getElementById('height').value
  
  const res = document.getElementById('res')
  
  let imc;
  
  imc = weight / (height * height)
  
  let calcImc = imc.toFixed (1)
  
  res.innerHTML = `Olá ${name}! Você tem ${height} de altura e pesa ${weight} kilos. Seu imc é de ${calcImc}`
  
  console.log(imc.toFixed(2))
})

const year = document.getElementById('current-year')

year.innerHTML = new Date().getFullYear()

