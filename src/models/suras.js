module.exports = (sequelize, Sequelize) => {
    const Sura = sequelize.define("surah", {
     
      name: {
        type: Sequelize.STRING,
      },
      link: {
        type: Sequelize.STRING,
      },
      reciter_id: {
        type: Sequelize.INTEGER,
      },
      logo: {
        type: Sequelize.STRING,
      },
      back: {
        type: Sequelize.STRING,
      }
    }
    , {
      timestamps: false // Disable timestamps (created_at and updated_at)
    }
    );



    return Sura;

  };
  