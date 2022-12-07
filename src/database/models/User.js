module.exports = (sequelize, DataTypes) => {

const alias = "Users"

const cols = {

    id : {
        type: DataTypes.INTEGER(5).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    email :  {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    user_password: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}

const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "update_at",
    deleteAt: false,
    tableName: "users"
}
    
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.ShoppingCart, {
            
        })      
    }
}