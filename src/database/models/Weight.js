module.exports = (sequelize, DataTypes) => {

    const alias = "Weight"
    
    const cols = {
    
        id : {
            type: DataTypes.INTEGER(5).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        weight: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    }
    
    const config = {
        timestamps: false,
        tableName: "weights"
    }
        
    const weights = sequelize.define(alias, cols, config);

    return weights
    
    
}