import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get('database')
  getDatabaseInformation() {
    return {
      DB_HOST: this.configService.get('DB_HOST'),
      DB_USER: this.configService.get('DB_HOST'),
      DB_PASSWORD: this.configService.get('DB_HOST'),
      DB_NAME:process.env.DB_NAME,
    };
  }
}
