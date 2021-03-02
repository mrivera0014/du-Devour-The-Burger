const orm = require('../config/orm.js')

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(cols, vals, cb) {
        orm.insertOne('burgers', cols, vals, (res) => cb(res));
    },
    updateOne(id, cb) {
        var condition = "id= " + id
        orm.updateOne('burgers', { devour: true }, condition, (res) => cb(res));
    },

}

module.exports = burger