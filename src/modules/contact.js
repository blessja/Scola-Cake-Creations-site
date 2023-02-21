function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 +263 77 341 8501'

  const address = document.createElement('p')
  address.textContent = '🏠 14004 Madokero Eastate, Harare'

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = 'images/scola-address.png'
  restaurantLocation.alt = 'Scola Cake Creations'

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(restaurantLocation)

  return contact
}

function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact
