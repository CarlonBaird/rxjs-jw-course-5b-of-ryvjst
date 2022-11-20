import { Observable, of } from 'rxjs';

//So, the 'of' function returns an Observable, so we can subscribe to it.
// of('Alice', 'Ben', 'Charlie').subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

//the above implementation is the same as follows:
// const names$ = new Observable<string>((subscriber) => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// names$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log('Completed'),
// });

function myOf(...args: string[]): Observable<string> {
  return new Observable<string>((subsriber) => {
    args.forEach((value) => subsriber.next(value));
    subsriber.complete();
  });
}

myOf('Alice', 'Ben', 'Charlie').subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});
