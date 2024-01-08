import { Body, Controller, Get, Post, Param, NotFoundException } from '@nestjs/common';
import { CreateMesssageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessage() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMesssageDto) {
    return this.messagesService.create(body.content);
  };

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found')
    }
    return message;
  };
}
