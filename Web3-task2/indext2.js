let x=prompt("jaygasht")
let i = 2
let arr=[0,1]
for(i;i<=x-1;i++){
    arr[i]=Number(arr[i-1])+Number(arr[i-2])
}
console.log(arr)
console.log(arr[x-1])