const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');

// Definir rutas para membresías
router.get('/', membershipController.getAllMemberships);
router.get('/:id', membershipController.getMembershipById);
router.post('/', membershipController.createMembership);
router.put('/:id', membershipController.updateMembershipById);
router.delete('/:id', membershipController.deleteMembershipById);

module.exports = router;
