<template>
  <header class="header" :class="{'header--active' : scrollPosition > 0}">

    <div class="header__container">

      <svg class="header__burger" width="30" height="30" @click="sidebarOpen = true">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>

      <img src="../assets/img/logo.svg" alt="" class="header__logo">

      <div class="header__button-group">
        <a
          href="https://docs.google.com/document/d/1FdJnKqeiV1rvhLDw8JHEWGNLQU-FrwzxT-wuT9twC-U/edit#heading=h.5l6clncjd0vn"
          class="header__btn button">Правила участия</a>
        <button class="header__btn button" @click="modalOpen = true">Связаться с нами</button>
      </div>

    </div>

    <div class="header__sidebar sidebar" :class="{'sidebar--open' : sidebarOpen}">

      <svg class="sidebar__close" width="16" height="16" @click="sidebarOpen = false">
        <use href="../assets/img/icons.svg#close"></use>
      </svg>

      <h6 class="sidebar__title">
        Меню
      </h6>

      <div class="sidebar__list">
        <p class="sidebar__item"
           v-scroll-to="{el: '#prize', duration: 700, offset: -80}"
           @click="sidebarOpen = false">Призовой фонд</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#about', duration: 700, offset: -80}"
           @click="sidebarOpen = false">О хакатоне</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#task', duration: 700, offset: -80}"
           @click="sidebarOpen = false">Задача</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#audience', duration: 700, offset: -80}"
           @click="sidebarOpen = false">Целевая аудитория</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#program', duration: 700, offset: -80}"
           @click="sidebarOpen = false">Программа</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#organizers', duration: 700, offset: -80}"
           @click="sidebarOpen = false">Организаторы</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#place', duration: 700, offset: -80}"
           @click="sidebarOpen = false">Место проведения</p>
      </div>

      <div class="sidebar__btn-group">
        <a
          href="https://docs.google.com/document/d/1FdJnKqeiV1rvhLDw8JHEWGNLQU-FrwzxT-wuT9twC-U/edit#heading=h.5l6clncjd0vn"
          class="sidebar__btn button">Правила участия</a>
        <button class="sidebar__btn button" @click="modalOpen = true; sidebarOpen = false">Связаться с нами</button>
      </div>
    </div>

    <div class="header__modal modal" v-show="modalOpen">

      <form @click.prevent="sendForm" class="modal__wrapper" v-if="!checked">

        <svg class="modal__close" width="16" height="16" @click="modalOpen = false">
          <use href="../assets/img/icons.svg#close"></use>
        </svg>

        <h4 class="modal__title">
          Связаться с нами
        </h4>

        <p class="modal__subtitle">
          Если у Вас есть какие-либо вопросы, пишите нам, мы с радостью ответим!
        </p>

        <div class="modal__input-list">

          <input type="text" class="modal__input" placeholder="Ваше имя" v-model="name">
          <input type="email" class="modal__input" placeholder="Ваша электронная почта" v-model="email">
          <input type="text" class="modal__input" placeholder="Текст сообщения" v-model="text">

        </div>

        <div class="modal__error">
          {{ errorMessage }}
        </div>

        <button class="modal__btn button">Отправить</button>

      </form>

      <div class="modal__wrapper modal__wrapper--centered" v-else>
        <svg class="modal__close" width="16" height="16" @click="modalOpen = false">
          <use href="../assets/img/icons.svg#close"></use>
        </svg>

        <img src="../assets/img/icons/checked.svg" alt="" class="modal__checked">

        <h4 class="modal__title">
          Ваш запрос успешно отправлен!
        </h4>
      </div>

    </div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
      modalOpen: false,
      scrollPosition: null,
      name: '',
      email: '',
      text: '',
      errorMessage: '',
      checked: false
    }
  },
  computed: {},
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },
    sendForm() {
      if (this.email !== '' && this.text !== '' && this.name !== '') {
        this.$axios.post(process.env.API_URL + 'supports/', {
          name: this.name,
          email: this.email,
          text: this.text
        })
          .then(response => {
            if (response.status === 201) {
              this.checked = true
            }
          })
          .catch(e => console.log(e))
      } else {
        this.errorMessage = 'Пожалуйста, заполните все поля'
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
};
</script>

<style lang="scss" scoped>

</style>
