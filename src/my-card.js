import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Josh Allen";
    this.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Josh_Allen_SEPT2021_%28cropped2%29.jpg/1200px-Josh_Allen_SEPT2021_%28cropped2%29.jpg";
    this.link = "https://codepen.io/NoahC570/pen/ZYzZqzW";
    this.description = "Josh Allen is the greatest QB to ever live."; 
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card {
        background-color: #4f2a06;
        width: 400px;
        text-align: center;
        padding: 15px;
        border-radius: 10px;
      }
      :host([fancy]) .card {
        background-color: red;
        border: 2px solid white;
        box-shadow: 10px 5px 5px blue;
        color: black;
      }
      .cardheader {
        color: yellow;
        margin: 10px 0;
        font-size: 30px;
        font-family: "Times New Roman", Times, serif;
      }
      p {
        color: yellow;
        margin: 10px;
        font-family: "Times New Roman", Times, serif;
      }
      img {
        width: 200px;
        border: 4px solid yellow;
      }
      .btn {
        color: #4f2a06;
        background-color: white;
        font-size: 15px;
        margin-top: 10px;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
      }
      .btn:hover {
        background-color: blue;
        color: white;
      }
    `;
  }
  
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
        <h1 class="cardheader">${this.title}</h1>
        <img src="${this.image}" alt="${this.title}" />
        
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
         <summary>Description</summary>
        <div>
       <slot>${this.description}</slot>
        </div>
      </details>
        <a href="${this.link}" target="_blank">
          <button class="btn"><em>Details</em></button>
        </a>
      </div>
    `;
  }
  

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      link: { type: String },
      description: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
} 

globalThis.customElements.define(MyCard.tag, MyCard);

