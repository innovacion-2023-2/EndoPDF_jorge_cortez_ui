<template>
    <div class="container mt-5 mb-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center mb-4">Cargar informe de endoscopía</h4>
            <h6 class="card-title text-center text-muted mb-4 mt-1">Ingrese datos del informe</h6>
            <div class="mb-3">
              <label for="" class="form-label">Nombre</label>
              <input type="text" class="form-control" placeholder="Nombre del informe">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Informe</label>
              <input type="file" class="form-control">
            </div>
            <div class="mt-3 mb-1 text-center">
              <button class="btn btn-primary">
                Registrar informe
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
    name: 'AddReport'
}
</script>

<style scoped>

</style>