
function theBeatlesPlay(musicians, instruments) {
  var arr = []

  for (let i = 0, l= musicians.length; i<l;  i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}

function johnLennonFacts(facts) {
  var shoutedFacts = []

  var i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  var arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
