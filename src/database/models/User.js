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
    }

}
    
    
}