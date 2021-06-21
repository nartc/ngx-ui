import { Component } from '@angular/core';

@Component({
  selector: 'docs-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  buttonPromise?: Promise<unknown>;
  promises: Record<string, Promise<unknown>> = {};

  onClick(msg: string, targetId?: string) {
    console.log('Demo app click: ', msg);

    const buttonPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Success!');
        } else {
          reject('I fail you!');
        }
      }, 3000);
    });

    buttonPromise
      .then(() => {
        console.log('success');
      })
      .catch(() => {
        console.log('fail');
      });

    if (targetId) {
      this.promises[targetId] = buttonPromise;
    } else {
      this.buttonPromise = buttonPromise;
    }
  }
}
