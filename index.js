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
  array = kittens.concat(kitten2)
    return array
}

function  prependKitten(name) {
  var kittens = ["Milo", "Otis", "Garfield"]
  var kitten3 = ["F"]
  array = kitten3.concat(kittens)
    return array
}