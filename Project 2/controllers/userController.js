let users = [];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "Name and Email are required",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }

  const user = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(user);

  res.status(201).json({
    message: "User created successfully",
    user,
  });
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);

  const { name, email } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (name) user.name = name;

  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    user.email = email;
  }

  res.status(200).json({
    message: "User updated successfully",
    user,
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully",
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
