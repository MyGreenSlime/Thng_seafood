const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:ZXCasdqwe1234!@119.59.114.59:3306/seafood');
//sconst sequelize = new Sequelize('mysql://root:example@localhost:3306/seafood');
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
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  Password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  MobilePhone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Role: {
    type: Sequelize.ENUM('admin', 'customer'),
    allowNull: false
  }
}, {
  // options
})
const Address = sequelize.define("Address", {
  Address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  Provice: {
    type: Sequelize.STRING
  },
  UserId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
})

<<<<<<< HEAD
=======
const Product =  sequelize.define("Product", {
  ProductName : {
    type : Sequelize.TEXT,
    allowNull : false
  },
  Weight : {
    type : Sequelize.INTEGER,
    allowNull : false
  },
  Price : {
    type : Sequelize.INTEGER,
    allowNull : false,
  },
  Description : {
    type : Sequelize.TEXT,
    allowNull : false
  },
  Vendor : {
    type : Sequelize.TEXT
  },
  Provice : {
    type : Sequelize.TEXT,
  },
  EndDate : {
    type : Sequelize.DATE
  },
  Catagory : {
    type : Sequelize.ENUM("กุ้ง-กั้ง","ปู","หอย","ปลา","หมึก","อื่นๆ")
  },
  ImgSrc : {
    type : Sequelize.TEXT
  }
})

const Cart = sequelize.define('Cart', {
  UserId : {
    type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
  },
  Opened : {
    type: Sequelize.BOOLEAN,
    defaultValue : true
  }
})

const Order = sequelize.define('Order', {
  CartId : {
    type: Sequelize.INTEGER,
        references: {
          model: Cart,
          key: 'id'
        }
  },
  ProductId : {
    type: Sequelize.INTEGER,
        references: {
          model: Product,
          key: 'id'
        }
  },
  Count : {
    type: Sequelize.INTEGER,
  }
})

>>>>>>> dondon
User.sync({ force: false })
Address.sync({ force: false })
Product.sync({ force: false })
Cart.sync({ force: false })
Order.sync({ force: false })

module.exports = {
<<<<<<< HEAD
  sequelize, User, Address,
}
=======
    sequelize,User,Address,Product
  }
>>>>>>> dondon
