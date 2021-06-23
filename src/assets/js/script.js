import delimiters from "./delimiters"

const modal_app = Vue.createApp({
    data() {
      return {
        isModalVisible: false,
        //currentModal: 'Login',
      }
    },
    methods: {
      showModal() {
        this.isModalVisible = true
      },
      closeModal() {
        this.isModalVisible = false
      }
    },
    computed: {
      currentModalComponent() {
        return 'modal-' + this.currentModal.toLowerCase()
      }
    },
    ...delimiters
})

modal_app.component('modal-login', {
  template: `<div class="modal__content">
    <button class="modal__close" @click="close">
      <img src="assets/images/close.svg">
    </button>

    <form class="form" action="/" method="post">
      <h1 class="form__title">Вход</h1>

      <div class="form__group">
          <input class="form__control" type="text" placeholder="Имя аккаунта">
          <span class="form__line"></span>
      </div>

      <div class="form__group">
          <input class="form__control" type="password" placeholder="Пароль">
          <span class="form__line"></span>
      </div>

      <div class="form__footer">
          <div class="form__group form-btn">
            <button class="btn" type="submit">Войти</button>
          </div>

          <ul class="form__footer-list">
            <li>
                <a href="#" class="form__appear">восстановление</a>
            </li>
            <li>
                <a href="#" class="form__appear">регистрация</a>
            </li>
          </ul>
      </div>
    </form>
  </div>`
})

modal_app.component('modal-profile', {
  template: `<div class="modal__content">
    <button class="modal__close" @click="closeModal">
      <img src="assets/images/close.svg">
    </button>

    <form class="form" action="/" method="post">
      <h1 class="form__title">Информация об аккаунте</h1>
      <div class="form__group">
          <input class="form__control" type="text" value="[nickname]" readonly>
          <span class="form__line"></span>
      </div>

      <div class="form__group">
          <input class="form__control" type="email" value="[e-mail]" readonly>
          <span class="form__line"></span>
      </div>

      <div class="form__group">
          <input class="form__control" type="password" placeholder="Новый пароль">
          <span class="form__line"></span>
      </div>

      <div class="form__group">
          <input class="form__control" type="password" placeholder="Подтвердите пароль">
          <span class="form__line"></span>
      </div>

      <div class="form__footer">
          <div class="form__group">
            <button class="btn" type="submit">Сохранить</button>
          </div>
      </div>
    </form>
  </div>`
})

modal_app.mount('#dynamic-component-modal')