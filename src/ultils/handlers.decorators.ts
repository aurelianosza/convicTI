import { MetadataKeys } from './metadata.keys';

export enum Methods {

    GET     = 'get',
    POST    = 'post'

}

export interface RouterInterface {

    method      : Methods;
    path        : string;
    handleName  : string | symbol;

}

const methodDecorators = (method: Methods) => {

    return(path: string) : MethodDecorator => {

        return (target, propertyKey) => {

            const controllerClass = target.constructor;

            const routes: RouterInterface[] = Reflect.hasMetadata(MetadataKeys.ROUTES, controllerClass) ? Reflect.getMetadata(MetadataKeys.ROUTES, controllerClass) : [];

            routes.push({
                method,
                path,
                handleName  : propertyKey,
            });

            Reflect.defineMetadata(MetadataKeys.ROUTES, routes, controllerClass);

        }

    }

}

export const Get = methodDecorators(Methods.GET);
export const Post = methodDecorators(Methods.POST);
