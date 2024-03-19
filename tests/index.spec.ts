import "mocha";
import { expect } from "chai";
import { Button } from "../src/button.js";
import { ButtonObserver } from "../src/buttonObserver.js"
import {Event, data} from '../src/index.js'

describe("Pruebas sobre Facade ", () => {
  it("operaciones con AddLibrary y PowLibrary", () => {
    // Client code
    const myButton = new Button(0, "myButton");
    const firstButtonObserver = new ButtonObserver(0, "firstButtonObserver");
    const secondButtonObserver = new ButtonObserver(1, "secondButtonObserver");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const evento: Event<data> = { id: "raton", data: { operacion: "derecho" } };
    const evento2: Event<data> = {
      id: "teclado",
      data: { operacion: "centro" },
    };

    console.log("firstButtonObserver subscription");
    myButton.subscribe(firstButtonObserver);

    console.log("secondButtonObserver subscription");
    myButton.subscribe(secondButtonObserver);

    try {
      myButton.subscribe(secondButtonObserver);
    } catch (error) {
      console.log("secondButtonObserver was already subscribed");
    }

    console.log("myButton left click");
    myButton.notify(evento);

    console.log("keyboard center click");
    myButton.notify(evento2);

    console.log("firstButtonObserver unsubscription");
    myButton.unsubscribe(firstButtonObserver);

    console.log("myButton right click");
    myButton.notify(evento);

    console.log("keyboard center click");
    expect(myButton.notify(evento2)).to.be.eql('I am a ButtonObserver called secondButtonObserver and I have observed that Button myButton was center-clicked with the keyboard');
  });
});
