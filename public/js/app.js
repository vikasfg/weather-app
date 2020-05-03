//import { response } from "express"

console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })

// })



// fetch('http://localhost:3000/weather?address=delhi').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })

// })

const weatherForm = document.querySelector('form')
const searelement = document.querySelector('input')
const msgone      = document.querySelector('#msg-one')
const msgtwo      = document.querySelector('#msg-two')




weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    msgone.textContent = 'Loading....'
    msgtwo.textContent = ''
    const location = searelement.value
    fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
             msgone.textContent = data.error

            }
            else{
            msgone.textContent = data.forecast
            msgtwo.textContent = data.data

            }
            console.log(data)
        })
    })
    console.log(location)
})