let payload={
    title:"",
    body:"",
    userid:1
}
let form=document.getElementById("form")
let title=document.getElementById("title")
let body=document.getElementById("body")
let userid=document.getElementById("userid")
function info(evt){
    evt.preventDefault()
    payload.title=title.value
    payload.body=body.value
    payload.userid=userid.value
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(payload),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then((response) => response.json())
  .then((json) => console.log(json));
}
form.addEventListener("submit",info)



