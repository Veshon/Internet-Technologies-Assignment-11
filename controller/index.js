import CustomerModel from "../model/customerModel.js";
import {customers} from "../db/db.js";

import ItemModel from "../model/itemModel.js";
import {items} from "../db/db.js";

import PlaceOrderModel from "../model/placeOrderModel.js";
import {orders} from "../db/db.js";

let recordIndex;


$('#dashBoardSection').css({display:'block'})
$('#customerSec').css({display:'none'})
$('#itemSec').css({display:'none'})
$('#placeOrderSec').css({display:'none'})


$('#cusBox').on('click',() =>{
    $('#customerSec').css({display:'block'})
    $('#dashBoardSection').css({display:'none'})
    $('#itemSec').css({display:'none'})
    $('#placeOrderSec').css({display:'none'})
})

$('#itemBox').on('click',() =>{
    $('#itemSec').css({display:'block'})
    $('#dashBoardSection').css({display:'none'})
    $('#customerSec').css({display:'none'})
    $('#placeOrderSec').css({display:'none'})
})

$('#orderBox').on('click',() =>{
    $('#placeOrderSec').css({display:'block'})
    $('#dashBoardSection').css({display:'none'})
    $('#itemSec').css({display:'none'})
    $('#customerSec').css({display:'none'})
})

////////////////////////////Home Button///////////////////////////////

$('#homeBtn').on('click',() =>{
    $('#dashBoardSection').css({display:'block'})
    $('#customerSec').css({display:'none'})
    $('#itemSec').css({display:'none'})
    $('#placeOrderSec').css({display:'none'})
})

$('#homeBtnItem').on('click',() =>{
    $('#dashBoardSection').css({display:'block'})
    $('#customerSec').css({display:'none'})
    $('#itemSec').css({display:'none'})
    $('#placeOrderSec').css({display:'none'})
})

$('#homeBtnOrder').on('click',() =>{
    $('#dashBoardSection').css({display:'block'})
    $('#customerSec').css({display:'none'})
    $('#itemSec').css({display:'none'})
    $('#placeOrderSec').css({display:'none'})
})

///////////////////////////////////////////////////////////

function loadCustomers() {

    $('#cusTBody').empty()

    customers.map((item, index)=>{

        var record = `<tr>
                  <td class="cusId-value">${item._id}</td>
                  <td class="cusName-value">${item._name}</td>
                  <td class="cusAddress-value">${item._address}</td>
                  <td class="cusMobile-value">${item._mobile}</td>
                </tr>`;

        $("#cusTBody").append(record)

    })

}

$("#cusTBody").on('click', 'tr', function(){

    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".cusId-value").text();
    let name = $(this).find(".cusName-value").text();
    let address = $(this).find(".cusAddress-value").text();
    let mobile = $(this).find(".cusMobile-value").text();

    console.log("Values: "+id)
    console.log("Values: "+name)
    console.log("Values: "+address)
    console.log("Values: "+mobile)

    $("#cusId").val(id);
    $("#cusName").val(name);
    $("#cusLAddress").val(address);
    $("#cusMobile").val(mobile);

})


$("#cusSubmit").on('click',() => {

    var id = $('#cusId').val();

    var name = $('#cusName').val();

    var address = $('#cusLAddress').val();

    var mobile = $('#cusMobile').val();

    console.log(id);
    console.log(name);
    console.log(address);
    console.log(mobile)
    
    let cusValues=new CustomerModel(id, name, address, mobile);

    customers.push(cusValues)

    loadCustomers();
    $("#cusReset").click();

})


$("#cusUpdate").on('click',() => {

    var id = $('#cusId').val();

    var name = $('#cusName').val();

    var address = $('#cusLAddress').val();

    var mobile = $('#cusMobile').val();


    let cusObj = customers[recordIndex];
    cusObj.id = id
    cusObj.name = name
    cusObj.address = address
    cusObj.mobile = mobile
    
    loadCustomers();
    $("#cusReset").click();

})


$("#cusDelete").on('click',() => {

    customers.splice(recordIndex, 1);

    loadCustomers();
    $("#cusReset").click();

})


////////////////////////////////////////////////////////

function loadAllItems() {

    $('#itemTBody').empty()

    items.map((item, index)=>{

        var record = `<tr>
                  <td class="itemId-value">${item._id}</td>
                  <td class="itemDescription-value">${item._description}</td>
                  <td class="itemQty-value">${item._qty}</td>
                  <td class="itemPrice-value">${item._price}</td>
                </tr>`;

        $("#itemTBody").append(record)

    })


}


