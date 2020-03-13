const express = require('express');
const Actions = require('../data/helpers/actionModel.js')

const router = express.Router();

// get,
// insert,
// update,
// remove,

// id
// project_id: required
// description: required
// notes: required
// completed

router.get('/', (req, res) => {
  // Actions.get(req.body)
  // .then()
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router;