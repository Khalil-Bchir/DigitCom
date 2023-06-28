const express = require ("express");

const ModuleController = require ('../Controllers/ModuleController');

const router = express.Router();

router.post('/module', ModuleController.createModule); // create a new module
router.get('/modules',ModuleController.getAllModules); // get all modules
router.get('/module/:moduleId',ModuleController.getModuleById); // get a module by moduleID
router.put('/module/:moduleId',ModuleController.updateModuleById); // update a module
router.delete('/module/:moduleId',ModuleController.deleteModuleById); // delete a module

module.exports = router;