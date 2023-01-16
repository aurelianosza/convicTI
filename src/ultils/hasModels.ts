import { Request } from "express";
import modelFind, { Modellable } from "./factory";
import { NotFoundException } from "../exceptions/notFoundException";

export const hasModel = (modelName: Modellable, param: string = 'id') => {

    return (target : any, _propertyKey: string, descriptior: PropertyDescriptor) =>
    {
        const originamMethod = descriptior.value;

        descriptior.value = async (request: Request, response: Response) => {

            const model = await modelFind(modelName, request.params[`${param}`]);

            if(!model)
            {
                throw new Error(`${modelName} not found.`);
            }

            originamMethod.apply(target, [model, request, response]);

        }

    }

} 
