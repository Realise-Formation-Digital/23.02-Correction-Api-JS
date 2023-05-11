/**
 * @async
 *
 * Get all holidays
 *
 * @returns {Promise<void>}
 */
async function getHolidays () {
  try{

    // get the result from the api
    const res = await axios.get('https://date.nager.at/api/v3/publicholidays/2023/CH')

    //stock the list in a constant
    const holidaysList = res.data

    const colElement = document.getElementById('row-list')

    for (let holiday of holidaysList){

      const divEl = document.createElement('div')
        divEl.innerHTML = `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${holiday.name}</h5>
              <p class="card-text">${holiday.date}</p>
              <a href="#" class="btn btn-primary">Go ${holiday.name}</a>
            </div>
          </div>`

      divEl.classList.add('col')
      divEl.addEventListener('click', function () {
        alert(holiday.date)
      })
      colElement.appendChild(divEl)
    }

  } catch (e) {
    console.error(e)
  }
}

getHolidays()
