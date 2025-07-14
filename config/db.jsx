import mysql from 'mysql2/promise';


export const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Manish@100",
    database:"nextjs"
});


try{
    const connection = await db.getConnection();
    console.log("Database connected successfully");
    connection.release();
    // Release the connection back to the pool
    // Use the connection
} catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit the process if connection fails
}