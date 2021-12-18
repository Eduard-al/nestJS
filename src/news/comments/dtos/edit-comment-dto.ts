import {  IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class EditCommentsDto {
  

  @IsString()
  @IsNotEmpty()
  @ValidateIf(o => o.message)
  message: string;
  
  @IsString()
  @IsNotEmpty()
  @ValidateIf(o => o.author)
  author: string;

}