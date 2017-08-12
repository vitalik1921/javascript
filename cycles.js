for (var i = 0; i < 9; i++) {
   n += i
}

var a = {
  p1: 1,
  p2: 2
}
for(var p in a) {
  alert(p) // p1, затем p2

  // к значению каждого свойства прибавить 1
  a[p] = a[p] + 1
}

for (let a of str) {
    // iterating
}