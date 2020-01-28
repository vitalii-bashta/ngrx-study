import { Component } from '@angular/core';

@Component({
  selector: 'codelyzer',
  template: `
    <h1>Hello {{ name }}!</h1>
  `
})
class Codelyzer {
  name: string = 'World';

  ngOnInit() {
	console.log('Initialized');
  }
}
