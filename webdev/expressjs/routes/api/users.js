const express = require('express');
const router = express.Router();
const uuid = require('uuid');

let users= require('../../Users');

// Get all users
router.get('/', (req, res) => {
    res.json(users)
});

// Get users by id
router.get('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.sendStatus(400);
    }
})

// Create a new user
router.post('/', (req, res) => {
    const newuser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }
    if (!newuser.name || !newuser.email) {
        return res.sendStatus(400);
    }

    users.push(newuser);
    res.json(users);
});

// Update user
router.put('/:id', (req, res) => {
    const found = users.some(user => user.)
})



module.exports = router;