const router = require('express').Router(),
    { Birthday } = require('server/models/birthday.model.js')

    router.post('/', Birthday)

module.exports = router