import express, { Application, Request, Response, Handler, request, NextFunction } from 'express';
import { controllers } from './controllers/index';
import { MetadataKeys } from './ultils/metadata.keys';
import { RouterInterface } from './ultils/handlers.decorators';
import { NotFoundException } from './exceptions/notFoundException';
import 'express-async-error';

class ServerApplication {

    private readonly _instance: Application;

    get instance(): Application {

        return this._instance;

    }

    constructor() {

        this._instance = express();
        this._instance.use(express.json());
        
        this.registerRoutes();

        this._instance.use((err: any, request: Request, response: Response, next: NextFunction) => {
        
            console.log('im here');

            response.status(500)
                .end();

        });

    }

    registerRoutes()
    {

        controllers.forEach(controllerClass => {

            const constrollerInstance : {[handleName: string] : Handler} = new controllerClass() as any;

            const basePath: string = Reflect.getMetadata(MetadataKeys.BASE_PATH, controllerClass);
            const routes: RouterInterface[] = Reflect.getMetadata(MetadataKeys.ROUTES, controllerClass);

            const router = express.Router();

            routes.forEach(route => {

                router[route.method](route.path, constrollerInstance[route.handleName as string].bind(constrollerInstance));

            });

            this._instance.use(basePath, router);

        });
    }

}

export default new ServerApplication();
