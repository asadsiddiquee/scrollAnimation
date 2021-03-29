const boxes =document.querySelectorAll('.box')

window.addEventListener('scroll',checkContent)

checkContent()
function checkContent(){
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(content =>{
        const ContentTop = content.getBoundingClientRect().top
        if(ContentTop<triggerBottom){
            content.classList.add('show')
        }else{
            content.classList.remove('show')
        }
    })
}