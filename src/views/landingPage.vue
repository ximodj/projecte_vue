<template>
  <div class="landing-page">
    <header class="hero">

      <h1 class="title">Tàrgetes Gràfiques Ximo S.L</h1>

      <p>La millor plataforma para comprar Tàrgetes gràfiques...</p>
      <router-link to="/productes" class="btn">Productes</router-link>
    </header>
    <section class="features">
      <div class="feature">
        <img src="/Selecció_1060.png" alt="Característica 1">
        <h2>Orion RX 6800 XT</h2>
        <p>Tarjeta gràfica potent per a jocs i creació de contingut,
          amb rendiment excepcional i tecnologia innovadora.</p>
      </div>
      <div class="feature">
        <img src="/Selecció_1061.png" alt="Característica 2">
        <h2>Galaxy RTX 3080</h2>
        <p>Targeta gràfica potent per a jocs i creació de contingut,
          amb rendiment d'avantguarda i tecnologia avançada.</p>
      </div>
      <div class="feature">
        <img src="/Selecció_1062.png" alt="Característica 3">
        <h2>Nebula GTX 3080</h2>
        <p>Porta els teus projectes creatius a un nou nivell amb
          la Nebula GTX 3080.</p>
      </div>
      <div class="feature">
        <img src="/Selecció_1063.png" alt="Característica 4">
        <h2>Vortex RTX 3090</h2>
        <p>Targeta gràfica d'alta gamma per a jocs i renderització,
          amb un rendiment insuperable i tecnologia de vanguardia.</p>
      </div>
      <div class="feature">
        <img src="/Selecció_1064.png" alt="Característica 5">
        <h2>Cosmos GTX 1660 Super</h2>
        <p>Tarjeta gràfica ideal per a jocs fluids i reproducció de contingut multimedia,
          amb un equilibri perfecte entre rendiment i cost.</p>
      </div>
    </section>
    <footer class="footer">
      <p>Contacto: info@ximo.com</p>
    </footer>
  </div>
</template>

<style scoped>
/* Estilos específicos para esta página */
.landing-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  text-align: center; /* Centrar el texto */
  padding-top: 70px;
  padding-left: 110px;
  padding-right: 100px;
}

.hero {
  text-align: center;
  padding: 20px 400px;
  background-color: #f2f2f2;
}

.title {
  font-size: 3rem;
  margin: 0px;
  display: inline;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px 0;
}

.feature {
  flex: 1 1 300px;
  text-align: center;
  margin: 10px;
}

.feature img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0; /* Ajusta el relleno vertical si es necesario */
  margin-top: 20px;
  width: calc(100% + 210px); /* Ajusta según el relleno y los márgenes laterales */
  margin-left: -110px; /* Mitad del valor del ancho extra */
}
/* Estilos para dispositivos móviles */
@media (max-width: 600px) {
  .hero {
    padding: 10px;
  }

  .title {
    font-size: 2rem;
  }

  .features {
    flex-direction: column;
    align-items: center;
  }

  .feature {
    flex: 1 1 auto;
    margin: 10px 0;
  }

  .feature img {
    width: 80px;
    height: 80px;
  }
}

</style>
