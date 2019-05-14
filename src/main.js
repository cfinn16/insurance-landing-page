document.addEventListener('DOMContentLoaded', () => {

  const formContainer = document.querySelector('form')
  const modal = document.querySelector('#insuranceModal')
  const modalTitle = document.querySelector('.modal-title')

  formContainer.addEventListener("click", e => {
    const isInsured = formContainer.querySelector("#insured").value
    const ageRange = parseInt(formContainer.querySelector("#age-range").value)

    if (e.target.dataset.action === "submit") {
      e.preventDefault()
      if (isInsured === "no") {
        modalTitle.innerHTML = "Sorry, no rates available."
        $('#insuranceModal').modal('show')
      } else if (isInsured === "yes" && ageRange > 1) {
        modalTitle.innerHTML = "Yes, we have great rates available!"
        $('#insuranceModal').modal('show')
      } else if (isInsured === "yes" && ageRange <= 1) {
        modalTitle.innerHTML = "Coming soon!"
        $('#insuranceModal').modal('show')
      }
    }
  })

})
