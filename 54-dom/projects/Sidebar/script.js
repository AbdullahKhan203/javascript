function toogleSidebar(){
    document.querySelector('.left-sidebar').classList.toggle('toogle-sidebar')
    document.querySelector('.right-pages').classList.toggle('toogle-right-pages')
    console.log(document.querySelector('.img-icon').attributes)
    document.querySelector('.img-icon').attributes[1].nodeValue='./assets/images/right-arrow.png'
}