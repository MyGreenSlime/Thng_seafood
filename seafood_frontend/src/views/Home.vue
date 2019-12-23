<template>
  <div class="home">
    <div>
      <b-card
        title="Card Title"
        img-src=""
        img-top
        style="max-width: 20rem"
        class="mb-2"
      >
      <b-card-text>
        something
      </b-card-text>
      <b-button herf="#" varient="primary">Go</b-button>
      </b-card>
    </div>
    
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
