const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');
const contactsSection = document.getElementById('contacts');
const navbarUl = document.querySelector('navbar>ul');

const navHome = document.getElementById('navHome');
const navAbout = document.getElementById('navAbout');
const navContacts = document.getElementById('navContacts');

navHome.onclick = () => GoToSection('home');
navAbout.onclick = () => GoToSection('about');
navContacts.onclick = () => GoToSection('contacts');

function GoToSection(sectionId){
    const yValue = document.getElementById(sectionId).getBoundingClientRect().top + document.documentElement.scrollTop - 20;
    navbarUl.classList.toggle('toggled'); 
    scrollTo(0, yValue);
}