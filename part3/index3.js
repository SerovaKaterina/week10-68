let offset = 0;
const slider = document.querySelector('.slider_img');

document.querySelector('.prev').addEventListener('click', function(){
    offset -= 254;
    if(offset > 508) {
        offset = 0;
    }
    slider.style.left = -offset + 'px'; 
});
document.querySelector('.next').addEventListener('click', function(){
    offset += 254;
    if(offset < 0) {
        offset = 508;
    }
    slider.style.left = -offset + 'px'; 
});