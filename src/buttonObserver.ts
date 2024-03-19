
import { Observer, data } from "./index.js";
import { Observable, Event } from "./index.js";
import { Button } from "./button.js";
/**
 * Descripción: clase ButtonObserver
 * @param id
 * @param name
 */
export class ButtonObserver<T> implements Observer<data> {
  constructor(
    private id: number,
    private name: string,
  ) {}
 
  /**
 * Descripción: update actualiza dependiendo del evento pasado por parametro
 * @param observer
 * @returns resutl que devuelve el 
 */
  update(observable: Observable<data>, event: Event<data>): string | undefined {
    let result: string = "";
    if (observable instanceof Button) {
      switch (event.data.operacion) {
        case "derecho":
          if (event.id == "teclado") {
            console.log(
              `I am a ButtonObserver called ${this.name} ` +
                `and I have observed that Button ${observable.getName()} ` +
                `was rigth-clicked with the keyboard`,
            );
            return (
              `I am a ButtonObserver called ${this.name} ` +
              `and I have observed that Button ${observable.getName()} ` +
              `was rigth-clicked with the keyboard`
            );
          }
          if (event.id == "raton") {
            console.log(
              `I am a ButtonObserver called ${this.name} ` +
                `and I have observed that Button ${observable.getName()} ` +
                `was rigth-clicked with the mouse`,
            );
            return (
              `I am a ButtonObserver called ${this.name} ` +
              `and I have observed that Button ${observable.getName()} ` +
              `was rigth-clicked with the keyboard`
            );
          }
          return (
            `I am a ButtonObserver called ${this.name} ` +
            `and I have observed that Button ${observable.getName()} ` +
            `was rigth-clicked with the keyboard`
          );
          break;
        case "izquierdo":
          if (event.id == "teclado") {
            console.log(
              `I am a ButtonObserver called ${this.name} ` +
                `and I have observed that Button ${observable.getName()} ` +
                `was left-clicked with the keyboard`,
            );
            return (
              `I am a ButtonObserver called ${this.name} ` +
              `and I have observed that Button ${observable.getName()} ` +
              `was rigth-clicked with the keyboard`
            );
          }
          if (event.id == "raton") {
            console.log(
              `I am a ButtonObserver called ${this.name} ` +
                `and I have observed that Button ${observable.getName()} ` +
                `was left-clicked with the mouse`,
            );
            return (
              `I am a ButtonObserver called ${this.name} ` +
              `and I have observed that Button ${observable.getName()} ` +
              `was rigth-clicked with the keyboard`
            );
          }
          return (
            `I am a ButtonObserver called ${this.name} ` +
            `and I have observed that Button ${observable.getName()} ` +
            `was rigth-clicked with the keyboard`
          );
          break;
        case "centro":
          if (event.id == "teclado") {
            console.log(
              `I am a ButtonObserver called ${this.name} ` +
                `and I have observed that Button ${observable.getName()} ` +
                `was center-clicked with the keyboard`,
            );
            
           result = 
              `I am a ButtonObserver called ${this.name} ` +
              `and I have observed that Button ${observable.getName()} ` +
              `was center-clicked with the keyboard`
            ;
          }
          if (event.id == "raton") {
            console.log(
              `I am a ButtonObserver called ${this.name} ` +
                `and I have observed that Button ${observable.getName()} ` +
                `was center-clicked with the mouse`,
            );
            return (
              `I am a ButtonObserver called ${this.name} ` +
              `and I have observed that Button ${observable.getName()} ` +
              `was rigth-clicked with the keyboard`
            );
          }
          return (
            `I am a ButtonObserver called ${this.name} ` +
            `and I have observed that Button ${observable.getName()} ` +
            `was rigth-clicked with the keyboard`
          );
          break;
          return (
            `I am a ButtonObserver called ${this.name} ` +
            `and I have observed that Button  ` +
            `was rigth-clicked with the keyboard`
          );
      }
    }
    return result;
  }
}
