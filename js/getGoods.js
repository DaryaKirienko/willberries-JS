const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')

  const getData = () => {
    fetch('https://willberries-db-df7da-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data))
      })
  }

  links.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault
      getData()
    })
  })

}

getGoods()