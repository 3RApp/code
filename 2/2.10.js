const ul = document.querySelector('ul');
const startLi = ul.firstElementChild;

for (let node = startLi; node !== null; node = node.nextElementSibling) {
    console.log(node);
}