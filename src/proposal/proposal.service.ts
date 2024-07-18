import { PrismaService } from 'prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { CreateProposalDto } from './dto/creat-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal';

@Injectable()
export class ProposalService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProposalDto) {
    return this.prisma.proposal.create({
      data: {
        title: dto.title,
        description: dto.description,
        userId: dto.userId,
        deadline: dto.deadline,
      },
    });
  }

  async findAll() {
    return this.prisma.proposal.findMany();
  }

  async findById(id: number) {
    return this.prisma.proposal.findUnique({
      where: {
        id: id,
      },
    });
  }
  async findByTitle(title: string) {
    return this.prisma.proposal.findMany({
      where: {
        title: title,
      },
    });
  }
  async update(id: number, dto: UpdateProposalDto) {
    return this.prisma.proposal.update({
      where: { id: id },
      data: dto,
    });
  }
  async delete(id: number) {
    return this.prisma.proposal.delete({
      where: { id: id },
    });
  }
}
