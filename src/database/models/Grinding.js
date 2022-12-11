module.exports = (sequelize, DataTypes) => {

    const alias = "Grinding"
    
    const cols = {
    
        id : {
            type: DataTypes.INTEGER(3).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        grind: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }
    
    const config = {
        timestamps: false,
        tableName: "grindings"
    }
        
    const grindings = sequelize.define(alias, cols, config);

    return grindings
    
    
}