const parseReferrer = require('./parseReferrer')

const referrerTypes = require('../configs/referrerTypes')
const randomString = Math.random()
  .toString(36)
  .substring(7)

referrerTypes.push({
  regex: new RegExp(randomString),
  source: randomString,
  medium: 'referral'
})

describe('CheckChannel', () => {
  referrerTypes.forEach(element => {
    const url = `https://${element.regex.source}/`
    test(`send ${url} => return ${element.source}|${element.medium}`, () => {
      expect(parseReferrer(url)).toMatchObject(element)
    })
  })
})
