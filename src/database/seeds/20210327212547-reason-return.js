module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      {
        tableName: 'reason_return',
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
        tableName: 'reason_return',
      },
      null,
      {}
    );
  },
};
