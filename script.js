const select  = document.getElementById('search')
const result  = document.getElementById('result_container')
const count   = document.getElementById('count')
const search   = document.getElementById('end')
const loader    = document.querySelector('.loader')
// const select  = document.getElementById('search')

const selectVal = select.value

const apiUrl = 'https://api.publicapis.org'

async function getCategories(e) {
    const data = await fetch(`${apiUrl}/categories`)
    const res = await data.json()
    loopData(res.categories)
}

async function getData() {
    const data = await fetch(`${apiUrl}/entries?category=${select.value}&https=true`)
    const res = await data.json()

    putIn(res)
}

function proceed(){
    loader.classList.add('show')

    setTimeout(() => {
        loader.classList.remove('show')  
    }, 1000)

    setTimeout(() => {
        
    
    }, 1000)
}

async function randomData() {
    try {
        const data = await fetch(`${apiUrl}/random`)
        const res = await data.json()

    res.entries.forEach((item) => {
        loader.classList.add('show')
        setTimeout(() => {
            loader.classList.remove('show')  
        }, 1500)

        setTimeout(() => {
      const element = document.createElement('div')
    element.classList.add('card')
    if(item.Auth === "") {item.Auth = "Not Required"};
    element.innerHTML = `
    <h3 class='name animate__animated animate__backInUp' >${item.API}</h3>
    <h4 class='description animate__animated animate__backInUp'>${item.Description}</h4>  
    <h4 class='auth animate__animated animate__backInUp'>Auth Type: ${item.Auth}</h4>  
    <h4 class='cate animate__animated animate__backInUp'>Category: ${item.Category}</h4>
    <h4 class='link animate__animated animate__backInUp'><a target='blank' href="${item.Link}">View Docs > </a></h4>
    `
    result.appendChild(element)
    
        }, 1000)

})


    } catch (err) {
        console.error(err)
    }
}

async function putIn(res) {
   
    try {
        count.innerHTML = ''
        result.innerHTML = ''
        count.innerHTML = `
        Your Selection Contains <b>${res.count}</b> APIs  Find Them Below
        `

        res.entries.forEach((item) => {
            const element = document.createElement('div')
            element.classList.add('card','animate__animated','animate__backInUp')
            element.style.setProperty('--animate-duration', '0.5s');
            if(item.Auth === "") {item.Auth = "None Required"};
            element.innerHTML = `
            <h3 class='name animate__animated animate__backInUp'>${item.API}</h3>
            <h4 class='description animate__animated animate__backInUp'>${item.Description}</h4>  
            <h4 class='auth animate__animated animate__backInUp'>Auth Type: ${item.Auth}</h4>  
            <h4 class='link animate__animated animate__backInUp'><a target='blank' href="${item.Link}">View Docs > </a></h4>  
            `
            result.appendChild(element)
        })

        search.innerHTML = `
        <div>
        <div class="hero_text">
        Or Search for a particular API
        </div>
        <input type="text" id="input" placeholder="What Are you looking for">
        </div>
        `
    } catch (err) {
        console.error(err)
    }
}



function loopData(categories) {
    categories.forEach((data) => {
    //    selectData(data)

        const option = document.createElement('option')
        option.setAttribute('value', `${data}`)
        option.innerHTML = `
         ${data}
        `
        select.appendChild(option)
    })
}



select.addEventListener('change', getData)
getCategories() 


randomData()
randomData()
randomData()
