'use strict'

const db = require('../server/db')
const {Word} = require('../server/db/models')

const words = [
  {
    name: 'okurrr',
    description:
      "A word signifying acceptance like okay, popularized by Cardi B.  The correct way to say this word is with rolled r's."
  },
  {
    name: 'banger',
    description:
      'An adjective describing a song as extremely tight or unbelievably awesome.'
  },
  {name: 'gucci', description: 'Good, chill, cool, awesome.'},
  {
    name: 'fetch',
    description:
      'The word that girl from Mean Girls was trying to make slang for cool, awesome, or good.'
  },
  {
    name: 'bye felicia',
    description:
      'When someone says that they\'re leaving and you don\'t care. Their name then becomes "felicia", a random person that nobody is sad to see go.'
  },
  {name: 'goat', description: 'Greatest of all Time!'},
  {name: 'af', description: 'This acronym stands for as f**k.'},
  {
    name: 'finna',
    description: 'Abbreviation of "fixing to". Normally means "going to".'
  },

  {
    name: 'absolute unit',
    description: 'something or someone that is comically oversize.'
  },
  {
    name: 'thicc',
    description:
      'When a person has fat in the right places, creating sexy curves.'
  },
  {
    name: 'bless up',
    description: 'God be with you, general wishes of well being be upon you.'
  },
  {name: 'facts', description: 'True, right, or correct.'},
  {
    name: 'l',
    description: 'Catching an L means catching a loss.'
  },
  {
    name: 'this is so sad. Alexa, play despacito.',
    description:
      'The sudden response to something sad happening and a need for bieber.'
  },
  {
    name: 'for reasons',
    description:
      "Used to explain a request when you don't want the people to know why."
  },
  {
    name: 'jocking',
    description:
      "1. copying or stealing someone's style. 2. or flirting with someone."
  },
  {
    name: 'shook',
    description: "Shocked or surprised. Can't believe what you're seeing."
  },

  {name: 'werk', description: 'A congratulatory exclamation of approval.'},
  {
    name: 'hot minute',
    description: 'A long time. It can mean in years months weeks or days.'
  },
  {
    name: 'one hunnid',
    description: 'Too keep it one hundred, to keep it real.'
  },
  {
    name: 'dope',
    description: 'Word has been used to describe how good something is.'
  },
  {name: 'clapback', description: 'To return a diss'},
  {
    name: 'sis',
    description: 'Abbreviation for a sister/friend, like a version of "bro".'
  },
  {
    name: 'trippin',
    description:
      'When someone is overreacting or getting all bent out of shape over something small.'
  },
  {
    name: 'hella',
    description:
      'It is commonly used in place of "really" or "very" when describing something.'
  },
  {
    name: 'textrovert',
    description:
      'One who will often only say what they really feel over text messages.'
  },
  {
    name: 'turned up',
    description:
      'Turnt is a variation of "turned" used only to describe when someone is excessively excited or prepared for the current event. In its entirety, it can commonly be seen used as "turnt up," as in "turned up."'
  },
  {
    name: 'yass',
    description: 'Yes but with more enthusiam.'
  },
  {
    name: 'lowkey',
    description: 'To keep something confidential between friends.'
  },
  {
    name: 'thirsty',
    description: 'Desparate, impatient, or overly eager.'
  },
  {name: 'lit', description: 'When something is turned up or popping.'},
  {name: 'fire', description: 'Really good, cool as hell.'},
  {
    name: 'stan',
    description:
      'Hardcore fan, comes from the Eminem song "Stan", about an obsessed fan.'
  },
  {
    name: 'dm',
    description:
      "Direct Message, If you're looking to hookup with someone who doesn't have your number, you'd ask them to \"slide into your DMs.\""
  },
  {
    name: 'ship',
    description:
      'It comes from the word relationship. You "ship" the two people you want to be in a relationship.'
  },
  {
    name: 'sus',
    description:
      "Sus comes from the word suspect. It's the Internet's word for sketchy or shady."
  },
  {
    name: 'thirst trap',
    description: 'A sexy photo posted on social media to attract attention.'
  },
  {
    name: 'keke',
    description:
      'A woman who Drake sings about in his song “In My Feelings.” Also the woman who we now have stuck in our head. Thanks a lot Keke.'
  },
  {
    name: 'collusion',
    description:
      'When you meet with Russian officials to interfere with the US election and lie about it.'
  },
  {
    name: 'snatched',
    description:
      "Used to take the place of 'on fleek', 'perfect', 'on point' or 'fashionable."
  }
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(words.map(word => Word.create(word)))

  console.log(`seeded ${words.length} words`)
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
