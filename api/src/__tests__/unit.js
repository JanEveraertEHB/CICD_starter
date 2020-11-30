
const Conversationhelpers = require('./../helper/Conversationhelpers.js')

describe('check if helper senses emotion', () => {
  test('check on bad input', () => {
    expect(Conversationhelpers.senseEmotionHelper(null)).toBe(null);
    expect(Conversationhelpers.senseEmotionHelper(123)).toBe(null);
    expect(Conversationhelpers.senseEmotionHelper("")).toBe(null);
    expect(Conversationhelpers.senseEmotionHelper("a")).toBe(null);
  })
  test('check on no question', () => {
    expect(Conversationhelpers.senseEmotionHelper('hi there.')).toBe(1);
  })
  test('check if good comes through', () => {
    expect(Conversationhelpers.senseEmotionHelper("Don't you like this?")).toBe(2);
    expect(Conversationhelpers.senseEmotionHelper("Do you like this?")).toBe(2);
  })
})