<template>
  <div class="do-stream">
    <div class="top-container">

    </div>

    <div class="bottom-container">
      <h1>ReportMe</h1>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'do-stream',
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
