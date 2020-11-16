const select  = document.getElementById('search')
const result  = document.getElementById('result_container')
const count   = document.getElementById('count')
const search   = document.getElementById('end')
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
    const data = await fetch(`${apiUrl}/entries?category=${select.value}&https=true`)
    const res = await data.json()

    putIn(res)
}

function putIn(res) {
    // const card = document.createElement('div')
    // card.setAttribute('class', 'card')
    console.log(res)
    count.innerHTML = ''
    result.innerHTML = ''
        count.innerHTML = `
        Your Selection Contains ${res.count} APIs  Find Them Below
        `

        // result.innerHTML = `
        //     ${res.entries.forEach(data => {
        //         `

        //         `
        //     })}
        // `

        res.entries.forEach((item) => {
            const element = document.createElement('div')
            element.classList.add('card')
            if(item.Auth === "") {item.Auth = "Not Required"};
            element.innerHTML = `
            <h3 class='name'>${item.API}</h3>
            <h4 class='description'>${item.Description}</h4>  
            <h4 class='auth'>Auth Type: ${item.Auth}</h4>  
            `
            result.appendChild(element)
        })

        search.innerHTML = `
        <div>
        <div class="hero_text">
        Or Search for a particular API
        </div>
        <input type="text" id="input">
        </div>
        `
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
