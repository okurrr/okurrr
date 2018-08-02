'use strict'

const db = require('../server/db')
const {User, Word, Vote} = require('../server/db/models')

const users = [
  {
    name: 'Cody',
    email: 'cody@email.com',
    password: '123',
    salt: 'sithlord',
    admin: true
  },
  {
    name: 'Murphy',
    email: 'murphy@email.com',
    password: '123',
    salt: 'jedi'
  }
]

const words = [
  {
    name: 'finna',
    description: 'about to'
  },
  {
    name: 'gucci',
    description: 'good'
  },
  {
    name: 'okurr',
    description: 'from ok to yes'
  },
  {
    name: 'yass',
    description: 'good'
  },
  {
    name: 'banger',
    description: 'good'
  },
  {
    name: 'fetch',
    description: 'good'
  },
  {
    name: 'GOAT',
    description: 'greatest of all time'
  },
  {
    name: 'keke',
    description: 'greatest of all time'
  },
  {
    name: 'woke',
    description: 'greatest of all time'
  }
]

const votes = [
  {
    word: 'finna',
    value: 1
  },
  {
    word: 'gucci',
    value: 1
  },
  {
    word: 'finna',
    value: 0
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const usersSeed = await Promise.all(users.map(user => User.create(user)))

  const wordsSeed = await Promise.all(words.map(word => Word.create(word)))

  const votesSeed = await Promise.all(votes.map(vote => Vote.create(vote)))

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${words.length} words`)
  console.log(`seeded ${votes.length} votes`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
