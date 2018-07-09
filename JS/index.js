document.addEventListener('DOMContentLoaded',function (){
    let wrapper =document.getElementById('wrapper');
    let toplayer =wrapper.querySelector('.top');
    let handle= wrapper.querySelector('.handle');
    let skew =999;
    let delta=0;
 
    wrapper.addEventListener('mousemove',function(e){
        delta=(e.clientX-window.innerWidth/2)*0.5;
        handle.style.left =  e.clientX+ delta +'px';
        toplayer.style.width = e.clientX+skew+ delta +'px';
    
});

});
