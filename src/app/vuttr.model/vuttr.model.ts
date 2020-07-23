import { VuttrTagsModel } from '../vuttr.model/vuttr.tags.model';

export class VuttrModel {

    id: number;
    title: string;
    linkDesc: string;
    description: string;
    vuttrTagsModel: VuttrTagsModel = new VuttrTagsModel();


}