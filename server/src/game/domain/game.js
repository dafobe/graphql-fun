import Entity from ('../../shared/Entity');

export default class Game extends Entity{
    constructor({type, name, category, mechanisms, family}) {
        this.name = name;
        this.type = type;
        this.category = category;
        this.mechanisms = mechanisms;
        this.family = family;
    }

    toJson() {
        return {
            'type': this.type, 
            'name': this.name
        }
    }
}