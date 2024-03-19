// import {ProductLibrary} from "./product.js"
// import { AdditionLibrary } from "./add.js";
// import { Facade} from "./facade.js";

import { Button } from "./button.js";
import { ButtonObserver } from "./buttonObserver.js"
export type data = {
  operacion:string;
}

/**
 * Descripción: Evento representa un evento
 * @param observer
 * @returns id
 */
export interface Event<T> {
  id: string,
  data: T
}

/**
 * Interface for observable classes
 */
export interface Observable<T> {
  subscribe(observer: Observer<T>, event: Event<T>): void;
  unsubscribe(observer: Observer<T>, event: Event<T>): void;
  notify(event: Event<T>): void;
}

/**
 * Interface for observer classes
 */
export interface Observer<T> {
  update(observable: Observable<T>, event: Event<T>): string|undefined;
}



// Client code
const myButton = new Button(0, 'myButton');
const firstButtonObserver = new ButtonObserver(0, 'firstButtonObserver');
const secondButtonObserver = new ButtonObserver(1, 'secondButtonObserver');
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const evento: Event<data> = {id:"raton", data:{operacion: "derecho"}}
const evento2: Event<data> = {id:"teclado", data:{operacion: "centro"}}


console.log('firstButtonObserver subscription');
myButton.subscribe(firstButtonObserver);

console.log('secondButtonObserver subscription');
myButton.subscribe(secondButtonObserver);

try {
  myButton.subscribe(secondButtonObserver);
} catch (error) {
  console.log('secondButtonObserver was already subscribed');
}

console.log('myButton left click');
myButton.notify(evento);

console.log('keyboard center click');
myButton.notify(evento2);



console.log('firstButtonObserver unsubscription');
myButton.unsubscribe(firstButtonObserver);

console.log('myButton right click');
myButton.notify(evento);

console.log('keyboard center click');
myButton.notify(evento2);

 
