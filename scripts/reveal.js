window.addEventListener('scroll', reveal);

function reveal(){
    const revealElements = document.querySelectorAll('.reveal');

    for(let i = 0; i < revealElements.length; i++){
        let windowHeight = window.innerHeight;
        var elementTop = revealElements[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if(elementTop < windowHeight - revealPoint){
            revealElements[i].classList.add('active');
        }
        else {
            revealElements[i].classList.remove('active');
        }
    }
}