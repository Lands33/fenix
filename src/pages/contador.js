// contador.js
export default {
    contador: 0,
    iniciarContador(callback) {
      setInterval(() => {
        this.contador += 1;
        callback(this.contador);
      }, 1000);
    },
  };
  
  