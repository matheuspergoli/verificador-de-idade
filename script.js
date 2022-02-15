var botao = window.document.getElementById('btn-submit')

botao.addEventListener('click', clicar)

function clicar() {
    // Pegando a data de nascimento e fazendo a variável com o valor
    var nascimento = window.document.getElementById('ano-nascimento')
    anoNascimento = Number(nascimento.value)
    if (anoNascimento > 2022 || anoNascimento < 1940) {
        return window.alert('[ERRO] Digite sua data de nascimento corretamente!')
    } 
    var sexo = window.document.getElementsByName('sexo')
    var genero = '[ERRO] Escolha um gênero!'
    if (sexo[0].checked) {
        genero = 'Homem'
    } else if (sexo[1].checked) {
        genero = 'Mulher'
    } else {
        return window.alert(genero)
    }
    var idade = 2022 - anoNascimento
    var text = window.document.getElementById('text')
    var img = window.document.getElementById('img')
    img.style.display = 'block'
    text.style.textAlign = 'center'
    text.innerHTML = `Detectamos um ${genero} de ${idade} anos.`
    if (genero == 'Homem' && idade >= 1 && idade <= 13) {
        img.style.backgroundImage = 'url(imagens/criança-homem.jpg)'
    } else if (genero == 'Homem' && idade > 13 && idade <= 19) {
        img.style.backgroundImage = 'url(imagens/jovem-homem.jpg)'
    } else if (genero == 'Homem' && idade > 19 && idade <= 60) {
        img.style.backgroundImage = 'url(imagens/adulto-homem.jpg)'
    } else if (genero == 'Homem' && idade > 60) {
        img.style.backgroundImage = 'url(imagens/idoso-homem.jpg)'
    } else if (genero == 'Mulher' && idade >= 1 && idade <= 13) {
        img.style.backgroundImage = 'url(imagens/criança-mulher.jpg)'
    } else if (genero == 'Mulher' && idade > 13 && idade <= 19) {
        img.style.backgroundImage = 'url(imagens/jovem-mulher.jpg)'
    } else if (genero == 'Mulher' && idade > 19 && idade <= 60) {
        img.style.backgroundImage = 'url(imagens/adulto-mulher.jpg)'
    } else if (genero == 'Mulher' && idade > 60) {
        img.style.backgroundImage = 'url(imagens/idoso-mulher.jpg)'
    }
}