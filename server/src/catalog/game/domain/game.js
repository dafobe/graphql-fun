const Entity = require('../../shared/Entity')

class Game extends Entity{
    constructor({type, name, category, mechanisms, family}) {
        this.name = name;
        this.type = type;
        this.category = category;
        this.mechanisms = mechanisms;
        this.family = family;
    }

    toJson() {
        return {
            'id': this._id,
            'type': this.type, 
            'name': this.name
        }
    }
}

module.exports = Game;