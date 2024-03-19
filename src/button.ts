
import {Observable, Observer, Event} from './index.js'

/**
 * Descripción: La clase Button recibe de parametro T
 * @param  Observer recibe los observadores
 */
export class Button<T> implements Observable<T> {
  private observers: Observer<T>[] = [];
  constructor(private id: number, private name: string) {
  }
  /**
 * Descripción: de getId recibe el id correpondiente
 * @returns id
 */
  getId() {
    return this.id;
  }
  /**
 * Descripción: de getname recibe el name correpondiente
 * @returns id
 */
  getName() {
    return this.name;
  }

/**
 * Descripción: de suscribe mete e los observadores denetri
 * @param observer
 * @returns id
 */
  subscribe(observer: Observer<T>) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }
/**
 * Descripción: de suscribe mete e los observadores denetri
 * @param observer
 * @returns id
 */
  unsubscribe(observer: Observer<T>) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }
/**
 * Descripción: de notify
 * @param event
 * @returns 
 */
  notify(event: Event<T>) {
    this.observers.forEach((observer) => observer.update(this, event) );
  }

}
