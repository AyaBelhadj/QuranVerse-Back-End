module.exports = (sequelize, Sequelize) => {
    const Qareea = sequelize.define("reciters", {
     
      name: {
        type: Sequelize.STRING,
      },
      photo: {
        type: Sequelize.STRING, 
      } 
    }
    , {
      timestamps: false // Disable timestamps (created_at and updated_at)
    }
    );
    return Qareea;
  };
  