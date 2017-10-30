const sql = require('mssql')
 
async () => {
    try {
        const pool = await sql.connect('mssql://username:password@opendashboard.database.windows.net/opendashboard')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}



// Connect to database


// Call stored procedure spGetErrorMetrics

// Call stored procedure spGetProcessingTimes