$("#form").on("submit",puttask)
$("#btn").on("click",puttask)
$("#btn2").on("click",savetasks)
let keys=Object.values(localStorage)
for(let k=0;k<keys.length;k++){
    let task=$("<li></li>")
    task.text(keys[k])
    let btn_dlt=$('<button type="button" class="dlt">delete</button>')
    task.append(btn_dlt)
    $("#list").append(task)
    btn_dlt.on("click",dlttask)
}
function puttask(evt){
    evt.preventDefault()
    let task=$("<li></li>")
    keys.push($("#task_input").val())
    task.text($("#task_input").val())
    $("#task_input").val("")
    let btn_dlt=$('<button type="button" class="dlt">delete</button>')
    task.append(btn_dlt)
    $("#list").append(task)
    btn_dlt.on("click",dlttask)
}
function dlttask(){
    let pr=$(this).parent()
    pr.remove()
    localStorage.removeItem(pr.text())
}
function savetasks(){
    for(let i=0;i<keys.length;i++){
        localStorage.setItem(keys[i]+"delete",keys[i])
    }
}