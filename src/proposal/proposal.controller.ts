import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProposalService } from './proposal.service';

import { CreateProposalDto } from './dto/creat-proposal.dto';
import { UpdateProposalDto } from './dto/update-proposal';

@Controller('proposal')
export class ProposalController {
  constructor(private proposalService: ProposalService) {}
  @Post()
  async create(@Body() dto: CreateProposalDto) {
    return this.proposalService.create(dto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.proposalService.findById(+id);
  }

  @Get()
  async findAll() {
    return this.proposalService.findAll();
  }

  @Get(':title')
  async findByTitle(@Param('title') title: string) {
    return this.proposalService.findByTitle(title);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateProposalDto) {
    return this.proposalService.update(+id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.proposalService.delete(+id);
  }
}
