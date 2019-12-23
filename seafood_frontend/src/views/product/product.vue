<template>
  <div>
    <div class="row mb-3">
      <div class="container" id="col">
        <div class="row">
          <div class="col-sm-6">
            <br>
            <h1> </h1>
            <img src="../../assets/2.png" height="400">
          </div>
          <div class="col-sm-6">
            <br>
            <br>
            <br>
            <br>
            <br>
            <h5>กั้งกระดาน</h5>
            <hr>
            <div>
              <label>
                เรือเฮลโหลเวิล, จังหวัด ปัตตานี
              </label>
            </div>
            <div>
              <label>
                น้ำหนัก: 100  กรัม
              </label>
            </div>
            <div>
              <label>
                ระยะเวลาที่เปิดรับ : Count Down
              </label>
            </div>
            <div>
              <label>
                ราคา: 100 บาท
              </label>
            </div>
            <div>
              <b-button herf="#" variant="primary" id="button">ซื้อเลย</b-button>
              <b-button herf="#" variant="primary" id="button">เก็บลงตระกร้า</b-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      key: "value"
    };
  },
  methods: {
    name() {}
  }
};
</script>

<style>
#col {
  color: #ffffff;
}

#button {
  color: #ffffff;
  background-color: #c1a673;
}
</style>