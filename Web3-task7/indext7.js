let payload={
    title:"",
    body:"",
    userid:1
}
let form=document.getElementById("form")
let title=document.getElementById("title")
let body=document.getElementById("body")
let userid=document.getElementById("userid")
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(result){
    return result.json()
  })
  .then(function(result2){
    console.log(result2)
  });
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
.then(function(result){
  return result.json()
})
.then(function(result2){
  console.log(result2)
});

}
form.addEventListener("submit",info)



