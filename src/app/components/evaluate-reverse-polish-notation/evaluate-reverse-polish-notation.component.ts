import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluate-reverse-polish-notation',
  templateUrl: './evaluate-reverse-polish-notation.component.html',
  styleUrls: ['./evaluate-reverse-polish-notation.component.css']
})
export class EvaluateReversePolishNotationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.evalRPN(["2","1","+","3","*"]);
    console.log(this.evalRPN(["4","13","5","/","+"]));
  }
  /**
   * Time Complexity: O(n)
     Space Complexity: O(n), for the stack**/

  calculate(a: number, b: number, operator: string) {
    if(operator === '+'){
      return a + b;
    } else if(operator === '-') {
      return a - b;
    } else if(operator === '*') {
      return a * b;
    } else {
      return Math.trunc(a/b);
    }
  }

  evalRPN(tokens: string[]) {
    const stack = new Array();
    for(let i = 0; i < tokens.length; i++) {
      if(!isNaN(Number(tokens[i]))) {
        stack.push(Number(tokens[i]));
      } else {
        const a = stack.pop();
        const b = stack.pop();
        stack.push(this.calculate(b, a, tokens[i]));
      }
    }
    return stack[0];
  }

}
