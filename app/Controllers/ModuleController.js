const Module = require ('../Models/Modules');

const {generateCustomId} = require ('../../utils/ModuleId')

const ModuleController = {};

// create new module
ModuleController.createModule = async (req, res) => {
    try {

        const moduleId = generateCustomId();
        
        //transform the title to lowercase and removing spaces
        let { title } = req.body;
        title = title.toLowerCase().replace(/\s/g, '');
        
        // Check if a module with the same modified title already exists
        const existingModule = await Module.findOne({ title });
        if (existingModule) {
          return res.status(400).json({ message: 'Module with the same title already exists' });
        }
        
        const module = await Module.create({ ...req.body, title, moduleId: moduleId });
        res.status(201).json(module);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
        
};

//get all modules
ModuleController.getAllModules = async (req, res) =>{
    try {
        const modules = await Module.find();
        res.status(200).json(modules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//get a module by id
ModuleController.getModuleById = async (req, res) =>{
    try {
        const moduleId = req.params.moduleId
        const module = await Module.findOne({moduleId: moduleId});
        res.status(200).json(module);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//update a module by id
ModuleController.updateModuleById = async (req, res) =>{
    try {
        // Find module by userId
    const moduleId = req.params.moduleId;
    const module = await Module.findOne({ moduleId: moduleId });

    // If module not found, return 404 Not Found response
    if (!module) {
      return res.status(404).json({ message: 'Module not found' });
    }

    // Update module data
    module.title = req.body.title || module.title;
    module.nbrHeure = req.body.nbrHeure || module.nbrHeure;
    module.duration = req.body.duration || module.duration;
    module.price = req.body.price || module.price;
    module.description = req.body.description || module.description;

    // Save updated module to database
    const updatedModule = await module.save();

    res.json(updatedModule);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

//delete a module by id
ModuleController.deleteModuleById = async (req, res) =>{
    try {
        const moduleId = req.params.moduleId
        const module = await Module.findOneAndDelete({moduleId : moduleId});
        res.status(200).json(module);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = ModuleController;