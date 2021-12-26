import { Observable, BehaviorSubject } from 'rxjs';

export class Store<T> {

    private state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this.state$ = new BehaviorSubject(initialState);
    }

    protected getValue(): T {
        return this.state$.getValue();
    }

    public getState(): Observable<T> {
        return this.state$.asObservable();
    }

    public setState(nextState: T): void {
        this.state$.next(nextState);
    }
}