const express = require('express');
const Email = require('../models/Email');
const router = express.Router();


router.route('/form').get(function (req, res, next) {
    res.render('form', null);
});

router.route('/add').post(function (req, res, next) {

    console.log(typeof req.body)
    console.log(req.body);
    
    Email.create(
        req.body
    )
    res.redirect('/');
});

router.route(/.*/).get(function (req, res, next) {
    // find 가 조건
    Email.find({}, [
        'firstName', 'lastName', 'email'
    ], {
        // _id: -1 은 역순으로 가져와라
        sort: {
            _id: -1
        }
    }, function (err, emails) {
        if (err) {
            next(err);
            return;
        }

        res.render('list', {
            emails: emails
        });
    });

})

module.exports = router;