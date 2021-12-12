import { Controller, Patch, Put, Req, Body } from '@nestjs/common';
import { CalcService, OperationType, CalcMeaning } from './calc.service';
import { Request } from 'express';


@Controller('calc')
export class CalcController {
    constructor(private calcService: CalcService) {}

  @Put()
  calcPut(@Req() req: Request, @Body() calcMeaning: CalcMeaning) {
    const operation = req.headers['type-operation'] as OperationType;
    const result=this.calcService.calculate(operation, calcMeaning)
    console.log(result)
    return result;

  }
  @Patch()
  calcPatch(@Req() req: Request, @Body() calcMeaning: CalcMeaning) {
    const operation = req.headers['type-operation'] as OperationType;
    const result=this.calcService.calculate(operation, calcMeaning)
    console.log(result)
    return result;
  }
}
