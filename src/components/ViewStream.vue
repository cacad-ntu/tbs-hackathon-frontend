<template>
  <div class="view-stream">
    <div class="top-container">

    </div>

    <div class="bottom-container">
      <div class="md-title"></div>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'view-stream',
  computed: mapGetters([
    'evenOrOdd',
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementBy',
    'incrementIfOdd',
    'incrementAsync',
  ])
};
</script>

<style>


.top-container{

}

.bottom-container{

}
</style>
