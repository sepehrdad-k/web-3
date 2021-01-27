const form=document.getElementById("myform")
let input=document.getElementById("myurl")
let mode=document.getElementById("options")
//const button=document.getElementById("btn")
function myevent(evt){
    evt.preventDefault()
    if(mode.value==="refresh"){
    location.reload()
    }
    else{
       location.assign(input.value)
    }
}
form.addEventListener("submit",myevent)