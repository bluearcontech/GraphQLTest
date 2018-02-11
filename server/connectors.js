const mongoose = require('mongoose');

const Pizza = require('./model/Pizza');

const connectors = {
    Pizza: {
        getPizzas() {
            return Pizza.find({})
        }
    }
};

module.exports = connectors;