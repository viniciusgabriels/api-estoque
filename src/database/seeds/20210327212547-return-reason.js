module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      {
        tableName: 'return_reason',
      },
      [
        {
          description: 'Produto com defeito de fábrica',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Cliente arrependeu da compra',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'Produto vencido',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete(
      {
        tableName: 'return_reason',
      },
      null,
      {}
    );
  },
};
