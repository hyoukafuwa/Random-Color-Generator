
const btn = document.getElementsByTagName('button')[0];

const setBg = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    btn.style.backgroundColor = "#" + randomColor;
    btn.style.color = "white";
    color.textContent = "#" + randomColor;
}

btn.addEventListener('click', setBg, false);
