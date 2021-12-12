import { Injectable } from '@nestjs/common';

export interface CalcMeaning {
    a: number;
    b: number;
  }

export type OperationType = 'plus' | 'minus' | 'multiply';

@Injectable()
export class CalcService {
    calculate(operation: OperationType, calcMeaning: CalcMeaning) {
        switch (operation) {
          case 'plus':
            return calcMeaning.a + calcMeaning.b;
          case 'minus':
            return calcMeaning.a - calcMeaning.b;
          case 'multiply':
            return calcMeaning.a * calcMeaning.b;
        }
      }
}
