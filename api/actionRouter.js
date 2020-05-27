const express = require('express');
const Actions = require('../data/helpers/actionModel.js')

const router = express.Router();

router.get('/:id', (req, res) => {
  Actions.get(req.params.id)
  .then(actions => {
    if(actions){
      res.status(200).json(actions)
    } else {
      res.status(400).json({"message": "the action with the specificed id could not be found"})
    }
  })
  .catch(actions => {
    res.status(500).json({"message": "error retrieving the action"})
  })
})

router.post('/', (req, res) => {
  Actions.insert(req.body)
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(error => {
    res.status(400).json({"message": "error creating the actions"})
  })
})

router.put('/:id', (req, res) => {
  const changes = req.body
  Actions.update(req.params.id, changes)
  .then(actions => {
    if(actions){
      res.status(200).json(actions)
    } else {
      res.status(400).json({"message": "the action by that id could not be found"})
    }
  })
  .catch( error => {
    res.status(500).json({"message": "error making the changes"})
  })
})

router.delete('/:id', (req, res) => {
  Actions.remove(req.params.id)
  .then(actions => {
    if(actions > 0){
      res.status(200).json(actions)
    } else {
      res.status(400).json({"message": "the action by that id could not be found"})
    }
  })
  .catch( error => {
    res.status(500).json({"message": "error removing the action"})
  })
})

module.exports = router;