<template>
  <div id="app"> <!--Contenedor-->
    <header> <!-- Encabezado --> 
      <img class="logof" src="/logofenix.png" alt="Fenix" width="130" height="50">
      <nav> <!-- Sección de Navegación en un página web -->
        <a class="btn"> <router-link to="/home">Home</router-link>    </a>
        <a class="btn"> <router-link to="/clientes">Clientes FENIX</router-link> </a>
        <a class="btn"> <router-link to="/industrias">Industrias y Planes</router-link></a>
        <a class="btn"> <router-link to="/estamoscontigo">Estamos Contigo</router-link></a>
      </nav>
      
      <div class="search-container">
        <input class="busqueda" type="text" placeholder=" Búsqueda...">
      </div>

    </header>

   
  </div>
</template>

<script>

</script>

<style>

*{
  margin: 0%;
  padding: 0%;
  }
  

  .lupa {
  position: absolute;
  top: 50%;
  right: 120px;
  transform: translateY(-50%);
}


header {
display: flex;
align-items: center;
justify-content: center;
position: relative; 
width: 100%;
height: 90px;
font-weight: bold;
top: 0;
z-index: 1;


}

.logof{
  margin-left: -120px;
}

a {
  
background: transparent; 
color: rgb(126, 126, 126);
border: 1px transparent; 
padding: 3px 16px; 
font-family: 'Poppins', sans-serif; 
text-decoration: none;


}


input[type="text"] {
background-color: #dadada;
color: #8a8989; 
  border: none; 
  border-radius: 26px; 
  padding: 8px 40px; 
  text-align: right; 
  margin-left: 50px; 
  padding-left: 0px; 
  background-image: url('/lupa.png');
  background-size: 25px 25px; 
  background-position: calc(100% - 10px) center; 
  background-repeat: no-repeat; 
  width: 100%; 
  font-style: italic;
  

}                       
a{
  background-color: white;
}

</style>