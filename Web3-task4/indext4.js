let myform=document.getElementById("forms")
let input=document.getElementById("mytask")
myform.onsubmit=function(d){
    d.preventDefault()
    let mylist=document.getElementById("mylist")
    let task=document.createElement("li")
    task.innerText=input.value
    let btn=document.createElement("button")
    btn.innerText="X"
    task.append(btn)
    mylist.append(task)
    btn.onclick=function(c){
       btn.parentElement.remove() 
    }
}