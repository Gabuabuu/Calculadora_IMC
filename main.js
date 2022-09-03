

verificar.addEventListener('click', function(event) {
  event.preventDefault()
  
  const name = document.getElementById('name').value 

  const weight = document.getElementById('weight').value
  
  const height = document.getElementById('height').value
  
  const res = document.getElementById('res')
  
  let imc;
  
  imc = weight / (height * height)
  
  let calcImc = imc.toFixed (1)
  
  let resImc = ['18,5', '18,5 e 25', '25,0 e 29,9', '30,0 e 39,9'] //array para identificar se o imc esta ou não na medida certa
  
  imc = imc.toFixed(1) //fixando resultado do imc só até a primeira casa decimal
  
  
  if(!weight && !height || !name){
    alert('Preencha os campos acima corretamente') //Checa se os campos estão todos preenchidos e assim liberando a resposta
  } else {
    
    if(imc < 18.5) {
    res.style.color = '#1FFF00'
    res.innerHTML = `Ola ${name}! Seu imc é de: ${imc} e está entre ${resImc[0]} ou abaixo || Classificaçao: Magreza || Grau de obesidade: 0`
    
  } else if(imc >= 18.5 && imc <= 24.9) {
    res.style.color = '#1F8910'
    res.innerHTML = ` Olá ${name}! Seu imc é de ${imc} e está entre: ${resImc[1]} || Classificaçao: Normal || Grau de obesidade: 0`
    
  } else if (imc >= 25.0 && imc <= 29.9) {
    res.style.color = '#B7960A'
    res.innerHTML = `Olá ${name}! Seu imc é de ${imc} e está entre ${resImc[2]} || Classificaçao: Sobrepeso || Grau de obesidade: 1`
    
  } else if (imc >= 30.0 && imc <= 39.9) {
    res.style.color = '#D98005'
    res.innerHTML = `Olá ${name}! Seu imc é  de ${imc} e está entre ${resImc[3]} || Classificaçao: Obesidade || Grau de obesidade: 2`
  } else  {
    imc > 40.0;
    res.style.color = '#FF3700'
    res.innerHTML = `Olá ${name}! Seu imc é de ${imc} e está acima de 40,0 procure um médico urgente! || Classificaçao: Obesidade Grave || Grau de obesidade: 3`
  } //checagem para dizer se o imc esta ou não na medida certa e dizendo em qual classificação se adequa.
  }
    
})

const year = document.getElementById('current-year')

year.innerHTML = new Date().getFullYear() //atualiza o ano do footer
