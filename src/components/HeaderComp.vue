<template>
  <header id="header" class="header content-center">
    <div class="header-wrapper">
      <div class="header-inner container d-flex content-center">
        <!-- logo -->
        <router-link
          tag="div"
          :to="{ name: 'home' }"
          class="header__logo content-center"
        >
          <a title="THUÊ XE DU LỊCH PHÚ QUỐC">
            <img
              src="../assets/images/logo.png"
              alt="THUÊ XE DU LỊCH PHÚ QUỐC"
            />
          </a>
        </router-link>
        <!-- navbar -->
        <div class="header__menu hide-md-up">
          <img src="../assets/icons/menu.svg" alt="image" />
        </div>

        <div class="header__navbar content-center hide-md-down">
          <ul class="navbar__list d-flex">
            <router-link tag="li" :to="{ name: 'home' }" class="navbar__item">
              <a class="f-w-700">TRANG CHỦ</a>
            </router-link>
            <router-link
              tag="li"
              :to="{ name: 'recomment' }"
              class="navbar__item"
            >
              <a class="f-w-700">GIỚI THIỆU</a>
            </router-link>
            <router-link
              tag="li"
              :to="{ name: 'experience' }"
              class="navbar__item"
            >
              <a class="f-w-700">TRẢI NGHIỆM</a>
            </router-link>
            <router-link tag="li" :to="{ name: 'blog' }" class="navbar__item">
              <a class="f-w-700">BLOG</a>
            </router-link>
            <router-link
              tag="li"
              :to="{ name: 'contact' }"
              class="navbar__item"
            >
              <a class="f-w-700">LIÊN HỆ</a>
            </router-link>
            <router-link
              tag="li"
              :to="{ name: 'service' }"
              class="navbar__item has-sub-navbar position-relative"
            >
              <a class="f-w-700 content-center position-relative">
                DỊCH VỤ
                <img
                  src="../assets/icons/down-arrow.svg"
                  alt="down-arrow"
                  class="navbar__item__icon"
                />
              </a>
              <ul class="sub-navbar__list">
                <router-link
                  tag="li"
                  :to="{ name: 'home' }"
                  class="sub-navbar__item"
                  ><a>Thuê xe 16 chỗ</a></router-link
                >
                <router-link
                  tag="li"
                  :to="{ name: 'home' }"
                  class="sub-navbar__item"
                  ><a>Thuê xe 4 chỗ</a>
                </router-link>
                <router-link
                  tag="li"
                  :to="{ name: 'home' }"
                  class="sub-navbar__item"
                  ><a>Thuê xe 5 chỗ</a>
                </router-link>
                <router-link
                  tag="li"
                  :to="{ name: 'home' }"
                  class="sub-navbar__item"
                  ><a>Thuê xe 7 chỗ</a>
                </router-link>
                <router-link
                  tag="li"
                  :to="{ name: 'home' }"
                  class="sub-navbar__item"
                >
                  <a>Thuê Cano Phú Quốc</a>
                </router-link>
              </ul>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",
  data() {
    return {};
  }
};
</script>

<style scoped>
.header {
  height: 90px;
}

.header,
.header-wrapper {
  width: 100%;
  z-index: 30;
}

.header-inner {
  justify-content: space-between;
  padding: 8px 15px;
  border-bottom: 1px solid rgb(219, 217, 217);
}

.header__logo {
  width: 348px;
  margin-right: 30px;
}

.header__logo a img {
  display: block;
  width: 100%;
  max-height: 90px;
}

.navbar__list {
  display: flex;
  flex-wrap: wrap;
}

.navbar__item a {
  font-size: 1.76rem;
  letter-spacing: 0.352;
  color: #0b344e;
  padding: 10px 0;
}

.navbar__item + .navbar__item {
  margin-left: 20px;
}

.navbar__item__icon {
  width: 12px;
  margin-left: 2px;
  opacity: 0.6;
}

.has-sub-navbar:hover .sub-navbar__list {
  display: block;
}

.sub-navbar__list {
  position: absolute;
  top: calc(100% + 4px);
  right: -10px;
  display: none;
  padding: 20px;
  min-width: 260px;
  z-index: 9;
  color: #777;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgb(0 0 0 / 0.15);
  animation: appear 0.2s ease-in;
}

.sub-navbar__list::before {
  content: "";
  position: absolute;
  top: -18px;
  right: 15%;
  transform: translateX(-50%);
  border: 9px solid;
  border-color: transparent transparent white;
  pointer-events: none;
  z-index: -999;
}

.sub-navbar__list::after {
  content: "";
  position: absolute;
  top: -8px;
  right: 0;
  width: 100%;
  height: 20px;
}

.sub-navbar__list .sub-navbar__item a {
  width: 100%;
  margin: 0 5px;
  color: #777;
  font-weight: 400;
}

.sub-navbar__item + .sub-navbar__item {
  border-top: 1px solid #ececec;
}
</style>
