

<template>
  <div class="about">
    <h1>เพิ่มรายการ</h1>
    <div1>
      <p>
    <label >ชื่อรายการ : </label>
    <input
      id="ProductName"
      v-model="ProductName"
      type="text"
      
    >
  </p>
     <p>
    <label >น้ำหนัก : </label>
    <input
      id="Weight"
      v-model="Weight"
      type="number"
      
    >
  </p>
    <p>
    <label >ราคา : </label>
    <input
      id="Price"
      v-model="Price"
      type="number"
      
    >
  </p>
  <p>
    <label >รายละเอียด : </label>
    <input
      id="Description"
      v-model=" Description "
      type="text"
      
    >
  </p>
   <p>
    <label >ชื่อเรือ : </label>
    <input
      id="Vendor"
      v-model="  Vendor"
      type="text"
      
    >
  </p>
  <p>
    <label>จังหวัด : </label>
    <input
      id="Provice"
      v-model="  Provice"
      type="text"
      
    >
  </p>
    <p>
    <label >วันส่งของ: </label>
    <input
      id="EndDate"
      v-model=" EndDate"
      type="date"
      
    >
  </p>
   <p>
    <label>ชนิด: </label>
    <input
      id="Catagory"
      v-model="Catagory"
      type="text"
      
    >
  </p>
  <p>
   
    <input type="file" ref="file"  @change="convertImage()"/>
  </p>
  

  <p>
     <input type="button" value="submit" @click="submit()" />
   
  </p>
 
    </div1>
    
    

    
    
  

  </div>
</template>


<script>
import Auth from "@api/Auth";
import base64 from "@libs/base64";
import product from "../api/Product"
import { async } from 'q';
export default {
  name: "About",
  data() {
    return {
      image: undefined,
      ProductName :"",
      Weight:"",
      Price:"",
      Description:"",
      Vendor:"",
      Provice:"",
      EndDate: "",
      Catagory: "",
      ImgSrc:""




    };
  },
  methods: {
    async submit() {
       let something = await product.create(this.ProductName, this.ImgSrc, this.Weight,this.Catagory,this.Description, this.Price, this.Vendor,this.Provice)
       console.log(something)
      
    },


    
    async convertImage() {
      console.log(this.$refs.file.files);
      let base64 = await this.base64_encode(this.$refs.file.files[0]);
      console.log(base64);
      this.image = base64;
      this.ImgSrc=base64;
     
      
    },
    base64_encode(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>