<template>
    <div class="container mb-5 mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <div>
          <table class="table table-sm table-bordered table-hover">
          <thead>
            <tr>
              <th class="text-center">Nombre</th>
              <th class="text-center">Archivo</th>
              <th class="text-center">Ver</th>
              <th class="text-center">Editar</th>
              <th class="text-center">Dar observación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">Informe 1</td>
              <td class="text-center">Archivo 1</td>
              <td class="text-center">
                <i class="bi bi-eye"></i>
              </td>
              <td class="text-center">
                <i class="bi bi-pencil"></i>
              </td>
              <td class="text-center">
                <i class="bi bi-card-checklist"></i>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ListReports'
}
</script>