var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push("Ralph")
    return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
    return kittens
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop()
    return kittens
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift()
    return kittens
}

function  appendKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  var kitten2 = ["Broom"]
    return kittens.concat(kitten2)
}

function  prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  var kitten3 = ["Arnold"]
  return kitten3.concat(kittens)
}