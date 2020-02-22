class JsonPlaceholder extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // this.innerText = 0;

    }

    disconnectedCallback() {

    }

    static get observedAttributes() {
        return ['valСhangre'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

        fetch(`https://jsonplaceholder.typicode.com/posts/${newValue}`)
            .then(resp => resp.json(),
                error => alert("не удалось получить данные"))
            .then(resp => draw(resp),
                error => alert("не удалось распарсить json"));
    }




}

customElements.define("json-placeholder", JsonPlaceholder)


let jsonBtn = document.getElementById('jsonBtn');

jsonBtn.addEventListener('click', () => {
    document.querySelector('json-placeholder').innerText++;
    document.querySelector('json-placeholder').setAttribute('valСhangre', document.querySelector('json-placeholder').innerText);
});



function draw(elems) {
    console.log(elems);
    document.getElementById('root').innerHTML = "";
    let elemBox = document.createElement('div');
    for (let key in elems) {
        let em = document.createElement('p');
        em.innerHTML = `<b>${key}<b> : ${elems[key]}`;
        elemBox.appendChild(em);
    }
    document.getElementById('root').appendChild(elemBox);

}