<template>
    <div class="error">Данного города не существует, возможно вы допустили ошибку в его написании. Попробуйте написать еще раз</div>
</template>

<script>
export default {
  name: 'ErrorMessage'
}
</script>

<style>
.error{
  color: red;
  background-color: azure;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
}
</style>