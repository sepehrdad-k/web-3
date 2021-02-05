let form=document.getElementById("form")
let title=document.getElementById("title")
let body=document.getElementById("body")
let userid=document.getElementById("userid")
let table=document.getElementById("tb")
fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(result){
    return result.json()
  })
  .then(function(result2){
    for(let i=0;i<result2.length;i++){
      let row=document.createElement("tr")
      let user_id=document.createElement("td")
      user_id.innerText=result2[i].userId
      row.append(user_id)
      let title_id=document.createElement("td")
      title_id.setAttribute("class","number")
      title_id.innerText=result2[i].id
      row.append(title_id)
      let body_title=document.createElement("td")
      body_title.innerText=result2[i].title
      row.append(body_title)
      let options=document.createElement("td")
      let opt_edit=document.createElement("button")
      opt_edit.innerText="edit"
      options.append(opt_edit)
      let opt_dlt=document.createElement("button")
      opt_dlt.innerText="delete"
      options.append(opt_dlt)
      row.append(options)
      table.append(row)
      opt_dlt.onclick=function(evt){
        let pr=opt_dlt.parentElement
        let pr2=pr.parentElement
        let pr3=pr2.getElementsByClassName("number")
        console.log(pr3)
      }
    }

  })
function info(evt){
    evt.preventDefault()
    let payload={
      title:title.value,
      body:body.value,
      userid:userid.value
  }
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




