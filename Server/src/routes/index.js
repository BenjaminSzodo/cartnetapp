const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Combina las rutas de usuarios y membresías
router.use('/users', userRoutes);


module.exports = router;
