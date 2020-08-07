// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
  // Duplicar campos. Que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Node = estrutura/elemento html, 'DOM'
  
  // limpar os campos. Que campos?
  const fields = newFieldContainer.querySelectorAll('input') //Pegar todos os inputs
  fields.forEach(function (field) {
    //Pegar o field do momento e limpa ele
    field.value = ""
  })

  // Colocar na página: onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
