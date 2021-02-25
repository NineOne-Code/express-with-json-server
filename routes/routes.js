const controller = require('../controller/Controller');
const router = require('express').Router();
const { uploadSingle, uploadMultiple } = require('../middlewares/multer');

router.get('/notes', controller.viewNotes)
router.post('/notes', uploadSingle, controller.addNotes)
router.put('/notes/:id', controller.editNotes)
router.delete('/notes/:id', controller.deleteNotes)

module.exports = router;