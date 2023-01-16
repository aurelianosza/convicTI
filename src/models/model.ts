export abstract class Model {

    static find<T extends Model> (id: string) : Promise<T | null> {

        throw Error('method find not implemented');

    }

}