$("#itemTBody").on('click', 'tr', function(){

    let index = $(this).index();
    recordIndex = index;

    let id = $(this).find(".itemId-value").text();
    let desc = $(this).find(".itemDescription-value").text();
    let qty = $(this).find(".itemQty-value").text();
    let price = $(this).find(".itemPrice-value").text();

    console.log("Values:"+id)
    console.log("Values:"+desc)
    console.log("Values:"+qty)
    console.log("Values:"+price)

    $("#itemId").val(id);
    $("#itemDescription").val(desc);
    $("#itemQty").val(qty);
    $("#itemPrice").val(price);

})


$("#itemSave").on('click',() => {

    var id = $('#itemId').val();

    var desc = $('#itemDescription').val();

    var qty = $('#itemQty').val();

    var price = $('#itemPrice').val();

    console.log(id);
    console.log(desc);
    console.log(qty);
    console.log(price)

    let itemValues= new ItemModel(id, desc, qty, price);

    items.push(itemValues)

    loadAllItems();
    $("#itemClear").click();

})


$("#itemUpdate").on('click',() => {

    var id = $('#itemId').val();

    var desc = $('#itemDescription').val();

    var qty = $('#itemQty').val();

    var price = $('#itemPrice').val();

    let itemObj = items[recordIndex];

    console.log(recordIndex);
    console.log(items);
    console.log(itemObj);

    itemObj._id = id
    itemObj._description = desc
    itemObj._qty = qty
    itemObj._price = price

    loadAllItems();
    $("#itemClear").click();

})


$("#itemDelete").on('click',() => {

    items.splice(recordIndex, 1);

    loadAllItems();
    $("#itemClear").click();

})


////////////////////////////////////////////////////////

function loadAllOrders() {

    $('#orderTBody').empty()

    orders.map((item, index)=>{

        var record = `<tr>
                  <td class="itemCode-value">${item._itemCode}</td>
                  <td class="description-value">${item._description}</td>
                  <td class="qtyOnHand-value">${item._qtyOnHand}</td>
                  <td class="unitPrice-value">${item._unitPrice}</td>
                  <td class="total-value">${item._total}</td>
                </tr>`;

        $("#orderTBody").append(record)

    })

}


$("#orderSave").on('click',() => {

    var id = $('#orderId').val();

    var itemCode = $('#orderItemCode').val();

    var cusId = $('#orderCusId').val();

    var qtyOnHand = $('#orderQtyOnHand').val();

    var description = $('#orderDescription').val();

    var cusName = $('#orderCusName').val();

    var unitPrice = $('#orderUnitPrice').val();

    var qty = $('#orderQty').val();

    var total = $('#orderTotal').val();

    console.log(id);
    console.log(itemCode);
    console.log(cusId);
    console.log(qtyOnHand)
    console.log(description)
    console.log(cusName)
    console.log(unitPrice)
    console.log(qty)
    console.log(total)

    let orderValues= new PlaceOrderModel(id, itemCode, cusId, qtyOnHand, description, cusName, unitPrice, qty, total);

    orders.push(orderValues)

    loadAllOrders();
    $("#orderClear").click();

})


$("#orderTBody").on('click', 'tr', function(){

    let index = $(this).index();
    recordIndex = index;

    let itemCode = $(this).find(".itemCode-value").text();
    let description = $(this).find(".description-value").text();
    let qtyOnHand = $(this).find(".qtyOnHand-value").text();
    let unitPrice = $(this).find(".unitPrice-value").text();
    let total = $(this).find(".total-value").text();

    console.log("Values:"+itemCode)
    console.log("Values:"+description)
    console.log("Values:"+qtyOnHand)
    console.log("Values:"+unitPrice)
    console.log("Values:"+total)

    $("#orderItemCode").val(itemCode);
    $("#orderDescription").val(description);
    $("#orderQtyOnHand").val(qtyOnHand);
    $("#orderUnitPrice").val(unitPrice);
    $("#orderTotal").val(total);

})


$("#orderUpdate").on('click',() => {

    var id = $('#orderId').val();

    var itemCode = $('#orderItemCode').val();

    var cusId = $('#orderCusId').val();

    var qtyOnHand = $('#orderQtyOnHand').val();

    var itemDescription = $('#orderDescription').val();

    var cusName = $('#orderCusName').val();

    var unitPrice = $('#orderUnitPrice').val();

    var qty = $('#orderQty').val();

    var total = $('#orderTotal').val();


    let orderObj = orders[recordIndex];

    orderObj._id = id
    orderObj._itemCode = itemCode
    orderObj._cusId = cusId
    orderObj._qtyOnHand = qtyOnHand
    orderObj._description = itemDescription
    orderObj._cusName = cusName
    orderObj._unitPrice = unitPrice
    orderObj._qty = qty
    orderObj._total = total

    loadAllOrders();
    $("#orderClear").click();

})


$("#orderDelete").on('click',() => {

    orders.splice(recordIndex, 1);

    loadAllOrders();
    $("#orderClear").click();

})
