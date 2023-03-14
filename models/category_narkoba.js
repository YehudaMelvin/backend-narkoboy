module.exports = (sequelize, Sequelize) => {
    const CategoryNarkoba = sequelize.define('category_narkoba', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
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
    });
}