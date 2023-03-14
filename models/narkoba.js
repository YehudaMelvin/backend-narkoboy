module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define('news', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_id: {
            type: Sequelize.INTEGER
        },

        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },

        image: {
            type: Sequelize.STRING
        },
    });

}