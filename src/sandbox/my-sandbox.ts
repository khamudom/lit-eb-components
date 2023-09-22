import {html, css, LitElement, TemplateResult} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';
import {range} from 'lit/directives/range.js';

@customElement('my-sandbox')
export class MySandbox extends LitElement {
  @state()
  private fruits = new Set([
    'Mangosteen',
    'Dragonfruit',
    'Starfruit',
    'Jackfruit',
    'Guava',
  ]);

  @state()
  names = ['Chandler', 'Phoebe', 'Joey', 'Monica', 'Rachel', 'Ross'];

  @state()
  friends = ['Harry', 'Ron', 'Hermione'];

  @state()
  pets = [
    {name: 'Fluffy', type: 'cat'},
    {name: 'Fido', type: 'dog'},
    {name: 'Squawkers', type: 'parrot'},
  ];

  @state()
  includePets = true;

  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
    .container {
      display: block;
      width: 400px;
      height: 400px;
    }
    #board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      border: 2px solid #404040;
      box-sizing: border-box;
      height: 100%;
    }
    #board > div {
      padding: 2px;
    }
    .black {
      color: #ddd;
      background: black;
    }
    .white {
      color: gray;
      background: white;
    }
  `;

  override render() {
    // const listItems: TemplateResult[] = [];
    // TODO: populate templates with items to render.
    // this.friends.forEach((friend) => {
    //   listItems.push(html`<li>${friend}</li>`);
    // });
    // if (this.includePets) {
    //   this.pets.forEach((pet) => {
    //     listItems.push(html`<li>${pet.name} the ${pet.type}</li>`);
    //   });
    // }

    return html`
      <h1>Rendering lists with Lit</h1>
      <p>Using the map() directive</p>
      <ul>
        ${map(this.fruits, (fruit) => html`<li>${fruit}</li>`)}
      </ul>
      <p>A list of names that include the letter "e"</p>
      <p>Chandler, Phoebe, Joey, Monica, Rachel, Ross</p>
      <ul>
        ${this.names
          .filter((iname) => iname.match(/e/))
          .map((iname) => html`<li>${iname}</li>`)}
      </ul>
      <div>
        <h3>Building an array of renderables</h3>
        <p>
          The methods used in the previous steps are great when working with a
          single iterable as a source of data but sometimes the situation might
          call for a more imperative approach.
        </p>
        <p>
          Render a list item for each member but also include pets if
          includePets is true. The list item for the pet should include both the
          name and the species. Populate the listItems array conditionally based
          on the boolean state, as shown below.
        </p>
        <button @click=${() => this._togglePetVisibility()}>
          ${this.includePets ? 'Hide' : 'Show'} pets
        </button>
        <p>My magical friends</p>
        <ul>
          <!-- TODO: Render templates. -->
          ${this.generateListItems()}
        </ul>
      </div>
      <div>
        <h3>The range() directive</h3>
        <p>
          Creating a list is also useful for rendering repeated patterns like a
          game board, for instance.
        </p>
        <p>
          The range() directive provides a simple way of creating an iterable of
          incrementing integers which can be used with the map() directive to
          programmatically render a list of templates in a convenient manner.
          Nesting this allows you to create multi-dimensional patterns.
        </p>
        <p>
          The example component already has some styles defined to create an 8
          by 8 board to be filled with div's whose background color will be
          determined by adding classes "black" or "white".
        </p>
        <p>Let's play a game!</p>
        <div class="container">
          <div id="board">
            <!-- TODO: Place squares here. -->
            ${map(range(8), (row) =>
              map(
                range(8),
                (col) =>
                  html`
                    <div class="${getColor(row, col)}">
                      ${getLabel(row, col)}
                    </div>
                  `
              )
            )}
          </div>
        </div>
      </div>
    `;
  }

  // Refactoring the code to abstract the logic out of the render() method into its own private method that returns the array of templates.
  private generateListItems() {
    const listItems: TemplateResult[] = [];
    this.friends.forEach((friend) => {
      listItems.push(html`<li>${friend}</li>`);
    });
    if (this.includePets) {
      this.pets.forEach((pet) => {
        listItems.push(html`<li>${pet.name} the ${pet.type}</li>`);
      });
    }
    return listItems;
  }

  private _togglePetVisibility() {
    this.includePets = !this.includePets;
  }
}

const getColor = (row: number, col: number) =>
  (row + col) % 2 ? 'white' : 'black';

const getLabel = (row: number, col: number) =>
  `${String.fromCharCode(65 + col)}${8 - row}`;

declare global {
  interface HTMLElementTagNameMap {
    'my-sandbox': MySandbox;
  }
}
