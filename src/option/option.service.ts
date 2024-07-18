import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Injectable()
export class OptionService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOptionDto) {
    return this.prisma.option.create({
      data: {
        description: dto.description,
        proposalId: dto.proposalId,
        attachment: dto.attachment,
      },
    });
  }
  async findAll() {
    return this.prisma.proposal.findMany();
  }
  async findById(id: number) {
    return this.prisma.option.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, dto: UpdateOptionDto) {
    return this.prisma.option.update({
      where: { id: id },
      data: dto,
    });
  }

  async delete(id: number) {
    {
      return this.prisma.option.delete({
        where: { id: id },
      });
    }
  }
}
