const express = require('express');
const Projects = require('../data/helpers/projectModel.js')

const router = express.Router();

// id
// name
// description
// completed

// get,
// insert,
// update,
// remove,
// getProjectActions,

router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
  .then(projects => {
      res.status(200).json(projects)
  })
  .catch(error => {
    res.status(500).json({"message": "there was an error retrieving the projects"})
  })
})

router.get('/:id/actions', (req, res) => {
  Projects.getProjectActions(req.params.id)
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(actions => {
    res.status(500).json({"error": "there was an error retrieving the actions"})
  })
})

router.post('/', (req, res) => {
  Projects.insert(req.body)
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(projects => {
    res.status(500).json({"message": "there was an error creating the project"})
  })
})

router.put('/:id', (req, res) => {
  const changes = req.body
  Projects.update(req.params.id, changes)
  .then(projects => {
    if(projects){
      res.status(200).json(projects);
    } else {
      res.status(400).json({"message": "the project with the specified id could not be found"})
    }
  })
  .catch( error => {
    res.status(500).json({"message": "error adding changes"})
  })
})

router.delete('/:id', (req, res) => {
  Projects.remove(req.params.id)
  .then( projects => {
    if(projects > 0){
      res.status(200).json(projects)
    } else {
      res.status(404).json({"message": "the user with the specified Id does not exist"})
    }
  })
  .catch( error => {
    res.status(500).json({"message": "error deleting the project"})
  })
});

module.exports = router;