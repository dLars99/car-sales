import salesByWeek from "./data.js"
// Function to search sales for agent information

const searchSales = () => {

    const searchInput = document.querySelector("#searchInput")
    // Listen for "enter" key
    searchInput.addEventListener('keypress', event => {
        let searchedSales = []
        if (event.charCode === 13) {
            const searchTerm = event.target.value
            
            // Search through each agent property for a match
            searchedSales = salesByWeek.filter(sale => {
                for (const value of Object.values(sale.sales_agent)) {
                    if (value.includes(searchTerm)) {
                        return sale
                    }
                }
            })
            
            // Once matches are found, render sales agent info to the DOM
            searchedSales.forEach(sale => {
                const weeklyReport = document.querySelector(".report")
                weeklyReport.innerHTML = `<hr><h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2>
                <div>Mobile: ${sale.sales_agent.mobile}</div>
                <div>Email: ${sale.sales_agent.email}</div>
                <h3>Sale: $${sale.gross_profit}</h3>`
            })
        }
    })

}

export default searchSales