const select  = document.getElementById('search')
const result  = document.getElementById('result_container')
// const select  = document.getElementById('search')

const selectVal = select.value

console.log(selectVal)
const apiUrl = 'https://api.publicapis.org'

async function getCategories(e) {
    const data = await fetch(`${apiUrl}/categories`)
    const res = await data.json()

    loopData(res)
}

async function getData() {
    const data = await fetch(`${apiUrl}/entries?categories=${selectVal}`)
    const res = await data.json()
}


function loopData(categories) {
    categories.forEach((data) => {
    //    selectData(data)

        const option = document.createElement('option')
        option.setAttribute('value', `${data}`)
        option.innerHTML = `
        <input type="search" name="search" id="search">
        ${data}
        `
        select.appendChild(option)
    })
}



select.addEventListener('change', getData)
getCategories() 
