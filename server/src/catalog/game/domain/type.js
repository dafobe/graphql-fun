import Entity from ('../../shared/Entity');

export default class Type extends Entity{
    constructor({name}) {
        this.name = name;
    }

    toJson() {
        return {
            'name': this.name
        }
    }
}