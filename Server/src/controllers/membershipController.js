const { Membership } = require('../DB_connection'); // Asegúrate de ajustar la ruta

// Crear una nueva membresía
const createMembership = async (req, res) => {
  try {
    const { userId, paymentDate, paymentDueDate, paymentStatus } = req.body;

    const newMembership = await Membership.create({
      userId,
      paymentDate,
      paymentDueDate,
      paymentStatus,
    });

    res.status(201).json(newMembership);
  } catch (error) {
    console.error('Error creating a new membership:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Obtener todas las membresías
const getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.findAll();

    res.status(200).json(memberships);
  } catch (error) {
    console.error('Error getting all memberships:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Obtener una membresía por ID
const getMembershipById = async (req, res) => {
  try {
    const membershipId = req.params.membershipId;

    const membership = await Membership.findByPk(membershipId);

    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }

    res.status(200).json(membership);
  } catch (error) {
    console.error('Error getting membership by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Actualizar una membresía por ID
const updateMembershipById = async (req, res) => {
  try {
    const membershipId = req.params.membershipId;
    const { paymentDate, paymentDueDate, paymentStatus } = req.body;

    const membership = await Membership.findByPk(membershipId);

    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }

    // Actualizar los campos de la membresía solo si se proporcionan en el body
    if (paymentDate !== undefined) {
      membership.paymentDate = paymentDate;
    }

    if (paymentDueDate !== undefined) {
      membership.paymentDueDate = paymentDueDate;
    }

    if (paymentStatus !== undefined) {
      membership.paymentStatus = paymentStatus;
    }

    // Guardar los cambios
    await membership.save();

    res.status(200).json(membership);
  } catch (error) {
    console.error('Error updating membership by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Eliminar una membresía por ID
const deleteMembershipById = async (req, res) => {
  try {
    const membershipId = req.params.membershipId;

    const membership = await Membership.findByPk(membershipId);

    if (!membership) {
      return res.status(404).json({ error: 'Membership not found' });
    }

    await membership.destroy();

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting membership by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createMembership,
  getAllMemberships,
  getMembershipById,
  updateMembershipById,
  deleteMembershipById,
};