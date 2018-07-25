// Write your code in this file!

function getUKTime() {
  let newTime= new Date().getHours() + 5
  return newTime
}

function discountTicket(ticketCost) {
    let result = ticketCost-(ticketCost*.20)
    return result
}

function tweetReply(fanName) {
  let result="Hey " + fanName +", thanks so much for the support! I really appreciate it!"
  return result
}