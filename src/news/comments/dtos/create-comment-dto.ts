import { IsNotEmpty,  IsString } from 'class-validator';

export class CreateCommentsDto {
  

  //@IsNotEmpty()
  //@IsString()
  message: string;

  //@IsNotEmpty()
  //@IsString()
  author: string;

  avatar: string

  
 
}