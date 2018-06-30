<template>
  <div class="home">
    <div class="header">
      <h1>ReportMe</h1>
    </div>

    <div class='bottom-container'>
      <md-button to="/DoStream" class="md-raised md-primary">Stream</md-button>
      <md-button to="/ViewStream" class="md-raised md-accent">View Stream</md-button>
    </div>
  </div>

</template>

<script>
import router from '@/router';

export default {
  name: 'home',
};
</script>

<style>

.top-container{

}

.bottom-container{

}
</style>
