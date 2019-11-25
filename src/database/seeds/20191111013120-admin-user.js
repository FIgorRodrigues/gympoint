const bcrypt = require("bcryptjs");

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "admin",
          email: "admin@gympoint.com",
          password_hash: bcrypt.hashSync("123", 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};
