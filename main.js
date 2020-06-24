import salesByWeek from "./data.js"

const weeklyReport = document.querySelector(".report")

salesByWeek.forEach(sale => {
    weeklyReport.innerHTML += `<hr><h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2>`
    for (const property of Object.entries(sale.vehicle)) {
        weeklyReport.innerHTML += `<div>${property[0]}: ${property[1]}</div>`
    }
    weeklyReport.innerHTML += `<h3>Profit: $${sale.gross_profit}</h3>`
})