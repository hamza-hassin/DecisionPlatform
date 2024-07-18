import { IsString, IsOptional, IsInt, IsDateString } from 'class-validator';

export class UpdateProposalDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsInt()
  @IsOptional()
  userId?: number;

  @IsDateString()
  @IsOptional()
  deadline?: string;
}
