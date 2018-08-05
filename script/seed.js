'use strict'

const db = require('../server/db')
const {Word} = require('../server/db/models')

const words = [
  {
    name: 'okurr',
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
      'The word that really hot girl from Mean Girls was trying to make slang for cool, awesome, or good.'
  },
  {
    name: 'bye felicia',
    description:
      'When someone says that they\'re leaving and you don\'t care. Their name then becomes "felicia", a random person that nobody is sad to see go.'
  },
  {name: 'goat', description: 'Greatest of all Time!'},
  {name: 'af', description: 'This acronym stands for as fudge.'},
  {
    name: 'finna',
    description: 'Abbreviation of "fixing to". Normally means "going to".'
  },
  {
    name: 'keke',
    description:
      'A woman who Drake sings about in his song “In My Feelings.” Also the woman who we now have stuck in our head. Thanks a lot Keke.'
  },
  {
    name: 'collusion',
    description:
      "when you meet with Russian officials to plot a mission to interfere with the U.S democratic election and you know that it's wrong so you lie about it ever happening."
  },
  {name: 'absolute unit', description: 'Someone THICC and BIGG.'},
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
    description:
      'Catching an L means catching a loss. In this sense, you catch an L if you say something stupid or, if you try to sound intelligent but are proved wrong.'
  },
  {
    name: 'this is so sad Alexa play despacito',
    description:
      'The sudden response to something sad happening and a need for bieber.'
  },
  {
    name: 'for reasons',
    description:
      "Used as an explanation as to why you are requesting something when you don't want the people to know why. The more sinister your statement sounds in context, the better."
  },
  {
    name: 'jocking',
    description:
      "1. copying or stealing someone's style. 2. or flirting with someone."
  },
  {
    name: 'bey-sexual',
    description:
      'A person who is not sexually attracted to women, but would have sex with Beyoncé.'
  },
  {name: 'lit', description: 'When something is turned up or popping.'},
  {name: 'fire', description: 'really good, cool as hell.'},
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
  {name: 'hey yo sis', description: 'salutations to a sister/friend.'},
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
    description: 'yes but with more enthusiam."'
  },
  {
    name: 'lowkey',
    description: 'to keep something confidential between friends."'
  },
  {
    name: 'thirsty',
    description: 'desparate, impatient, or overly eager."'
  },
  {
    name: 'thirst trap',
    description: 'a sexy photo posted on social media to attract attention.'
  }
]

async function seed() {
  await db.sync()
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
