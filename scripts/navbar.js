const toggleBtn = document.querySelector('.toggle-btn');
const navbarUl = document.querySelector('navbar>ul');

toggleBtn.onclick = () => {
    navbarUl.classList.toggle('toggled');
}