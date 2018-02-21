const axios = require('axios')
const csvjson = require('csvjson')
const fs = require('fs')

const manifestSignatoriesQueryUrl = 'https://query.data.world/s/AHh98AY4I4Q-C3LYuAdu7eF_xpv1tS'
const codeOfEthicsSignatoriesQueryUrl = 'https://query.data.world/s/tUfLb2wEOWvxRyt1ES-kV_5YR_fNO-'

axios.get(manifestSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const manifestoSignatories = csvjson.toObject(response.data)
    fs.writeFileSync('./contents/manifesto/signatories.json', JSON.stringify(manifestoSignatories))
  },
  error => console.error('Failed to write approved manifesto signatories: ', error)
)

axios.get(codeOfEthicsSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const codeOfEthicsSignatories = csvjson.toObject(response.data)
    fs.writeFileSync('./contents/community-principles-on-ethical-data-sharing/signatories.json', JSON.stringify(codeOfEthicsSignatories))
  },
  error => console.error('Failed to write approved code of ethics signatories: ', error)
)
