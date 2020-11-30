const wordList = require('./wordList.js')

const Conversationhelpers = {

/**
* checks if do is there, returns :), if negative, returns :(
* @params: questionInput: String - user given question
* @returns: smiley 
*/
  senseEmotionHelper: (questionInput) => {
    if(typeof questionInput == "string" && questionInput.length > 1 ) {

      const questionLowerCase = questionInput.toLowerCase()
      questionLowerCase.substr("?", "");
      questionLowerCase.substr(".", "");
      questionLowerCase.substr("!", "");
      questionLowerCase.substr(":", "");
      const splittedWords = questionLowerCase.split(" ");
      let valueOfSentence = 1;
      for(const word in splittedWords) {
        const v = wordList[splittedWords[word]];
        if(v) valueOfSentence *= v;
      }
      return valueOfSentence;
    }
    return null
  }
}

module.exports = Conversationhelpers