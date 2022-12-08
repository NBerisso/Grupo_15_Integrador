module.exports = (sequelize, DataTypes) => {

    const alias = "ShoppingCart"
    
    const cols = {
    
        id : {
            type: DataTypes.INTEGER(20).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: DataTypes.INTEGER(3),
            allowNull: true
        },
        id_product:  {
            type: DataTypes.INTEGER(3),
            allowNull: false
        },
        id_grindings: {
            type: DataTypes.INTEGER(3),
            allowNull: false
        },
        id_weights: {
            type: DataTypes.INTEGER(3),
            allowNull: false
        },
        quantity:{
            type: DataTypes.INTEGER(3),
            allowNull: false
        }
    }
    
    const config = {
        timestamps: false,
        tableName: "shoppingcart"
    }
        
    const ShoppingCart = sequelize.define(alias, cols, config);

    return ShoppingCart
    
    
}