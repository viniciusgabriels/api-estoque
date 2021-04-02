"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      {
        tableName: 'type',
      },
      [
        {
          description: 'Saída - Venda',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Devolução - Retorno',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(
      {
        tableName: 'type',
      },
      null,
      {}
    );
  },
};
