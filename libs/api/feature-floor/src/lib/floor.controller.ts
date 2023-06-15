import { Controller, Get, Param } from '@nestjs/common';
import { FloorService } from './floor.service';

@Controller('floor')
export class FloorController {
  constructor(private floorService: FloorService) {}

  @Get(':id')
  getFloorTables(@Param() params: any) {
    const id = +params.id;
    return this.floorService.getFloorTables(id);
  }
}
