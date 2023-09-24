function Nome(full) {
  return full
    .trim()
    .split(" ")
    .map((nome) => {
      return nome[0].toUpperCase().concat(nome.substring(1));
    });
}

console.log(Nome("divaldo helder"));
