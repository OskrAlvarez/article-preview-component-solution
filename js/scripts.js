console.log('works')
const btnShare = document.querySelector('.btn-social')
const shareBadge = document.querySelector('.share')
const socialLinks = document.querySelectorAll('.social-links')

btnShare.addEventListener('click', () => {
  btnShare.classList.toggle('active-btn') 
  shareBadge.classList.toggle('no-active')
})

socialLinks.forEach((btn) => {
  btn.addEventListener('click', (e) => { 
    shareBadge.classList.add('no-active')
    // btnShare.classList.add('no-active') 
  })
})