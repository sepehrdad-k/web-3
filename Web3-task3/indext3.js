let x = prompt("num")
let l=20
if(x>0 && x<=10){
    for(let i = 1;i<=x;i++){
        let div=document.createElement("div")
        div.style.width=l+"px"
        div.style.height=l+"px"
        div.style.border="3spx"
        div.style.borderColor="black"
        div.style.borderStyle="solid"
        div.style.backgroundColor="teal"
        document.body.append(div)
        l=l*2



    }
}
    else if(x>10){
        console.log("more than 10")
    }
    else{
        console.log("invalid")
    }
    console.log(document.body)