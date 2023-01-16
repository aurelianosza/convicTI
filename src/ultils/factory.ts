import Proposal, { Model } from '../models/proposal.model';

export type Modellable = 'proposal';

function modelFind(modelName: 'proposal', id: string) : Promise<Proposal | null>;
function modelFind(modelName: Modellable, id: string) : Promise<Model | null> {

    const models = {
        'proposal' : Proposal
    }

    if(modelName in models)
    {
        return models[modelName].find(id);
    }
    
    throw Error('Model not found');

}

export default modelFind;
