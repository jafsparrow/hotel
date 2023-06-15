import { Controller, Get, Param } from '@nestjs/common';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}
  @Get()
  getTables() {
    return this.tableService.getTables();
  }
}
