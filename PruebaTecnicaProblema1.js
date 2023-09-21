function hasUniqueCharacters(arr) {
    const Car_revi = {};
    for (let i = 0; i < arr.length; i++) {
      const caracter = arr[i];
      if (Car_revi[caracter]) {
        return false;
      }
      Car_revi[caracter] = true;
    }
    return true;
  }
  console.log(hasUniqueCharacters(" @@"))
  console.log(hasUniqueCharacters("String Sub"))