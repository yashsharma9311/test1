let result = ""
let show = document.querySelector("#ans")
let opretion = ['+','*','-','/','%']
let press=(res)=>{
    if(opretion.includes(res)){
        if(opretion.includes(result.slice(-1))){
            result = result.slice(0 , -1)
        }
        else if (result === ""){
            return;
        }
    }
    result = result+res
    show.innerHTML = result
}

let answer=()=>{
   result = eval(result).toString()
   show.innerHTML = result

}

let clr=()=>{
    result = ""
    show.innerHTML = result
}
let del=()=>{
    result = result.slice(0,-1)
    show.innerHTML = result
}


let mode = () =>{
    let BC = document.querySelector("*")
    let TB = document.querySelector(".TBL")
    if(BC.style.backgroundColor ==='black'){
        BC.style.backgroundColor = ('whitesmoke')

    }
    else{
        BC.style.backgroundColor = ('black')
    }
    if(TB.style.backgroundColor ==='black'){
        TB.style.backgroundColor = ('whitesmoke')

    }
    else{
        TB.style.backgroundColor = ('black')
    }
}

// let show=()=>{
//     let inp1=document.querySelector("#inptext1").value
//     let inp2=document.querySelector("#inptext2").value

//     let show=document.querySelector("#show")

//     show.innerHTML=inp1+document.querySelector("#inptext").value
// }