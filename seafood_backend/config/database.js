const Sequelize = require('sequelize');
// const sequelize = new Sequelize('mysql://root:ZXCasdqwe1234!@119.59.114.59:3306/seafood');
const sequelize = new Sequelize('mysql://root:example@localhost:3306/seafood');
sequelize
.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

const User = sequelize.define('User', {
    // attributes
    FirstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    LastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Email : {
        type : Sequelize.STRING,
        allowNull: false,
        unique : true
    },
    Password : {
        type : Sequelize.TEXT,
        allowNull: false
    },
    MobilePhone : {
        type : Sequelize.STRING,
        allowNull: false
    },
    Role : {
        type : Sequelize.ENUM('admin', 'customer'),
        allowNull : false
    }
  }, {
    // options
})
const Address = sequelize.define("Address", {
    Address : {
        type : Sequelize.TEXT,
        allowNull : false
    },
    Provice : {
        type : Sequelize.STRING
    },
    UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        } 
    }
})
 
User.sync({ force: false })
Address.sync({ force: false })

module.exports = {
    sequelize,User,Address,
  }