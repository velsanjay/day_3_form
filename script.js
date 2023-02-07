// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     parent=document.querySelector(".form table")
//     row_table=document.createElement('tr')
//     arr=['Firstname','Lastname','email','Password','Mobile']

//     for(let i of arr){
//         data=document.createElement('td')
//         data_1=document.querySelector(`[placeholder*=${i}]`)
//         data.innerText=data_1.value
//         row_table.append(data)
//         // data_1.value=''
//     }
// parent.append(row_table)
// })
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    parent = document.querySelector('.user-data table')

    row_table = document.createElement('tr')

    arrData = ["First","Last","E-mail","Password","Mobile"]

    for(let i of arrData){
        fN = document.createElement('td')
        fN_data = document.querySelector(`[placeholder*=${i}]`)
        fN.innerText = fN_data.value
        row_table.append(fN)
        fN_data.value = ''
    }
    parent.append(row_table)



})




