const emailAddress = document.getElementById('emailAddress');
const clickToCopy = document.getElementById('clickToCopy');

emailAddress.onclick = () => {
    let mail = emailAddress.innerText;
    navigator.clipboard.writeText(mail);
    clickToCopy.innerText = "Copiato";

    setTimeout(() => {
        clickToCopy.innerText = "Premi per copiare";
    }, 1400)
}