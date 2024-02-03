const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
const imagesArr = document.querySelectorAll('img')

imagesArr.forEach((img) => {
	img.addEventListener('click', (event) => {
		modal.showModal()
		modalImg.src = event.target.src
	})
})

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		modal.close()
	}
})