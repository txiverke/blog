export const showFormErrors = () => {
  const inputs = document.querySelectorAll('input:required')
  const textareas = document.querySelectorAll('textarea:required')
  let isFormValid = true

  inputs.forEach((input: Input) => {
    const isInputValid = showInputError(input)
    if (!isInputValid) isFormValid = false
  })

  textareas.forEach((textarea) => {
    const isTextareaValid = showInputError(textarea)
    if (!isTextareaValid) isFormValid = false
  })

  return isFormValid
}

export const showInputError = (input) => {
  const item = {
    id: document.querySelector(`#${input.id}`),
    validity: document.querySelector(`#${input.id}`).validity,
    label: document.querySelector(`#${input.name}Label`).textContent,
    error: document.querySelector(`#${input.name}Error`)
  }

  switch(input.type) {
    case 'text':
    case 'email':
    case 'password':
      return handleText(item)
    case 'textarea':
      return handleTextarea(item)
    default:
      return true
  }
}

function handleText(item) {
  const isEmail = item.id.type === 'email'
  const isPassword = item.id.type === 'password'

  if (!item.validity.valid) {
    if (item.validity.valueMissing) {
      item.error.textContent = `${item.label} is a required field`;
    } else if (isEmail && item.validity.typeMismatch) {
      item.error.textContent = `${item.label} should be a valid email address`; 
    } else if (item.validity.patternMismatch || (isPassword && item.validity.patternMismatch)) {
      item.error.textContent = `${item.label} should be longer than 6 chars`; 
    } 
    return false;
  } 

  item.error.textContent = '';
  return true;
}

function handleTextarea(item) {
  if (item.id.value.length < 25) {
    item.id.classList.add('invalid')
    item.error.textContent = `${item.label} should be longer than 25 chars`; 
    return false;
  } 
  
  item.id.classList.remove('invalid')
  item.id.classList.add('valid')
  item.error.textContent = '';
  return true;
}