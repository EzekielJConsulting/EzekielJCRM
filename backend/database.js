const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'database-1.chhljgnjiqzb.us-east-1.rds.amazonaws.com',
    user:'admin',
    password: '5LtfSHWTkD;hMZp.N1E8',
    database: 'CRM',
    connectionLimit: 5,
    port:3372
});

module.exports = {
    getEmployee: async function (id){
        let conn;
        try {
            conn = await pool.getConnection();
            return rows = await conn.query(`SELECT * FROM Employees WHERE id = ${id}`);



        } catch (err) {
            throw err;
        } finally {
            if (conn) return conn.end();
        }
    },
    getEmployees: function (){
        pool.getConnection()
            .then(conn => {

                conn.query(`SELECT * FROM Employees`)
                    .then((rows) => {
                        // console.log(rows); //[ {val: 1}, meta: ... ]
                        return rows;
                    })

                    .catch(err => {
                        //handle error
                        console.log(err);
                        conn.end();
                    })

            }).catch(err => {
            console.log(err);
            //not connected
        });
    },
}