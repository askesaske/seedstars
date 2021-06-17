<template>
  <header class="header" :class="{'header--active' : scrollPosition > 0}">

    <div class="header__container">

      <svg class="header__burger" width="30" height="30" @click="sidebarOpen = true">
        <use href="../assets/img/icons.svg#burger"></use>
      </svg>

      <!--      <div class="header__lang">-->
      <!--        <span @click="$i18n.locale = 'kz'">KAZ</span>-->
      <!--        <span @click="$i18n.locale = 'ru'">RUS</span>-->
      <!--        <span @click="$i18n.locale = 'en'">ENG</span>-->
      <!--      </div>-->

      <img src="../assets/img/logo.svg" alt="" class="header__logo">

      <div class="header__button-group">

        <div class="header__lang-box" v-click-outside="hideLanguage" @click="toggleLanguage">
          {{ this.language }}
          <div class="header__lang-dropdown" v-if="languageToggle">
            <p @click="changeLanguage(language, i)" v-for="(language, i) in languages" :key="language">
              {{ language }}
            </p>
          </div>
        </div>

        <a
          href="https://docs.google.com/document/d/1FdJnKqeiV1rvhLDw8JHEWGNLQU-FrwzxT-wuT9twC-U/edit#heading=h.5l6clncjd0vn"
          class="header__btn button">{{ $t('buttons.text1') }}</a>
        <button class="header__btn button" @click="modalOpen = true">{{ $t('buttons.text2') }}</button>
      </div>

    </div>

    <div class="header__sidebar sidebar" :class="{'sidebar--open' : sidebarOpen}">

      <svg class="sidebar__close" width="16" height="16" @click="sidebarOpen = false">
        <use href="../assets/img/icons.svg#close"></use>
      </svg>

      <h6 class="sidebar__title">
        {{ $t('sidebar.menu') }}
      </h6>

      <div class="sidebar__list">
        <p class="sidebar__item"
           v-scroll-to="{el: '#prize', duration: 700, offset: -80}"
           @click="sidebarOpen = false">{{ $t('sidebar.text1') }}</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#about', duration: 700, offset: -80}"
           @click="sidebarOpen = false">{{ $t('sidebar.text2') }}</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#task', duration: 700, offset: -80}"
           @click="sidebarOpen = false">{{ $t('sidebar.text3') }}</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#audience', duration: 700, offset: -80}"
           @click="sidebarOpen = false">{{ $t('sidebar.text4') }}</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#program', duration: 700, offset: -80}"
           @click="sidebarOpen = false">{{ $t('sidebar.text5') }}</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#organizers', duration: 700, offset: -80}"
           @click="sidebarOpen = false">{{ $t('sidebar.text6') }}</p>
        <p class="sidebar__item"
           v-scroll-to="{el: '#place', duration: 700, offset: -80}"
           @click="sidebarOpen = false">{{ $t('sidebar.text7') }}</p>
      </div>

      <div class="sidebar__btn-group">
        <a
          href="https://docs.google.com/document/d/1FdJnKqeiV1rvhLDw8JHEWGNLQU-FrwzxT-wuT9twC-U/edit#heading=h.5l6clncjd0vn"
          class="sidebar__btn button">{{ $t('buttons.text1') }}</a>
        <button class="sidebar__btn button" @click="modalOpen = true; sidebarOpen = false">
          {{ $t('buttons.text2') }}
        </button>
      </div>

      <div class="sidebar__lang-box">
        <div class="sidebar__lang"
             @click="$i18n.locale = 'ru'"
             :class="{'sidebar__lang--active' : $i18n.locale === 'ru'}">РУС</div>
        <div class="sidebar__lang"
             @click="$i18n.locale = 'en'"
             :class="{'sidebar__lang--active' : $i18n.locale === 'en'}">ENG</div>
        <div class="sidebar__lang"
             @click="$i18n.locale = 'kz'"
             :class="{'sidebar__lang--active' : $i18n.locale === 'kz'}">ҚАЗ</div>
      </div>

    </div>

    <div class="header__modal modal" v-show="modalOpen">

      <form @click.prevent="sendForm" class="modal__wrapper" v-if="!checked">

        <svg class="modal__close" width="16" height="16" @click="modalOpen = false">
          <use href="../assets/img/icons.svg#close"></use>
        </svg>

        <h4 class="modal__title">
          {{ $t('modal.title') }}
        </h4>

        <p class="modal__subtitle">
          {{ $t('modal.subtitle') }}
        </p>

        <div class="modal__input-list">

          <input type="text" class="modal__input" :placeholder="$t('modal.name')" v-model="name">
          <input type="email" class="modal__input" :placeholder="$t('modal.email')" v-model="email">
          <input type="text" class="modal__input" :placeholder="$t('modal.message')" v-model="text">

        </div>

        <div class="modal__error">{{ errorMessage }}</div>

        <button class="modal__btn button">{{ $t('buttons.text3') }}</button>

      </form>

      <div class="modal__wrapper modal__wrapper--centered" v-else>
        <svg class="modal__close" width="16" height="16" @click="modalOpen = false">
          <use href="../assets/img/icons.svg#close"></use>
        </svg>

        <img src="../assets/img/icons/checked.svg" alt="" class="modal__checked">

        <h4 class="modal__title">
          {{ $t('modal.success') }}
        </h4>
      </div>

    </div>

  </header>
</template>

<script>
import ClickOutside from 'vue-click-outside';

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
      checked: false,
      languages: [
        "РУС",
        "ENG",
        "ҚАЗ"
      ],
      language: "РУС",
      languageToggle: false
    }
  },
  computed: {},
  directives: {
    ClickOutside
  },
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
        if (this.$i18n.locale === 'ru') {
          this.errorMessage = 'Пожалуйста, заполните все поля'
        }
        if (this.$i18n.locale === 'kz') {
          this.errorMessage = 'Барлық өрістерді толтырыңыз'
        }
        if (this.$i18n.locale === 'en') {
          this.errorMessage = 'Please fill in all fields'
        }
      }
    },
    changeLanguage(lang, i) {
      if (this.language !== lang) {
        this.language = lang;
        this.languages.splice(i, 1)
        this.languages.unshift(lang)

        if (lang === 'РУС') {
          this.$i18n.locale = 'ru'
        }
        if (lang === 'ENG') {
          this.$i18n.locale = 'en'
        }
        if (lang === 'ҚАЗ') {
          this.$i18n.locale = 'kz'
        }
      }
      this.languageToggle = false;
    },
    toggleLanguage() {
      this.languageToggle = !this.languageToggle;
    },
    hideLanguage() {
      this.languageToggle = false;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
};
</script>

<style lang="scss" scoped>

</style>
