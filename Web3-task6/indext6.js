let title=document.getElementById("title")
if(window.navigator.appVersion.includes("Chrome")===true){
    title.innerText="this is chrome"
}
else if(window.navigator.userAgent.includes("Firefox")===true){
    title.innerText="this is firefox"
}
else{
    title.innerText="browser not recognised"
}
let myform=document.getElementById("forms")
let input=document.getElementById("mytask")
let mylist=document.getElementById("mylist")
let save=document.getElementById("save")
let keys=[]
myform.onsubmit=function(d){
    d.preventDefault()
    let task=document.createElement("li")
    task.innerText=input.value
    keys.push(input.value)
    let btn=document.createElement("button")
    btn.innerText="X"
    task.append(btn)
    mylist.append(task)
    btn.onclick=function(c){
       btn.parentElement.remove() 
    }
}
save.onclick=function(){
    for(let i=0;i<keys.length;i++){
    localStorage.setItem("key"+i,keys[i])
    }

}
for( let k=0;k<localStorage.length;k++){
  let task2=document.createElement("li")
    task2.innerText=localStorage.getItem("key"+k)
    let btn2=document.createElement("button")
    btn2.innerText="X"
    task2.append(btn2)
    mylist.append(task2)
    btn2.onclick=function(c){
    btn2.parentElement.remove()
     
    }

}
