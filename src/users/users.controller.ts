import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { UsersService } from './users.service';
import { Controller, Get, Request, UseGuards } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post('register')
  // async register(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.createUser(createUserDto);
  // }

  // @Post('login')
  // async login(@Body() loginUserDto: LoginUserDto) {
  //   const user = await this.usersService.validateUser(loginUserDto);
  //   if (user) {
  //     // here I will generate jwt
  //     return { message: 'login successful' };
  //   } else {
  //     return { message: 'login failed' };
  //   }
  // }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.usersService.getProfile(req.user.email);
    if (user) {
      return user;
    } else {
      return { message: 'this route is protected' };
    }
  }
}
