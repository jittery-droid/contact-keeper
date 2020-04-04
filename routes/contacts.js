const express = require('express');
const router = express.Router();

// @route    GET   api/contacts
// @desc     Get all user's contacts
// @access   Private
router.get('/', (req, res) => {
  res.send('Get contacts for a user');
});

// @route    POST   api/contacts
// @desc     Register a user
// @access   Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route    PUT  api/users/:id
// @desc     Update contact
// @access   Private
router.put('/:id', (req, res) => {
  res.send('Update a contact');
});

// @route    DELETE  api/users/:id
// @desc     Delete contact
// @access   Private
router.delete('/:id', (req, res) => {
  res.send('delete a contact');
});

module.exports = router;
