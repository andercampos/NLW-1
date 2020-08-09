const AddField = {
  cloneField() {
    const scheduleItem = document.querySelector('.schedule-item:last-child').cloneNode(true)
    const inputs = scheduleItem.querySelectorAll('input')

    const options = document.getElementById("select_card")
    
    if (AddField.verifyFields(inputs, options)){
      AddField.clearFields(inputs)

      document.querySelector('#schedule-items').appendChild(scheduleItem)
    }
  },
  verifyFields (inputs, options) {
    let validation = true

    if (options.selectIndex == 0) {
      validation = false
    }

    inputs.forEach(function (input) {
      if (input.value == "") {
        validation = false
      }
    })

    return validation
  },
  clearFields (inputs) {
    inputs.forEach(function (input) {
      input.value = ""
    })
  }
}