$("#form").on("submit",puttask)
$("#btn").on("click",puttask)
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
    localStorage.setItem($("#task_input").val()+"delete",$("#task_input").val())
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