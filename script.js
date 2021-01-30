
function ticketCountChange(ticket, isIncrease) {
    let ticketCount = parseInt(document.getElementById(ticket + '-ticket-count').value);
    if (isIncrease == false && ticketCount > 0) {
        ticketCount--;
    }
    if (isIncrease == true) {
        ticketCount++;
    }
    document.getElementById(ticket + '-ticket-count').value = ticketCount;
}

function calculateTotalPrice() {
    const firstClassTicketCount = parseInt(document.getElementById('firstClass-ticket-count').value);
    const firstClassTicketPrice = firstClassTicketCount * 150;
    const economyTicketCount = parseInt(document.getElementById('economy-ticket-count').value);
    const economyTicketPrice = economyTicketCount * 100;
    const subtotal = firstClassTicketPrice + economyTicketPrice;
    document.getElementById('sub-total').innerText = subtotal;
    const vat = Math.round((subtotal * 0.1));
    document.getElementById('vat').innerText = vat;
    const total = subtotal + vat;
    document.getElementById('total').innerText = total;

}
 
document.getElementById('firstClass-plus').addEventListener('click', function() {
    ticketCountChange("firstClass", true);
    calculateTotalPrice();
});

document.getElementById('firstClass-minus').addEventListener('click', function() {
    ticketCountChange("firstClass", false);
    calculateTotalPrice();
});


document.getElementById('economy-plus').addEventListener('click', function() {
    ticketCountChange("economy", true);
    calculateTotalPrice();
});

document.getElementById('economy-minus').addEventListener('click', function() {
    ticketCountChange("economy", false);
    calculateTotalPrice();
});