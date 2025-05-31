let inputslider=document.getElementById("slider");
let slidervalue=document.getElementById("slider_value");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let symbols=document.getElementById("symbols");
let numbers=document.getElementById("numbers");
let btn=document.getElementById("btn");
let passbox=document.getElementById("passbox");
let copyicon=document.getElementById("copy")

slidervalue.textContent= inputslider.value;
inputslider.addEventListener("input",()=>{
    slidervalue.textContent= inputslider.value;
})
btn.addEventListener("click",()=>{
    passbox.value=generatepass();
});

let lowerchar="abcdefghijklmnopqrstuvwxyz"
let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let all_numbers="0123456789"
let all_symbols="~!@#$%^&*"

function generatepass(){
    let genpass="";
    let all_char="";
    all_char+= lowercase.checked ? lowerchar : "";
    all_char+= uppercase.checked ? upperchar : "";
    all_char+= symbols.checked ? all_symbols : "";
    all_char+= numbers.checked ? all_numbers : "";

    if(all_char.length==0){
        return "";
    }

    let i=1;
    while(i <=inputslider.value){
    genpass+=all_char.charAt(Math.floor(Math.random()*all_char.length));
    i++;
    }
    return genpass;
}
copyicon.addEventListener("click", ()=>{
    if(passbox.value != "" && passbox.value.length >=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";
        copyicon.title = "Password Copied";
        setTimeout(() => {
        copyicon.innerText="content_copy";
        copyicon.title="";
    }, 3000);
}
})