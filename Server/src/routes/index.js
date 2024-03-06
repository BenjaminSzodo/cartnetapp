const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const membershipRoutes = require('./membershipRoutes');

// Combina las rutas de usuarios y membresías
router.use('/users', userRoutes);
router.use('/memberships', membershipRoutes);

module.exports = router;
