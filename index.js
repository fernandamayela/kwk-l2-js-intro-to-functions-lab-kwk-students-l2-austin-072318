// Write your code in this file!

function getUKTime() {
  let newTime= new Date().getHours() + 5
  return newTime
}

function discountTicket(ticketCost) {
    let result = (ticketCost*.20)-ticketCost
    return result
}