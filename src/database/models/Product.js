module.exports = (sequelize, DataTypes) => {

    const alias = "Products"
    
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
        image: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        description :  {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.SMALLINT(5)
        },
        intensity: {
            type: DataTypes.INTEGER(2),
            allowNull: false
        }
    }
    
    const config = {
        timestamps: false,
        tableName: "products"
    }
        
    const product = sequelize.define(alias, cols, config);

    return product

}