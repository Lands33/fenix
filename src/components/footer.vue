<template>
  <div>
  
    <footer>
      <div class="centered">
        <img class="logo-fenix-footer" src="/logo.png" alt="Fenix-Footer" width="150" height="65"> 
        <p style="font-size: 14px;">2023 FENIX SISTEMA CONTABLE * Todos los derechos reservados*</p>
        <img class="logo-redes-footer" src="/fcb.png" alt="Facebook" width="25" height="25"> 
        <img class="logo-redes-footer" src="/yutu.png" alt="Youtube" width="25" height="25"> 
        <img class="logo-redes-footer" src="/lig.png" alt="Instagram" width="25" height="25"> 
      </div>
    </footer>
  </div>
</template>

<style>
/* Estilos del pie de página */
footer {
  background-color: #00337c;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
}

.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  color: white;
  font-family: 'Noto Sans JP', sans-serif;
  margin-top: 28px;
}

.logo-fenix-footer {
  margin-right: 20px;
}

.logo-redes-footer {
  margin-left: 10px;
  margin-top: 28px;
}
</style>
