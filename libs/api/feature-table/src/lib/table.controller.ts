import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TableService } from './table.service';
import { CreateTableDto } from './dto/create-table.dto';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}
  @Get()
  getTables() {
    return this.tableService.getTables();
  }

  @Post()
  createKitchen(@Body() params: CreateTableDto) {
    return this.tableService.createTable(params);
  }

  @Put(':id')
  updateKitchen(@Body() body: CreateTableDto, @Param('id') id: any) {
    const tableId = +id;
    console.log('kitchen id', tableId);
    return this.tableService.udpateTable(tableId, body);
  }
}
