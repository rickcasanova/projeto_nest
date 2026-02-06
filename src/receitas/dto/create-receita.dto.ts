import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateReceitaDto {
  @IsNumber()
  @IsNotEmpty()
  readonly receita: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  readonly origem: string;

  @IsPositive()
  readonly responsavelId: number;
}
