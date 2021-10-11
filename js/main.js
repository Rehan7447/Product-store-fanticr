let cart=[]
 let pageno=0

function Addcart(dataid){
   let data=dataid
   GetData(data)
    let id=document.getElementById('mybadge')
    let value=id.textContent
    let num=parseInt(value)
    num=num+1
    id.innerText=num
    if(num>=1){
        document.getElementById('mybadge').style.display="inline"
        
    }else{
        document.getElementById('mybadge').style.display="none"
    }
    
   
    
}
function ShowNotification(show){  
    let p=document.getElementById('popup')
    var link = "window.location.href='livraison.html'"
    var x="";
    for(let i=0;i<cart.length;i++){
        var im=cart[i].imgurl
        var pr=cart[i].price
        var h=cart[i].head
        console.log(pr)
        x=x+'<div class="notification-content">  <div class="row "> <div class="col-md-1 "></div>  ';
        x=x+'  <div class="col-md-8 col-sm-9 col-9 small-product"> <div class=" row d-flex align-items-center"><div class="col-md-3 col-sm-3 col-3 product-img">';
        x=x+' <img src="../img/Product Image 2 2.png" alt="" id="change-img" class="cart-image"> </div>';
        x=x+'<div class="col-md-9 col-sm-9 col-9 cart-dash" id="changedata">'+h+"("+(i+1)+")"+"<br>"+pr+'</div>'
        x=x+' </div> </div>'
        x=x+' <div class="col-md-2 col-sm-2 col-2 d-flex align-items-center del-img cart-del-img"><img src="../img/times-solid.svg" alt="" onclick="DeleteItem('+i+')"></div></div></div>';
        x=x+'</div></div>'
    }
    x=x+'<div class="row d-flex justify-content-center mt-4 mb-2"> <p class="o-placeholder" id="o-placeholder">Its empty, <a href="./colis.html">Buy Something</a> </p> <button type="button" class="btn btn-primary o-btn" id="commander-btn" onclick='+link+'>Commander</button></div>';
    document.getElementById("popup").innerHTML = x;
    if(cart.length>0){
        document.getElementById("commander-btn").style.visibility="visible";
        document.getElementById("o-placeholder").style.display="none";
    }
    if((p.style.display=="inline")&&(show==null)){
        p.style.display="none"
        p.style.right="0px"
    }else{
        p.style.display="inline"
        p.style.right="10px"
    }
    
   
}
function GetData(id){
if(id=="1"){
    var product = document.getElementById('product1');
    var myimg = product.getElementsByTagName('img')[0];
    var pr=product.getElementsByClassName('price')[0].innerHTML
    var head=product.getElementsByClassName('p-head')[0].innerHTML
    var imgurl=myimg.src
    // document.getElementById('change-img').src=imgurl
    // document.getElementById('changedata').innerHTML=head+"(1)"+pr
    cart.push({"imgurl":imgurl,"price":pr,"head":head})
    
}else if(id=="2"){
    var product = document.getElementById('product2');
    var myimg = product.getElementsByTagName('img')[0];
    var pr=product.getElementsByClassName('price')[0].innerHTML
    var head=product.getElementsByClassName('p-head')[0].innerHTML
    var imgurl=myimg.src
    // document.getElementById('change-img').src=imgurl
    // document.getElementById('changedata').innerHTML=head+"(2)"+pr
    cart.push({"imgurl":imgurl,"price":pr,"head":head})
}
}
function DeleteItem(myid){
    console.log(myid)
    let p=document.getElementById('popup')
    cart.splice(myid,1)
     let id=document.getElementById('mybadge')
    let value=id.textContent
    let num=parseInt(value)
    num=num-1
    id.innerText=num
    if(num>=1){
        document.getElementById('mybadge').style.display="inline"
        
    }else{
        document.getElementById('mybadge').style.display="none"
    }
    ShowNotification(1)
}
function AddNavbarData(){
    var x=""
    if(pageno==2){
        x=x+'<ul>  <li><a href="./acceuil.html">Acceuil</a></li>';
        x=x+' <li><a href="#" class="current">Colis</a></li><li><a href="./histoire.html">Histoire</a></li> <li><a href="./marche.html">Marché</a></li><li><a href="./contact.html" >Contact</a></li>'
       x=x+'</ul><div class="close-nav"><img src="../img/times-solid.svg" alt="" onclick="CloseNav('+2+')"> </div>'
       document.getElementById("mynav").innerHTML='<div>Hello</div>'
    }
}
function ShowNav(page){
    var x=""
    if(page==2){
        x=x+'<ul>  <li><a href="./acceuil.html">Acceuil</a></li>';
        x=x+' <li><a href="#" class="current">Colis</a></li><li><a href="./histoire.html">Histoire</a></li> <li><a href="./marche.html">Marché</a></li><li><a href="./contact.html" >Contact</a></li>'
       x=x+'</ul><div class="close-nav"><img src="../img/times-solid.svg" alt="" onclick="CloseNav('+2+')"> </div>'
    
    }else if(page==1){
        x=x+'<ul>  <li><a href="./acceuil.html " class="current">Acceuil</a></li>';
        x=x+' <li><a href="./colis.html" >Colis</a></li><li><a href="./histoire.html">Histoire</a></li> <li><a href="./marche.html">Marché</a></li><li><a href="./contact.html" >Contact</a></li>'
       x=x+'</ul><div class="close-nav"><img src="../img/times-solid.svg" alt="" onclick="CloseNav('+1+')"> </div>'
    
    }else if(page==3){
        x=x+'<ul>  <li><a href="./acceuil.html">Acceuil</a></li>';
        x=x+' <li><a href="./colis.html">Colis</a></li><li><a class="current" href="./histoire.html ">Histoire</a></li> <li><a href="./marche.html">Marché</a></li><li><a href="./contact.html" >Contact</a></li>'
       x=x+'</ul><div class="close-nav"><img src="../img/times-solid.svg" alt="" onclick="CloseNav('+3+')"> </div>'
    
    }else if(page==4){
        x=x+'<ul>  <li><a href="./acceuil.html">Acceuil</a></li>';
        x=x+' <li><a href="./colis.html">Colis</a></li><li><a href="./histoire.html">Histoire</a></li> <li><a class="current" href="./marche.html">Marché</a></li><li><a href="./contact.html" >Contact</a></li>'
       x=x+'</ul><div class="close-nav"><img src="../img/times-solid.svg" alt="" onclick="CloseNav('+4+')"> </div>'
    
    }else if(page==5){
        x=x+'<ul>  <li><a href="./acceuil.html">Acceuil</a></li>';
        x=x+' <li><a href="#" >Colis</a></li><li><a href="./histoire.html">Histoire</a></li> <li><a href="./marche.html">Marché</a></li><li><a href="./contact.html" class="current" >Contact</a></li>'
       x=x+'</ul><div class="close-nav"><img src="../img/times-solid.svg" alt="" onclick="CloseNav('+5+')"> </div>'
    
    }
    localStorage.setItem("myValue", x);
        window.location.href='navbar.html'
}
function CloseNav(page){
    if(page==2){
        window.location.href='colis.html'
    }else if(page==1){
        window.location.href='acceuil.html'
    }else if(page==3){
        window.location.href='histoire.html'
    }else if(page==4){
        window.location.href='marche.html'
    }else if(page==5){
        window.location.href='contact.html'
    }
}
