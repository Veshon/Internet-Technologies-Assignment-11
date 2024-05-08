export default class ItemModel {
    
    constructor(id, description, qty, price) {

        this._id = id;
        this._description = description;
        this._qty = qty;
        this._price = price;

    }
    
    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
    
}