/**
 * Store is the central data store for state management.
 */

import { State } from "./state.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { pluck, distinctUntilChanged } from "rxjs/operators";
import { Injectable } from "@angular/core";

const state: State = {
  cities: undefined,
  forecast: undefined,
  selectedCity: undefined,
  errors: undefined
};

@Injectable({
  providedIn: "root"
})
export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  /**
   * @description returns the subject value where ever required
   */
  value(): State {
    return this.subject.value;
  }

  /**
   * @description this function will receive the path value and its state
   * and push in the subject with new immutable object
   * @param name
   * @param state
   */
  set(name: string, state: any): void {
    this.subject.next({
      ...this.value,
      [name]: state
    } as State);
  }

  /**
   * @description this function will receive the path values and its state
   * and push in the subject with new internal immutable objects
   * @param name
   * @param state
   */
  setDeep(name: string, path: string, state: any): void {
    const newvalue = {
      ...this.subject.value[name],
      [path]: state
    };
    this.subject.next({
      ...this.subject.value,
      [name]: newvalue
    } as State);
  }

  /**
   * @description this funtion will return a part of data store
   * when a path name is passed.
   * @param name: string[]
   * @returns It will return an Observable of same class which is passed.
   */
  select<T>(...name: string[]): Observable<T> {
    return this.store.pipe(pluck(...name));
  }
}
