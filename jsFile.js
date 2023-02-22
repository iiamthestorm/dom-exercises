const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

const p = document.createElement('p');
p.textContent = "Hey I'm red!";
p.style.color = "red";

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

const content2 = document.createElement('div');
content2.classList.add('content2');
content2.style.cssText = 'border: solid black; background: pink;';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(content2);

content2.appendChild(h1);
content2.appendChild(p2);