module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define('news', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
        date: {
            type: Sequelize.DATE
        },
        author: {
            type: Sequelize.STRING
        }

    });
    return News;
}