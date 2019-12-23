<template>
  <div class="home">
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <b-card :img-src=pic1
              title="หอยนางรม"
              img-top
              style="max-width: 20rem"
              class="mb-4"
            >
            <b-card-text>
              ราคา : 100 บาท
            </b-card-text>
            <b-button herf="#" variant="primary">ซื้อเลย</b-button>
            </b-card>
          </div>
          <div class="col-sm-4">
          <b-card :img-src=pic2
            title="กั้งกระดาน"
            img-top
            style="max-width: 20rem"
            class="mb-4"
          >
          <b-card-text>
            ราคา : 100 บาท 
          </b-card-text>
          <b-link to="/product"><b-button variant="primary">ซื้อเลย</b-button></b-link>
          </b-card>
          </div>
          <div class="col-sm-4">
            <b-card :img-src=pic3
              title="หมึกกล้วย"
              img-top
              style="max-width: 20rem"
              class="mb-4"
            >
            <b-card-text>
              ราคา : 100 บาท  
            </b-card-text>
            <b-button herf="#" variant="primary">ซื้อเลย</b-button>
            </b-card>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <b-card :img-src=pic4
              title="ปูดำ"
              img-top
              style="max-width: 20rem"
              class="mb-4"
            >
            <b-card-text>
              ราคา : 100 บาท  
            </b-card-text>
            <b-button herf="#" variant="primary">ซื้อเลย</b-button>
            </b-card>
          </div>
          <div class="col-sm-4">
          <b-card :img-src=pic5
            title="ปลากระพง"
            img-top
            style="max-width: 20rem"
            class="mb-4"
          >
          <b-card-text>
            ราคา : 100 บาท 
          </b-card-text>
          <b-button herf="#" variant="primary">ซื้อเลย</b-button>
          </b-card>
          </div>
          <div class="col-sm-4">
            <b-card :img-src=pic6
              title="กุ้งลายเสือ"
              img-top
              style="max-width: 20rem"
              class="mb-4"
            >
            <b-card-text>
              ราคา : 100 บาท 
            </b-card-text>
            <b-button herf="#" variant="primary">ซื้อเลย</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'
import image5 from '../assets/5.png'
import image6 from '../assets/6.png'
// import path from '/product'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data : function(){
    return  {
      pic1 : image1,
      pic2 : image2,
      pic3 : image3,
      pic4 : image4,
      pic5 : image5,
      pic6 : image6

    }
  }
}
</script>

<style>
#home {
  height: 100vh;
  background-color: #191c2a;
}
</style>
