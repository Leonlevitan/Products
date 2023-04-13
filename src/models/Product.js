const {DataTypes}= require("sequelize");


module.exports=(sequelize, type)=>{
    return sequelize.define("product",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
            
        },
        model:{
            type:DataTypes.STRING,
            allowNull: false,
        
        },
        cost:{
            type:DataTypes.INTEGER,
            allowNull:false
        }


    })
}