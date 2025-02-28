var ranger=document.getElementById("ranger");
var output=document.getElementById("length");
var length=10;
ranger.value=10;
output.innerHTML=ranger.value;

ranger.oninput = function() {
    output.innerHTML = this.value;
    length=this.value;
  }

function getrandominteger(min,max){
    return parseInt(Math.random()*(max-min)+min);
}


function getrandomupper(){
    let str=String.fromCharCode(getrandominteger(65,90));
    return str;
}

function getrandomlower(){
    let str=String.fromCharCode(getrandominteger(97,122));
    return str;
}

function getrandomnumber(){
    return getrandominteger(0,9);
}

function getrandomsymbol(){
    let symbol=['!','@','#','$','&','*','-','_'];
    return symbol[getrandominteger(0,8)];
}

var lowercase=document.getElementById("lower");
var uppercase=document.getElementById("upper");
var number=document.getElementById("number");
var symbol=document.getElementById("symbol");

var count=0;

function checklower(){
if(lowercase.checked)
    count+=1;

else{
    if(count>0)
    count--;
}
check=count;
console.log(count);
}
    
function checkupper(){
if(uppercase.checked){
    count+=1;
}

else{
    if(count>0)
    count-=1;
}
check=count;
console.log(count);
}
    
function checknumber(){
if(number.checked){
    count+=1;
}

else{
    if(count>0)
    count-=1;
}
check=count;
console.log(count);
}

function checksymbol(){
if(symbol.checked){
    count+=1;
}

else{
    if(count>0)
    count-=1;
}
check=count;
console.log(count);
}

function shuffle(word){
    let temp,x='';
    shuffledlist=word.split('');

    for(let i=0;i<length;i++){
        let a=getrandominteger(0,length)
        temp=shuffledlist[i];
        shuffledlist[i]=shuffledlist[a];
        shuffledlist[a]=temp;
        }

    for(let i=0;i<length;i++)
    x=x+shuffledlist[i];

    return x;
}

    var strength=document.querySelector("#strength");

function checksecurity(){
    if(check>2 && length>10){
        strength.setAttribute("style","background-color:rgb(67, 250, 26); box-shadow:0px 0px 20px rgb(67, 250, 26)");
    }

    else if((check>=1 && check<=2 && length>=6) || (check>2 && length>=5 && length<=10)){
        strength.setAttribute("style","background-color:rgba(244, 248, 252, 0.969); box-shadow:0px 0px 20px rgba(244, 248, 252, 0.969)");  
    }

    else{
        strength.setAttribute("style","background-color:rgb(255,0,0); box-shadow:0px 0px 20px rgb(255,0,0)");  
    
    }
}

var password='';
function getpassword(){
    password='';
    count=check;
    
    
    let limit_decider=length-count+1;
    let random_limit=0;

    if(lowercase.checked){
        random_limit=getrandominteger(1,limit_decider+1);
        if(count==1)
            random_limit=limit_decider;
    
        for(let i=0;i<random_limit;i++){
            password=password+getrandomlower();
        }
        limit_decider=limit_decider+1-random_limit;
        
        if(count>0)
        count--;
    
        console.log(password);
        console.log(random_limit);
    }

    if(uppercase.checked){
        random_limit=getrandominteger(1,limit_decider);
        if(count==1)
            random_limit=limit_decider;
            
        
        for(let i=0;i<random_limit;i++){
            password=password+getrandomupper();
        }
        
        limit_decider=limit_decider+1-random_limit;
        
        if(count>0)
        count--;
        console.log(password);
        console.log(random_limit);
    }

    if(number.checked){
        random_limit=getrandominteger(1,limit_decider);
        if(count==1)
            random_limit=limit_decider;
           
        
        for(let i=0;i<random_limit;i++){
            let num=String.fromCharCode(getrandomnumber()+48);
            password=password+num;
        }
        
        limit_decider=limit_decider+1-random_limit;
        if(count>0)
        count--;
        console.log(password);
        console.log(random_limit);
    }

    if(symbol.checked){
        random_limit=getrandominteger(1,limit_decider);
        if(count==1)
            random_limit=limit_decider;
        
        
        for(let i=0;i<random_limit;i++){
            password=password+getrandomsymbol();
        }

        limit_decider=limit_decider+1-random_limit;
        if(count>0)
        count--;
        console.log(password);
        console.log(random_limit);
    }

    count=check;

    password=shuffle(password);

    let result=document.querySelector("#generator");
    result.innerHTML=password;

    checksecurity();
}

function copied(){
    var txt=document.querySelector("#copytext");
    txt.classList.replace('scale-0','scale-1');
    navigator.clipboard.writeText(password);
    setTimeout(function(){
        txt.classList.replace('scale-1','scale-0');
    },3000); 
}