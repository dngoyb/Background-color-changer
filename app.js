const btn = document.querySelector('button');
const bg = document.querySelector('body');
const h2 = document.querySelector('h2');

btn.addEventListener('click', (e) => {
    const color = ` #${generateColor()}`;
    h2.innerHTML = `Background Color : <span >${color}</span>`;
    bg.style.backgroundColor = color;
});

const generateColor = () => {
    let list = '39a76b2d5c0418ef'.split('');
    let hexaColor = '';

    list = list.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 6; i++) {
        hexaColor += `${list[i]}`;
    }
    return hexaColor;
};
