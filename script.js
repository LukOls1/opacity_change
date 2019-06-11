var pasek = document.querySelector('input');
suwak.addEventListener('change', changeValue)
suwak.addEventListener('mousemove', changeValue)
function changeValue() {
    var percent = document.querySelector('span');
    percent.textContent = this.value;
    document.documentElement.style.setProperty('--light', this.value /100);
}   document.documentElement.style.setProperty('--glow', this.value /100);
