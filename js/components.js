class ProductCard extends HTMLElement {
    constructor(name,img,price) {
        super();
        this.name = name;
        this.img = img;
        this.price = price;
    }

    connectedCallback() {
        this.innerHTML = `<div id="name">
            ${this.name}
            </div>
            <img src ="${this.img}">
            <div id="price-holder">
            Цена: <span id="price">${this.price}</span> рублей
            </div>`;
    }
}

customElements.define("product-card",ProductCard);
