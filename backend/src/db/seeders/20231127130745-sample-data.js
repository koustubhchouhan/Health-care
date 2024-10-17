const db = require('../models');
const Users = db.users;

const HealthRecords = db.health_records;

const HealthRecordsData = [
  {
    name: 'Alice Johnson',

    age: 30,

    // type code here for "relation_one" field
  },

  {
    name: 'Bob Smith',

    age: 45,

    // type code here for "relation_one" field
  },

  {
    name: 'Charlie Brown',

    age: 50,

    // type code here for "relation_one" field
  },

  {
    name: 'Diana Prince',

    age: 28,

    // type code here for "relation_one" field
  },

  {
    name: 'Ethan Hunt',

    age: 35,

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

async function associateHealthRecordWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HealthRecord0 = await HealthRecords.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (HealthRecord0?.setUser) {
    await HealthRecord0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HealthRecord1 = await HealthRecords.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (HealthRecord1?.setUser) {
    await HealthRecord1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HealthRecord2 = await HealthRecords.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (HealthRecord2?.setUser) {
    await HealthRecord2.setUser(relatedUser2);
  }

  const relatedUser3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HealthRecord3 = await HealthRecords.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (HealthRecord3?.setUser) {
    await HealthRecord3.setUser(relatedUser3);
  }

  const relatedUser4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const HealthRecord4 = await HealthRecords.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (HealthRecord4?.setUser) {
    await HealthRecord4.setUser(relatedUser4);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await HealthRecords.bulkCreate(HealthRecordsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateHealthRecordWithUser(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('health_records', null, {});
  },
};
