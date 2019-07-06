import { State } from './state.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/operators';
import { Injectable } from '@angular/core';

const state: State = {
    cities: undefined,
    forecast: undefined,
    selectedCity: undefined,
    errors: undefined
}

@Injectable({
    providedIn: 'root'
})
export class Store {
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(
        distinctUntilChanged()
    );

    value(): State {
        return this.subject.value;
    }

    set(name: string, state: any): void {
        this.subject.next(
            {
                ...this.value,
                [name]: state
            } as State
        )
    }

    setDeep(name: string, path: string, state: any): void {
        const newvalue = {
            ...this.subject.value[name],
            [path]: state
        }
        this.subject.next(
            {
                ...this.subject.value,
                [name]: newvalue
            } as State
        )
    }

    select<T>(...name: string[]): Observable<T> {
        return this.store.pipe(
            pluck(...name)
        );
    }
}