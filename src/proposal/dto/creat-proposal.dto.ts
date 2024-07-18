import { IsString, IsNotEmpty, IsInt, IsDateString } from 'class-validator';

export class CreateProposalDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsDateString()
  @IsNotEmpty()
  deadline: string;
}
