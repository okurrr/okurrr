const router = require('express').Router()
const api = require('genius-api')

const id = 'QrUHTP_IUXxixTfo1iXbxy1iw-xHL4xKPUGtjq8PLh0zZsnkm51vnGWwly4Rj63H'
const secret =
  'fi5-ykuvxxwaNEsg_nK3Cr8Wgj5bYc3ToRf9dpbfuyjg95_k_Sp38SGVRBtgoEpaNx7DcI1rX2TKhnREBbS7qQ'
const access =
  'O4JNFjRZMauRG4EKtPnpTR_7lBf9scRR8C0uhCo15L4XrdMXoKw_3EzkSvidyBkH'

const genius = new api(access)

router.get('/', (req, res, next) => {
  try {
    genius.search('gucci').then(function(response) {
      res.json(response.hits)
    })
  } catch (error) {
    console.log(error)
  }
})

router.get('/:word', (req, res, next) => {
  let search = req.params.word
  try {
    genius.search(search).then(function(response) {
      res.json(response.hits)
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
