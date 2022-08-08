import {
    Controller, Get, Param, Post, Req
}
from '@nestjs/common';
import {
    Request
}
from 'express';
// import {
//     AppService
// }
// from './app.service';

@Controller() export class AppController {
    // constructor(private readonly appService: AppService) {}

    @Get()// whenever this path is long we can give same path of get ,post... in controller and in get we can write only differ path
    getHello():object {
        // return this.appService.getHello();
        return {
            name: 'amita',
            age: 23
        }
    };

    @Post() store(@Req() req:Request) {

        console.log(req.body);
        return req.body;
    }
    @Get('/:userId') getUser(@Param() userId:number) {
        return userId;
    }
}
