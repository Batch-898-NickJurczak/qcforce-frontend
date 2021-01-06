  
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validateWhitespace = (control: AbstractControl) => {
  let isWhitespace = (control.value || '').trim().length === 0;
  let isValid = !isWhitespace;

  return isValid ? null : { trimmed: true };
};

export const validateQuestion: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const question = control.get('question');
    const choice1 = control.get('choice1');
    const choice2 = control.get('choice2');
    return (question.value != '' && choice1.value != '' && choice2.value != '')? {
        questionInvalid: true } : null ;
  };