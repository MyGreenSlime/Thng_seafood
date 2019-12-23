<template>
  <div>
    <h1>Profile</h1>
    <input type="button" value="Test Login" @click="login()" />
    <input type="button" value="Test Register" @click="register()" />
    <input type="button" value="Test Image To Base64S" @click="convertImage()" />
    <input type="file" ref="file" />
    <img :src="'data:image/jpg;base64' + image" alt="altText" />
  </div>
</template>

<script>
import Auth from "../../api/Auth";
import { async } from "q";
export default {
  name: "Profile",
  data() {
    return {
      image: undefined
    };
  },
  methods: {
    async login() {
      let something = await Auth.login("ศุภโชค768@คน.ไทย", "123456");
    },
    register() {
      console.log(
        Auth.register(
          "ศุภโชค768@คน.ไทย",
          "123456",
          "Test10",
          "JOJO",
          "0813819587"
        )
      );
    },
    async convertImage() {
      console.log(this.$refs.file.files);
      let base64 = await this.base64_encode(this.$refs.file.files[0]);
      console.log(base64);
      this.image = base64;
      
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