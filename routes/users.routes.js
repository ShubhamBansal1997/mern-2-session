const { getAllUsers, getUsersByUuid, searchUsersByQuery } = require("../controllers/users.controller");
const router = require("express").Router()
const { validateSearchQuery } = require("../middlewares/validators/users.validators");

router.get('/', getAllUsers);
router.get('/search', validateSearchQuery, searchUsersByQuery);
router.get('/:uuid', getUsersByUuid); 

module.exports = router;