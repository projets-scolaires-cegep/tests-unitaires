function somme(a, b) {
  return a + b;
}

function susceptible() {
  throw new Error('Exception à tout coup');
}

function positive(idee) {
  if (idee < 0) {
    throw new Error('Je n\'accepte pas les idées négatives');
  }

  return ('Vive la vie!');
}

exports.somme = somme;
exports.susceptible = susceptible;
exports.positive = positive;
