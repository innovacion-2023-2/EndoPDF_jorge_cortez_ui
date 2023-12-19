<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">EndoPDF</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">Crear cuenta</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">Iniciar sesión</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add_report" class="nav-link">Cargar informe</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/list_reports" class="nav-link">Ver informes</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>