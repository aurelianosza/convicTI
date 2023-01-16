import { Request, Response } from 'express';
import Controller from '../ultils/controllet.decorators';
import { Get } from '../ultils/handlers.decorators';

@Controller('/home')
export default class HomeController {

    @Get('')
    index(_request: Request, response: Response)
    {
        response.json('Hello world');
    }
    

}
