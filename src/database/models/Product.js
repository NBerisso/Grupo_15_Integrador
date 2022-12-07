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
            allowNull: false
        },
        description :  {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.SMALLINT(5)
        },
        intesity: {
            type: DataTypes.INTEGER(2),
            allowNull: false
        }
    }
    
    const config = {
        timestamps: false
    }
        
        const product = sequelize.define(alias, cols, config);
    }