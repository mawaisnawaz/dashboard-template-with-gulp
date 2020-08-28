   //WOW js
     new WOW().init();



$(document).ready(function() {
    if($('body').hasClass('light')){
        if($('.nextech').length){
            $('.nextech').attr('src', './img/white/nt.png');
        }
        if($('.excel').length){
            $('.excel').attr('src', './img/white/ex.png');
        }
        if($('.quickbook').length){
            $('.quickbook').attr('src', './img/white/qb.png');
        }
        if($('.csv').length){
            $('.csv').attr('src', './img/white/cs.png');
        }
        if($('.mainlogo').length){
            $('.mainlogo').attr('src', './img/white/logo-small.png');
        }

        if($('.loginLogo').length){
            $('.loginLogo').attr('src', './img/white/logo.png');
        }        
    }
});

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButton = document.querySelector("#open-button");

if(closeButton){
    closeButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    });    
}

if(openButton){
    openButton.addEventListener("click", function() {
        modal.classList.toggle("closed");
        modalOverlay.classList.toggle("closed");
    });    
}

$('.notifcationIcon').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, 
    hover: false, 
    gutter: 0, 
    belowOrigin: true, 
    alignment: 'left', 
    stopPropagation: false 
});


