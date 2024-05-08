export default class PlaceOrderModel {

    constructor(id, itemCode, cusId, qtyOnHand, description , cusName, unitPrice, qty, total ) {

        this._id = id;
        this._itemCode = itemCode;
        this._cusId = cusId;
        this._qtyOnHand = qtyOnHand;
        this._description = description;
        this._cusName = cusName;
        this._unitPrice = unitPrice;
        this._qty = qty;
        this._total = total;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(value) {
        this._itemCode = value;
    }

    get cusId() {
        return this._cusId;
    }

    set cusId(value) {
        this._cusId = value;
    }

    get qtyOnHand() {
        return this._qtyOnHand;
    }

    set qtyOnHand(value) {
        this._qtyOnHand = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get cusName() {
        return this._cusName;
    }

    set cusName(value) {
        this._cusName = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
    }
}