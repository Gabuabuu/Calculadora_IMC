const calc = document.querySelector('#calc')

verificar.addEventListener('click', function(event) {
  event.preventDefault()
  
  const name = document.getElementById('name').value 

  const weight = document.getElementById('weight').value
  
  const height = document.getElementById('height').value
  
  const res = document.getElementById('res')
  
  let imc;
  
  imc = weight / (height * height)
  
  let calcImc = imc.toFixed (1)
  
  let resImc = ['18,5', '18,5 e 25', '25,0 e 29,9', '30,0 e 39,9']
  
  imc = imc.toFixed(1)
  
  console.log(resImc[1])
  if(imc < 18.5) {
    res.innerHTML = `Ola ${name}! Seu imc é de: ${imc} e está entre ${resImc[0]} ou abaixo || Classificaçao: Magreza || Grau de obesidade: 0`
    
  } else if(imc >= 18.5 && imc <= 24.9) {
    res.innerHTML = ` Olá ${name}! Seu imc está entre: ${resImc[1]} || Classificaçao: Normal || Grau de obesidade: 0`
    
  } else if (imc >= 25.0 && imc <= 29.9) {
    res.innerHTML = `Olá ${name}! Seu imc está entre ${resImc[2]} || Classificaçao: Sobrepeso || Grau de obesidade: 1`
    
  } else if (imc >= 30.0 && imc <= 39.9) {
    res.innerHTML = `Olá ${name}! Seu imc é  de ${imc} e está entre ${resImc[3]} || Classificaçao: Obesidade || Grau de obesidade: 2`
  } else  {
    imc > 40.0;
    res.innerHTML = `Olá ${name}! Seu imc está acima de 40,0 || Classificaçao: Obesidade Grave || Grau de obesidade: 3`
  }
    
})

const year = document.getElementById('current-year')

year.innerHTML = new Date().getFullYear()

