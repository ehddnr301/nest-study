import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `searching : ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): string {
    return `This will return one movie with the id:${movieId}`;
  }

  @Post()
  create(@Body() movieData): string {
    return movieData;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMoive: movieId,
      ...updateData,
    };
  }
}
