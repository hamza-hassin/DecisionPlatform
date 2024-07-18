import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateOptionDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  proposalId: number;

  @IsNotEmpty()
  attachment: string;
}
