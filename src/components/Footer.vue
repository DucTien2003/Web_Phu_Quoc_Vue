<template>
  <footer id="footer">
    <div class="footer-wrapper row">
      <div class="col col-sm-12 col-lg-5">
        <div class="footer__inner-1">
          <div class="footer__img">
            <img src="../assets/images/footer_img.png" alt="image" />
          </div>
          <ul class="footer__list">
            <li class="footer__item">
              <img src="../assets/icons/right-arrow.svg" alt="image" />
              <span>Hotline: 0914 299 909 - 0984 299 909</span>
            </li>
            <li class="footer__item">
              <img
                class="padding-img"
                src="../assets/icons/right-arrow.svg"
                alt="image"
              />
              <span>
                Địa chỉ: Đường Nguyễn Văn Cừ, Ấp Suối Mây, Xã Dương Tơ, TP Phú
                Quốc Tỉnh Kiên Giang
              </span>
            </li>
            <li class="footer__item">
              <img src="../assets/icons/right-arrow.svg" alt="image" />
              <span>Website: Thuexedulichphuquoc.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-sm-12 col-lg-7">
        <div class="footer__inner-2 d-flex">
          <div class="col col-md-6 col-sm-12">
            <h2 class="footer__heading f-w-700">Dịch Vụ Thuê Xe Du Lịch</h2>
            <div class="footer__list">
              <li class="footer__item">
                <img src="../assets/icons/right-arrow.svg" alt="image" />
                <span>Thuê Xe 4 Chỗ</span>
              </li>
              <li class="footer__item">
                <img src="../assets/icons/right-arrow.svg" alt="image" />
                <span>Thuê Xe 5 Chỗ</span>
              </li>
              <li class="footer__item">
                <img src="../assets/icons/right-arrow.svg" alt="image" />
                <span>Thuê Xe 7 Chỗ</span>
              </li>
              <li class="footer__item">
                <img src="../assets/icons/right-arrow.svg" alt="image" />
                <span>Thuê Xe 16 Chỗ</span>
              </li>
            </div>
          </div>
          <div class="col col-md-6 col-sm-12">
            <h2 class="footer__heading f-w-700">Chính sách</h2>
            <div class="footer__list">
              <li class="footer__item">
                <img src="../assets/icons/right-arrow.svg" alt="image" />
                <span>Hình Thức Đặt Xe - Thuê Xe</span>
              </li>
              <li class="footer__item">
                <img src="../assets/icons/right-arrow.svg" alt="image" />
                <span>Hình Thức Thanh Toán</span>
              </li>
              <li class="footer__item">
                <img
                  class="padding-img"
                  src="../assets/icons/right-arrow.svg"
                  alt="image"
                />
                <span>Chính sách hủy dịch vụ và hoàn tiền khách hàng</span>
              </li>

              <li class="footer__item">
                <img src="../assets/icons/right-arrow.svg" alt="image" />
                <span>Chính sách Bảo Mật Thông Tin</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp"
};
</script>

<style scoped>
#footer {
  width: 100%;
  background-color: #273647;
  padding: 60px 0;
}

.footer-wrapper {
  color: white;
}

.footer__inner-1 {
  width: 100%;
}

.footer__img img {
  width: 80%;
}

.footer__inner-2 {
  flex-wrap: wrap;
}

.footer__list {
  padding: 0 15px 30px;
}

.footer__item {
  display: flex;
  padding: 7px 0;
  font-size: 1.76rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer__item span {
  padding-left: 20px;
}

.footer__item img {
  display: inline-block;
  width: 10px;
}

.padding-img {
  padding-bottom: 28px;
}

.footer__heading {
  font-size: 22px;
  margin: 0 0 10px 15px;
}
</style>
