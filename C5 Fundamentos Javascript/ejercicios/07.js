function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor;
};
console.log(esTipoDato("hola"))
console.log(esTipoDato(4))
console.log(esTipoDato(false))


module.exports = esTipoDato;