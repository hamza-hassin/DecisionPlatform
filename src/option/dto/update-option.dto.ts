import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateOptionDto {
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsInt()
  @IsNotEmpty()
  proposalId?: number;

  @IsNotEmpty()
  attachment?: string;
}
