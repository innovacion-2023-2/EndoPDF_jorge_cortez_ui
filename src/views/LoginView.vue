<template>
    <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center mb-4">Bienvenido a EndoPDF</h4>
            <h6 class="card-title text-center text-muted mb-4 mt-1">Ingrese sus datos para iniciar sesión</h6>
            <div class="mb-3">
              <label for="" class="form-label">Correo electrónico</label>
              <input type="text" class="form-control" placeholder="Ingrese su correo electrónico">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Contraseña</label>
              <input type="password" class="form-control" placeholder="Ingrese su contraseña">
            </div>
            <div class="mt-3 mb-1 text-center">
              <button class="btn btn-primary">
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'LoginView'
}
</script>

<style scoped>

</style>