import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questions'
})
export class QuestionsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
