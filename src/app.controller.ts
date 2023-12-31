import { Body, Controller, Get ,Param, Post, Query,Res,Put,Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


 @Post('/create_user')
async createUser(@Body() userDto:User){
 return this.appService.createUser(userDto) ;
 
}
@Get('/read_user')
readUser(){
  return this.appService.readUser();
}

@Put('/update_user')
async updateUser(@Query('id') id:string, @Body() updateData:UserUpdateDto):Promise<User>{
return this.appService.updateUser(id,updateData)
}

@Delete('/delete_user')
async deleteUser(@Query('id') id:string){
return this.appService.deleteUser(id)
}

 @Get()
hi():string{
  return 'hi';
}
}