function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let one = generator.next();