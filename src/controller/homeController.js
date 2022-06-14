import pool from '../configs/connectDB'

let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM users')

    return res.render('index.ejs', { dataUser: rows, test: 'abc string test' })
}

let getDetailPage = async (req, res) => {
    let userId = req.params.id
    let user = await pool.execute(`select * from users where id = ?`, [userId])
    // console.log('check req params: ', user)

    // return res.send('hello detail page')
    return res.send(JSON.stringify(user[0]))
}

module.exports = {
    getHomepage, getDetailPage
}


