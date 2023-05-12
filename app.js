const submitButton = document.getElementById('submit')
const ratingCard = document.querySelector('.rating-card')
const mainCard = document.querySelector('.main-card')
const rating = document.getElementById('rating')
const rates = document.querySelectorAll('.list')

submitButton.addEventListener('click', function () {
	mainCard.classList.add('hidden')
	ratingCard.classList.remove('hidden')
})

rates.forEach((rate) => {
      rate.addEventListener("click", () => {
            rating.innerHTML = rate.innerHTML
      })

})