var Email = document.getElementById('Email');
var Password = document.getElementById('password');
var RePassword = document.getElementById('RePassword');
var FirstName = document.getElementById('FirstName');
var LastName = document.getElementById('LastName');
var Male = document.getElementById('Male');
var Female = document.getElementById('Female');
var Terms = document.getElementById('Check1');
var sear = document.getElementById('sear')
var Res = 0;
var MyHttps = new XMLHttpRequest();
MyHttps.open(`GET`,`https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=4533b57921c3449fa65829b267c4e5d0`);
MyHttps.send();

console.log(sear.value)

MyHttps.addEventListener('readystatechange',function(){
if(MyHttps.readyState == 4){
    var Response =JSON.parse(MyHttps.response).articles
    Res = Response
    console.log(Response);
    display(Response)
}
})
function display(Response){
    var box =``
    for(var i=0 ; i<Response.length;i++){
        Response[i].description !== null ?
            box += `<div class="col-md-4">
        <div class="post bg-light p-1 rounded overflow-hidden">
        <img class='w-100' src='${Response[i].urlToImage}'/>
            <h1>${Response[i].title.split(' ').splice(0,3).join(' ')}</h1>
            <p>${Response[i].description.split(' ').splice(0,9).join(' ')}</p>
            <a class='btn btn-outline-info w-100 my-1' href='${Response[i].url}'>Show More</a>
            
        </div>
    </div>`:''       
    }
    document.getElementById('showdata').innerHTML = box
}


function SearchNews(input){
    var check=false
    var box =``
    for(var i=0;i<Res.length;i++){
        if(Res[i].title.toLowerCase().includes(input.toLowerCase())==true){
        box+= `<div class="col-md-4">
        <div class="post bg-light p-1 rounded overflow-hidden">
        <img class='w-100' src='${Res[i].urlToImage}'/>
            <h1>${Res[i].title.split(' ').splice(0,3).join(' ')}</h1>
            <p>${Res[i].description.split(' ').splice(0,9).join(' ')}</p>
            <a class='btn btn-outline-info w-100 my-1' href='${Res[i].url}'>Show More</a>
            
        </div>
    </div>`      
        document.getElementById('error').innerHTML =''
        check=true
    }
    if(sear.value == ''){
        display(Res)
    }
}
    document.getElementById('showdata').innerHTML =box
}



function verify(){
    if(validationEmailName() == true && validationPassword() == true && validationRePassword() == true && validationFirstName() == true && validationLastName() == true && validationTerms() == true){
    document.getElementById('error').innerHTML=``
    console.log('success')
    document.location.href="posts.html"
    }
    else{
        console.log('Something went wrong') 
    }
}

function validationEmailName(){
    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(regx.test(Email.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML=`<div class="alert alert-danger">Email Invalid...!</div>`
    }

}
function validationPassword(){
    var regx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if(regx.test(Password.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML=`<div class="alert alert-danger">Password Invalid must be 6 to 16 characters...!</div>`
    }
}
function validationRePassword(){
    if(Password.value == RePassword.value){
        return true
    }
    else{
        document.getElementById('error').innerHTML=`<div class="alert alert-danger">Password Must Match</div>`
    }
}
function validationFirstName(){
    var regx = /^[a-zA-Z0-9]{3,16}$/
    if(regx.test(FirstName.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML=`<div class="alert alert-danger">First Name must be 3 to 16 characters and cannot contain special characters...!</div>`
    }
}
function validationLastName(){
    var regx = /^[a-zA-Z0-9]{3,16}$/
    if(regx.test(LastName.value)==true){
        return true
    }
    else{
        document.getElementById('error').innerHTML=`<div class="alert alert-danger">Last Name must be 3 to 16 characters and cannot contain special characters...!</div>`
    }
}

// function validationRadio(){
// if(Male.checked || Female.checked ){
//     return true
// }
// else{
//     document.getElementById('error').innerHTML=`<div class="alert alert-danger">Must Check a Gender...!</div>`
// }
// }
function validationTerms(){
    if(Terms.checked == true){
        return true
    }
    else{
        document.getElementById('error').innerHTML=`<div class="alert alert-danger">Must Agree on the Terms...!</div>`
    }
}

