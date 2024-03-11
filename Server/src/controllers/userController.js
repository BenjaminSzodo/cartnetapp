const { User } = require('../DB_connection');

// Obtener todos los usuarios
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Obtener un usuario por su ID
async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Crear un nuevo usuario
async function createUser(req, res) {
  const { name, lastName, dni, carnet, sex, paymentDate, paymentDueDate, paymentStatus } = req.body;

  try {
    const newUser = await User.create({
      name,
      lastName,
      dni,
      carnet,
      sex,
      paymentDate,
      paymentDueDate,
      paymentStatus,
    });

    console.log('User has been created');
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating a new user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}




// Actualizar un usuario por su ID
async function updateUserById(req, res) {
  const userId = req.params.id;
  const { name, lastName, dni, carnet, sex, paymentDate, paymentDueDate, paymentStatus } = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Actualizar los campos del usuario solo si se proporcionan en el body
    if (name !== undefined) {
      user.name = name;
    }

    if (lastName !== undefined) {
      user.lastName = lastName;
    }

    if (dni !== undefined) {
      user.dni = dni;
    }

    if (carnet !== undefined) {
      user.carnet = carnet;
    }

    if (sex !== undefined) {
      // Validar que el valor proporcionado sea uno de los permitidos
      const allowedSexValues = ['masculino', 'femenino', 'no definido'];
      if (allowedSexValues.includes(sex)) {
        user.sex = sex;
      } else {
        res.status(400).json({ error: 'Invalid value for sex' });
        return;
      }
    }

    // Actualizar los campos relacionados con la membresía
    if (paymentDate !== undefined) {
      user.paymentDate = paymentDate;
    }

    if (paymentDueDate !== undefined) {
      user.paymentDueDate = paymentDueDate;
    }

    if (paymentStatus !== undefined) {
      user.paymentStatus = paymentStatus;
    }

    // Guardar los cambios
    await user.save();
    console.log('User has been updated');
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}




// Eliminar un usuario por su ID
async function deleteUserById(req, res) {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Eliminar el usuario
    await user.destroy();
    console.log('User has been deleted');
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
