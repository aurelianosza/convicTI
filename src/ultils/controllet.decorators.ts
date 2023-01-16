import { MetadataKeys } from './metadata.keys';

const Controller = (basepath: string) : ClassDecorator => {

    return(target) => {

        Reflect.defineMetadata(MetadataKeys.BASE_PATH, basepath, target);

    }

}

export default Controller;
