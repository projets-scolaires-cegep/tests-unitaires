class Stack {
  constructor() {
    this.elements = [];
  }

  // Retourne le nombre d'éléments de la pile
  count() {
    return this.elements.length;
  }

  // Retourne true si la pile est vide
  isEmpty() {
    return (this.count() === 0);
  }

  // Empile l'élément (dépose l'élément sur le dessus de la pile)
  push(element) {
    this.elements.push(element);
  }

  // Dépile l'élément (retire l'élément sur le dessus de la pile) et le retourne
  // Retourne null si la pile est vide
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements.pop();
  }

  // Retourne l'élément sur le dessus de la pile sans le dépiler
  // Retourne null si la pile est vide
  peek() {
    if (!this.isEmpty()) {
      return this.elements[this.elements.length - 1];
    }
    return null;
  }
}

module.exports.Stack = Stack;
