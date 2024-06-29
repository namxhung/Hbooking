'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Places', [
            // {
            //     name: 'Trong nước',
            //     createdAt: new Date(),
            //     updatedAt: new Date()
            // },

            {
                name: 'Trong nước',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Places', null, {});
    }
};
