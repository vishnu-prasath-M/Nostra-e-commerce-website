
var offertext = document.querySelector(".offer")
var offerclose =document.getElementById("offer-close")
offerclose.addEventListener("click",function(){
    offertext.style.display="none"
})

var sideNavMenu=document.getElementById("side-nav-activate")
var sidenavbar = document.querySelector(".side-nav")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-nav-close").addEventListener("click",()=>{
    document.querySelector(".side-nav").style.marginLeft = "-60%"
})



var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".slider-img")
var slidermargin=0



sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>100)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)





var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(like){
        
        
        if(like.target.src.indexOf("blackheart")>0)
        {
            
            like.target.src="Images/icons/redheart.png"
        }
        else{
            like.target.src="Images/icons/blackheart.png"
        }
    })
})

var productContainer = document.querySelector(".product-section")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

    search.addEventListener("keyup",function(){
        var enteredValue = event.target.value.toUpperCase()
        
        for(count = 0; count<productlist.length; count=count+1)
        {
            var productname = productlist[count].querySelector("h1").textContent

            if(productname.toUpperCase().indexOf(enteredValue)<0)
            {
                productlist[count].style.display="none"
            }
            else{
                productlist[count].style.display="block"
            }
        }
    })




//Collections