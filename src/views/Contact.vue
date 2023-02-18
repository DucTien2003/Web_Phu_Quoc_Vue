<template>
  <main id="main">
    <div class="contact-content">
      <div class="row">
        <div class="col col-lg-12 content-center contact-container flex-column">
          <section class="contact__banner d-block">
            <img
              src="../assets/images/contact/contact_banner.png"
              alt="image"
            />
          </section>
          <section class="contact__main d-flex row">
            <div
              class="contact__main-text flex-column col-12 col-sm-12 col-md-6"
            >
              <h1 class="f-w-700">THUÊ XE DU LỊCH PHÚ QUỐC</h1>
              <p>
                Chuyên cho Thuê xe du lịch 4-5-7-16 chỗ tại Phú Quốc Kiên Giang
                <br />
                Đảm bảo chất lượng dịch vụ uy tín với giá tốt nhất Tài xế lái xe
                nhiều năm kinh nghiệm, Lái xe an toàn, Vui vẻ, Nhiệt tình, hỗ
                trợ tư vấn - báo giá 24/7, Số lượng xe nhiều nên không lo lắng
                vấn đề thiếu xe. <br /><br />
                Hãy để chúng tôi đồng hành cùng bạn khám phá những điều tuyệt
                vời tại Phú Quốc xinh đẹp
              </p>
              <a class="recomment__btn">HOTLINE: 0914299909- 0984299909</a>
            </div>
            <div
              class="recomment__content__img col-12 col-sm-12 col-md-6 content-center"
            >
              <div class="contact__form recomment__img">
                <h1 class="contact__form__heading text-center f-w-700">
                  ĐẶT XE
                </h1>
                <form>
                  <div class="contact__input">
                    <div class="contact__input__half col col-sm-12 col-md-6">
                      <input type="text" placeholder="Điểm Đi" />
                    </div>
                    <div class="contact__input__half col col-sm-12 col-md-6">
                      <input type="text" placeholder="Điểm Đến" />
                    </div>
                  </div>
                  <div class="contact__input">
                    <div class="contact__input__half col col-sm-12 col-md-6">
                      <input type="text" placeholder="Ngày Thuê" />
                    </div>
                    <div class="contact__input__half col col-sm-12 col-md-6">
                      <select name="amount" id="contact__input__amount">
                        <option value="default">Chọn loại xe</option>
                        <option value="4">Xe 4 chỗ</option>
                        <option value="5">Xe 5 chỗ</option>
                        <option value="7">Xe 7 chỗ</option>
                        <option value="16">Xe 16 chỗ</option>
                      </select>
                    </div>
                  </div>
                  <div class="contact__input">
                    <div class="contact__input__half col col-sm-12 col-md-6">
                      <input type="text" placeholder="Tên Bạn" />
                    </div>
                    <div class="contact__input__half col col-sm-12 col-md-6">
                      <input type="text" placeholder="Số Điện Thoại" />
                    </div>
                  </div>
                  <div class="contact__input--big col-sm-12">
                    <textarea
                      name=""
                      id=""
                      cols="40"
                      rows="10"
                      placeholder="Nội Dung Yêu Cầu"
                    ></textarea>
                  </div>
                  <button class="contact__input__submit f-w-700" type="submit">
                    ĐẶT XE NGAY
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.contact-content {
  padding: 60px 0px;
}

.contact-container {
  padding: 0 44px;
}

.contact__banner {
  width: 100%;
}

.contact__banner img {
  width: 100%;
}

.contact__main-text {
  padding: 40px 50px 20px 50px;
}

.contact__main-text h1 {
  padding-bottom: 10px;
  font-size: 3rem;
  color: #00a550;
}

.contact__main-text p {
  font-size: 2.1rem;
  margin-bottom: 26px;
  font-weight: 400;
  color: #0a0a0a;
}

.contact__form {
  padding: 20px 10px 40px;
  width: 100%;
  margin: 0;
  /* height: 100%; */
}

.contact__form h1 {
  font-size: 2.2rem;
  color: #f00;
  margin-bottom: 10px;
}

.contact__input {
  display: flex;
  flex-wrap: wrap;
}

.contact__input__half {
  padding: 0 10px;
  margin-bottom: 14px;
}

.contact__input__half input,
.contact__input__half select {
  width: 100%;
  height: 42px;
  padding: 0 14px;
  border: 1px solid #ddd;
  font-size: 1.6rem;
}

.contact__input__half:focus select,
.contact__input__half:focus input {
  box-shadow: 0 0 5px #ccc;
}

.contact__input--big {
  padding: 0 10px;
}

.contact__input--big textarea {
  width: 100%;
  height: 120px;
  padding: 12px;
  font-size: 1.6rem;
  border: 1px solid #ddd;
}

.contact__input__submit {
  padding: 6px 15px;
  margin-top: 12px;
  background-color: #00a550;
  font-size: 1.8rem;
  color: white;
  border: none;
  cursor: pointer;
}

.recomment__btn {
  border-radius: 30px;
  padding: 10px 30px;
  color: #fff;
  background-color: #b20000;
  text-align: center;
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 50px;
}

.recomment__btn:hover {
  cursor: pointer;
  color: #fff;
  box-shadow: inset 0 0 0 100px rgb(0 0 0 / 20%);
}
</style>
