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
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .card.toggled {
      background-color: orange;
      color: blue;
      }

            .card {
        background-color: #4f2a06;
        width: 400px;
        text-align: center;
      }
      .cardheader {
        color: yellow;
        margin: 10px 0px 10px 0px;
        font-size: 40px;
        font-family: "Times New Roman", Times, serif;
      }
      p {
        color: yellow;
        margin: 10px 25px 10px 25px;
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
        margin: 0px 0px 5px 0px;
      }
      .btn:focus,
      .btn:hover {
        background-color: blue;
        color: white;
      }
    `;
  }

  render() {
    return html`
    <div id = "cardlist">
      <div class="card">
        <h1 class="cardheader"><b>${this.title}</b></h1>
          <img src=${this.image} alt=${this.title} />
        <p>Josh Allen is the greatest QB to ever live.</p>
        <a href=${this.link} target="_blank">
          <button class="btn"><em>Details</em></button>
        </a>
      </div>
    </div>`;
  }

    static get properties() {
      return {
        title: { type: String },
        image: { type: String },
        link: { type: String},
      };
    }
  }

globalThis.customElements.define(MyCard.tag, MyCard);
