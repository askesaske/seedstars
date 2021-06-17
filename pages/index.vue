<template>
  <main class="main">
    <section class="main__section welcome-section">
      <div class="welcome-section__container">
        <div class="welcome-section__socials">
          <a
            href="https://www.facebook.com/JAStalents"
            class="welcome-section__social"
          >
            <svg width="30" height="30">
              <use href="../assets/img/icons.svg#fb"></use>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/jastalents/"
            class="welcome-section__social"
          >
            <svg width="30" height="30">
              <use href="../assets/img/icons.svg#inst"></use>
            </svg>
          </a>
          <a
            href="https://t.me/blockchain_hack"
            class="welcome-section__social"
          >
            <svg width="30" height="30">
              <use href="../assets/img/icons.svg#tg"></use>
            </svg>
          </a>
        </div>

        <p class="welcome-section__date">
          {{ $t('welcome.date') }}
        </p>

        <no-ssr>
          <vue-count-down
            :time="dateTill"
            v-slot="{ days, hours, minutes, seconds }"
            class="welcome-section__countdown"
          >
            <div class="welcome-section__item">
              <div class="welcome-section__time-wrapper">
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__number">
                  <span v-show="days < 10">{{ "0" + days }}</span>
                  <span v-show="days >= 10">{{ days }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                {{ $t('welcome.days') }}
              </div>
            </div>

            <div class="welcome-section__item">
              <div class="welcome-section__time-wrapper">
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__number">
                  <span v-show="hours < 10">{{ "0" + hours }}</span>
                  <span v-show="hours >= 10">{{ hours }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                {{ $t('welcome.hours') }}
              </div>
            </div>

            <div class="welcome-section__item">
              <div class="welcome-section__time-wrapper">
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__number">
                  <span v-show="minutes < 10">{{ "0" + minutes }}</span>
                  <span v-show="minutes >= 10">{{ minutes }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                {{ $t('welcome.minutes') }}
              </div>
            </div>

            <div class="welcome-section__item">
              <div class="welcome-section__time-wrapper">
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__number">
                  <span v-show="seconds < 10">{{ "0" + seconds }}</span>
                  <span v-show="seconds >= 10">{{ seconds }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                {{ $t('welcome.seconds') }}
              </div>
            </div>
          </vue-count-down>
        </no-ssr>

        <div
          class="welcome-section__btn button" @click="participate">
          {{ $t('welcome.participate') }}
        </div>

        <p class="welcome-section__heading">
          {{ $t('welcome.blockchain') }}
        </p>
      </div>
    </section>

    <section class="main__section prize-section" id="prize">
      <div class="prize-section__container">
        <div class="prize-section__heading heading-medium">
          <h2 class="heading-medium__white">{{ $t('prize.heading') }}</h2>
          <h2 class="heading-medium__outlined">{{ $t('prize.heading') }}</h2>
        </div>

        <div class="prize-section__row">
          <div class="prize-section__card">
            <span class="prize-section__place-text">
              {{ $t('prize.place1') }}
            </span>
            <p class="prize-section__sum">
              1 000 000 KZT
            </p>
          </div>

          <div class="prize-section__card">
            <span class="prize-section__place-text">
              {{ $t('prize.place2') }}
            </span>
            <p class="prize-section__sum">
              500 000 KZT
            </p>
          </div>

          <div class="prize-section__card">
            <span class="prize-section__place-text">
              {{ $t('prize.place3') }}
            </span>
            <p class="prize-section__sum">
              300 000 KZT
            </p>
          </div>
        </div>

        <div class="prize-section__info">
          <h5 class="prize-section__title prize-section__title--mb20">
            {{ $t('prize.title') }}
          </h5>

          <div class="prize-section__fluid-box">
            <h5 class="prize-section__title">
              {{ $t('prize.itemTitle1') }}
            </h5>
            <p class="prize-section__text">
              {{ $t('prize.itemText1') }}
            </p>
          </div>

          <div class="prize-section__fluid-box">
            <h5 class="prize-section__title">
              {{ $t('prize.itemTitle2') }}
            </h5>
            <p class="prize-section__text">
              {{ $t('prize.itemText2') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="main__about-section about-section"
             :class="{'about-section--below' : $i18n.locale !== 'ru'}"
             id="about">
      <div class="about-section__container">
        <div class="about-section__heading heading-medium">
          <h2 class="heading-medium__white" v-html="$t('about.heading')"></h2>
          <h2 class="heading-medium__outlined" v-html="$t('about.heading')"></h2>
        </div>

        <div class="about-section__wrapper">
          <div class="about-section__item">
            <div class="about-section__icon-box">
              <span class="about-section__index">01</span>

              <svg class="about-section__icon" width="85" height="30">
                <use href="../assets/img/icons.svg#list-icon"></use>
              </svg>
            </div>

            <div class="about-section__info">
              <h4 class="about-section__title">
                {{ $t('about.title1') }}
              </h4>

              <p class="about-section__text">
                {{ $t('about.text1') }}
              </p>
            </div>
          </div>

          <div class="about-section__item">
            <div class="about-section__icon-box">
              <span class="about-section__index">02</span>

              <svg class="about-section__icon" width="85" height="30">
                <use href="../assets/img/icons.svg#list-icon"></use>
              </svg>
            </div>

            <div class="about-section__info">
              <h4 class="about-section__title">
                {{ $t('about.title2') }}
              </h4>

              <p class="about-section__text">
                {{ $t('about.text2') }}
              </p>
            </div>
          </div>

          <div class="about-section__item">
            <div class="about-section__icon-box">
              <span class="about-section__index">03</span>

              <svg class="about-section__icon" width="85" height="30">
                <use href="../assets/img/icons.svg#list-icon"></use>
              </svg>
            </div>

            <div class="about-section__info">
              <h4 class="about-section__title">
                {{ $t('about.title3') }}
              </h4>

              <p class="about-section__text">
                {{ $t('about.text3') }}
              </p>
            </div>
          </div>
        </div>

        <div class="about-section__cards">
          <div class="about-section__card">
            <div class="about-section__count-box">
              <span class="about-section__num">01</span>

              <svg class="about-section__line" width="22" height="30">
                <use href="../assets/img/icons.svg#count-line"></use>
              </svg>

              <span class="about-section__num about-section__num--grey"
              >03</span
              >
            </div>

            <h5 class="about-section__date">14.06.2021</h5>

            <p class="about-section__card-text">
              {{ $t('about.cardText1') }}
            </p>
          </div>

          <div class="about-section__card">
            <div class="about-section__count-box">
              <span class="about-section__num">02</span>

              <svg class="about-section__line" width="22" height="30">
                <use href="../assets/img/icons.svg#count-line"></use>
              </svg>

              <span class="about-section__num about-section__num--grey"
              >03</span
              >
            </div>

            <h5 class="about-section__date">24.06.2021</h5>

            <p class="about-section__card-text">
              {{ $t('about.cardText2') }}
            </p>
          </div>

          <div class="about-section__card">
            <div class="about-section__count-box">
              <span class="about-section__num">03</span>

              <svg class="about-section__line" width="22" height="30">
                <use href="../assets/img/icons.svg#count-line"></use>
              </svg>

              <span class="about-section__num about-section__num--grey"
              >03</span
              >
            </div>

            <h5 class="about-section__date">25-28.06.2021</h5>

            <p class="about-section__card-text">
              {{ $t('about.cardText3') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section task-section" id="task">
      <div class="task-section__container">
        <div class="task-section__heading heading-medium">
          <h2 class="heading-medium__white">{{ $t('task.heading') }}</h2>
          <h2 class="heading-medium__outlined">{{ $t('task.heading') }}</h2>
        </div>

        <div class="task-section__item">
          <div class="task-section__icon-box">
            <span class="task-section__index">01</span>

            <svg class="task-section__icon" width="85" height="30">
              <use href="../assets/img/icons.svg#list-icon"></use>
            </svg>
          </div>

          <div class="task-section__info">
            <h4 class="about-section__title">
              {{ $t('task.title') }}
            </h4>

            <p class="task-section__text">
              {{ $t('task.text1') }}
            </p>

            <p class="task-section__text">
              {{ $t('task.text2') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section audience-section" id="audience">
      <div class="audience-section__container">
        <div class="audience-section__heading heading-medium">
          <h2 class="heading-medium__white" v-html="$t('audience.heading')"></h2>
          <h2 class="heading-medium__outlined" v-html="$t('audience.heading')"></h2>
        </div>

        <div class="audience-section__subtitle">
          {{ $t('audience.subtitle') }}
        </div>

        <div class="audience-section__row">
          <img
            src="../assets/img/python.png"
            alt=""
            class="audience-section__img"
          />
          <img
            src="../assets/img/JS.png"
            alt=""
            class="audience-section__img"
          />
          <img
            src="../assets/img/golang.png"
            alt=""
            class="audience-section__img"
          />
        </div>

        <div class="audience-section__row">
          <img
            src="../assets/img/svelte.png"
            alt=""
            class="audience-section__img"
          />
          <img
            src="../assets/img/Meteor-logo.png"
            alt=""
            class="audience-section__img"
          />
          <img
            src="../assets/img/React.png"
            alt=""
            class="audience-section__img"
          />
        </div>
      </div>
    </section>

    <section class="main__section program-section" id="program">
      <div class="program-section__container">
        <div class="audience-section__heading heading-medium">
          <h2 class="heading-medium__white" v-html="$t('program.heading')"></h2>
          <h2 class="heading-medium__outlined" v-html="$t('program.heading')"></h2>
        </div>

        <div class="program-section__list">
          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                25
              </p>
              <p class="program-section__month">
                {{ $t('program.month') }}
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                {{ $t('program.title1') }}
              </h5>
              <p class="program-section__subtitle">
                {{ $t('program.text1') }}
              </p>
            </div>
          </div>

          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                26
              </p>
              <p class="program-section__month">
                {{ $t('program.month') }}
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                {{ $t('program.title2') }}
              </h5>
              <p class="program-section__subtitle">
                {{ $t('program.text2') }}
              </p>
            </div>
          </div>

          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                27
              </p>
              <p class="program-section__month">
                {{ $t('program.month') }}
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                {{ $t('program.title3') }}
              </h5>
              <p class="program-section__subtitle">
                {{ $t('program.text3') }}
              </p>
            </div>
          </div>

          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                28
              </p>
              <p class="program-section__month">
                {{ $t('program.month') }}
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                {{ $t('program.title4') }}
              </h5>
              <p class="program-section__subtitle">
                {{ $t('program.text4') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section organizers-section" id="organizers">
      <div class="organizers-section__container">
        <div class="organizers-section__heading heading-medium">
          <h2 class="heading-medium__white" v-html="$t('organizers.heading')"></h2>
          <h2 class="heading-medium__outlined" v-html="$t('organizers.heading')"></h2>
        </div>

        <div class="organizers-section__row">
          <div class="organizers-section__info organizers-section__info--first">
            <div
              class="organizers-section__title organizers-section__title--mt50"
            >
              SEEDSTARS
            </div>

            <div class="organizers-section__text">
              {{ $t('organizers.text1') }}
            </div>

            <div
              class="organizers-section__address organizers-section__address--top200"
            >
              <svg class="organizers-section__icon" width="24" height="24">
                <use href="../assets/img/icons.svg#square-dot"></use>
              </svg>
              <span>{{ $t('organizers.address1') }}</span>
            </div>
          </div>

          <div
            class="organizers-section__img-box organizers-section__img-box--first"
          >
            <div class="organizers-section__img-wrapper">
              <img
                src="../assets/img/seedstars-org.svg"
                alt=""
                class="organizers-section__img"
              />
            </div>

            <div class="organizers-section__num">
              1
            </div>
          </div>
        </div>

        <div class="organizers-section__row organizers-section__row--reverse">
          <div
            class="organizers-section__info organizers-section__info--second"
          >
            <div class="organizers-section__title">
              Jas Nur-Sultan
            </div>

            <div class="organizers-section__text" v-html="$t('organizers.text2')"></div>

            <div
              class="organizers-section__address organizers-section__address--second"
            >
              <svg class="organizers-section__icon" width="24" height="24">
                <use href="../assets/img/icons.svg#square-dot"></use>
              </svg>
              <span>{{ $t('organizers.address2') }}</span>
            </div>
          </div>

          <div
            class="organizers-section__img-box organizers-section__img-box--second"
          >
            <div class="organizers-section__img-wrapper">
              <img
                src="../assets/img/jas.svg"
                alt=""
                class="organizers-section__img"
              />
            </div>
            <div class="organizers-section__num">
              2
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="main__section place-section" id="place">
      <div class="place-section__container">
        <div class="place-section__heading heading-medium">
          <h2 class="heading-medium__white" v-html="$t('place.heading')"></h2>
          <h2 class="heading-medium__outlined" v-html="$t('place.heading')"></h2>
        </div>

        <div class="place-section__btn-group">
          <button
            class="place-section__btn button"
            @click="chooseCity('Almaty')"
            :class="{ 'button--grey': city !== 'Almaty' }"
          >
            {{ $t('place.almaty') }}
          </button>
          <button
            class="place-section__btn button"
            @click="chooseCity('Nur-Sultan')"
            :class="{ 'button--grey': city !== 'Nur-Sultan' }"
          >
            {{ $t('place.astana') }}
          </button>
        </div>
      </div>

      <div class="place-section__map-box" v-show="city === 'Almaty'">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.542627766068!2d76.92705151571266!3d43.21908158841082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f307c71a35f%3A0x5b07dae73f0d5066!2z0JHQuNC30L3QtdGBLdCm0LXQvdGC0YAg0JXRgdC10L3RgtCw0Lkg0KLQsNGD0Y3RgCwg0L_RgNC-0YHQv9C10LrRgiBB0LvRjC3QpNCw0YDQsNCx0LggNzcvNywg0JDQu9C80LDRgtGLIDA1MDA0MA!5e0!3m2!1sru!2skz!4v1623660478816!5m2!1sru!2skz"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          class="place-section__map"
        ></iframe>

        <div class="place-section__address-box">
          <div class="place-section__row">
            <svg width="19" height="18">
              <use href="../assets/img/icons.svg#map-pin"></use>
            </svg>
            <span v-html="$t('place.address1')"></span>
          </div>
        </div>
      </div>

      <div class="place-section__map-box" v-show="city === 'Nur-Sultan'">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.0194017180393!2d71.41816375719158!3d51.08964945035462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245850d5131281b%3A0x822ca9d6999e5b5d!2z0JDQutCw0LTQtdC80LjRjyDQldC70LHQsNGB0Ys!5e0!3m2!1sru!2skz!4v1623464872299!5m2!1sru!2skz"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          class="place-section__map"
        ></iframe>

        <div class="place-section__address-box">
          <div class="place-section__row">
            <svg width="19" height="18">
              <use href="../assets/img/icons.svg#map-pin"></use>
            </svg>
            <span v-html="$t('place.address2')"></span>
          </div>
        </div>
      </div>
    </section>

    <noscript>
      <img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=820774322176569&ev=PageView&noscript=1"
      />
    </noscript>
  </main>
</template>

<script>
import VueCountDown from "@chenfengyuan/vue-countdown";

export default {
  data() {
    return {
      city: "Almaty"
    };
  },

  components: {
    VueCountDown
  },

  computed: {
    dateTill() {
      let finishDate = new Date(2021, 5, 25, 0, 0);
      let today = new Date();
      return finishDate - today;
    }
  },

  methods: {
    chooseCity(city) {
      this.city = city;
    },
    participate() {
      this.$fb.track('track', 'Lead')
      window.location.href = 'https://form.jotform.com/211601184592451'

    }
  },
  mounted() {
    this.$fb.enable();
  }
};
</script>

<style></style>
