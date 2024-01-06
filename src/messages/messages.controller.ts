import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateMesssageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

  @Get()
  listMessage() {

  }

  @Post()
  createMessage(@Body() body: CreateMesssageDto) {
    console.log(body);
  };

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    
  };
  
}
