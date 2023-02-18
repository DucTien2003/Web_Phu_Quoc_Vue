<template>
  <div class="calldang">
    <div class="calldang-inner">
      <a href="tel: 0914 299 909">
        <img src="../assets/icons/call.svg" alt="image" />
      </a>

      <div class="calling-phone">
        <a class="f-w-700" href="tel: 0914 299 909">0914 299 909</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FixedElements"
};
</script>

<style scoped>
.calldang {
  position: fixed;
  bottom: 15px;
  display: inline-block;
  margin: 0 0 15px 10px;
  z-index: 99;
}

.calldang-inner {
  border-radius: 50%;
}

.calldang a {
  width: 50px;
  border-radius: 50%;
  background-color: #e3342f;
  padding: 10px;
}

.calldang img {
  width: 100%;
}

.calling-phone {
  position: fixed;
  bottom: 46px;
  left: 50px;
  display: inline-block;
  height: 30px;
  width: 100%;
  font-size: 21px;
  color: white;
}

.calling-phone a {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
  width: 172px;
}

.calling-phone a:hover {
  color: white;
}
</style>
