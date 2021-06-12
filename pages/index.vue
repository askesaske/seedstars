<template>
  <main class="main">
    <section class="main__section welcome-section">

      <div class="welcome-section__container">

        <div class="welcome-section__socials">
          <a href="https://www.facebook.com/JAStalents" class="welcome-section__social">
            <svg width="30" height="30">
              <use href="../assets/img/icons.svg#fb"></use>
            </svg>
          </a>
          <a href="https://www.instagram.com/jastalents/" class="welcome-section__social">
            <svg width="30" height="30">
              <use href="../assets/img/icons.svg#inst"></use>
            </svg>
          </a>
          <a href="https://t.me/blockchain_hack" class="welcome-section__social">
            <svg width="30" height="30">
              <use href="../assets/img/icons.svg#tg"></use>
            </svg>
          </a>
        </div>

        <p class="welcome-section__date">
          25-28 ИЮНЯ
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
                  <span v-show="days < 10">{{ '0' + days }}</span>
                  <span v-show="days >= 10">{{ days }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                Дней
              </div>
            </div>

            <div class="welcome-section__item">
              <div class="welcome-section__time-wrapper">
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__number">
                  <span v-show="hours < 10">{{ '0' + hours }}</span>
                  <span v-show="hours >= 10">{{ hours }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                Часов
              </div>
            </div>

            <div class="welcome-section__item">
              <div class="welcome-section__time-wrapper">
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__number">
                  <span v-show="minutes < 10">{{ '0' + minutes }}</span>
                  <span v-show="minutes >= 10">{{ minutes }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                Минут
              </div>
            </div>

            <div class="welcome-section__item">
              <div class="welcome-section__time-wrapper">
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__time-box"></div>
                <div class="welcome-section__number">
                  <span v-show="seconds < 10">{{ '0' + seconds }}</span>
                  <span v-show="seconds >= 10">{{ seconds }}</span>
                </div>
              </div>
              <div class="welcome-section__time-text">
                Секунд
              </div>
            </div>

          </vue-count-down>
        </no-ssr>

        <a href="https://form.jotform.com/211601184592451" class="welcome-section__btn button">
          Принять участие
        </a>

        <p class="welcome-section__heading">
          БЛОКЧЕЙН
        </p>
      </div>

    </section>

    <section class="main__section prize-section" id="prize">

      <div class="prize-section__container">

        <div class="prize-section__heading heading-medium">
          <h2 class="heading-medium__white">Призовой фонд</h2>
          <h2 class="heading-medium__outlined">Призовой фонд</h2>
        </div>

        <div class="prize-section__row">

          <div class="prize-section__card">
            <span class="prize-section__place-text">
              1-ое место
            </span>
            <p class="prize-section__sum">
              1 000 000 KZT
            </p>
          </div>

          <div class="prize-section__card">
            <span class="prize-section__place-text">
              2-ое место
            </span>
            <p class="prize-section__sum">
              500 000 KZT
            </p>
          </div>

          <div class="prize-section__card">
            <span class="prize-section__place-text">
              3-ое место
            </span>
            <p class="prize-section__sum">
              300 000 KZT
            </p>
          </div>

        </div>

        <div class="prize-section__info">

          <h5 class="prize-section__title prize-section__title--mb20">
            А также:
          </h5>

          <div class="prize-section__fluid-box">
            <h5 class="prize-section__title">Дальнейшее трудоустройство в JAS Nur-Sultan</h5>
            <p class="prize-section__text">
              Лучшие участники будут рассматриваться на 5 и более вакансий
            </p>
          </div>

          <div class="prize-section__fluid-box">
            <h5 class="prize-section__title">Инвестирование в блокчейн проекты</h5>
            <p class="prize-section__text">
              По итогам мероприятия список проектов будет передан в инвестиционный совет для рассмотрения на возможность
              грантовой и инвестиционной поддержки для развития продукта
            </p>
          </div>

        </div>

      </div>

    </section>

    <section class="main__about-section about-section" id="about">

      <div class="about-section__container">

        <div class="about-section__heading heading-medium">
          <h2 class="heading-medium__white">О Хакатоне</h2>
          <h2 class="heading-medium__outlined">О Хакатоне</h2>
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
                Регистрация
              </h4>

              <p class="about-section__text">
                Регистрация будет открыта с 14.06 по 24.06. Заявки принимаются как от команд, так и от индивидуальных
                участников.
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
                Хакатон
              </h4>

              <p class="about-section__text">
                Онлайн Хакатон рассчитан для разработчиков со всего Казахстана.
                Для жителей городов Нур-Султан и Алматы будут предусмотрены поинт-офисы для офлайн участия на Хакатоне!
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
                Результаты хакатона
              </h4>

              <p class="about-section__text">
                28.06 в прямом эфире будут объявлены победители Хакатона. По итогам хакатона лучшие участники будут
                рассматриваться на 5 и более вакансий, а самые яркие проекты будут переданы в инвестиционный совет для
                рассмотрения.
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

              <span class="about-section__num about-section__num--grey">03</span>

            </div>

            <h5 class="about-section__date">14.06.2021</h5>

            <p class="about-section__card-text">
              Дата открытия регистрации
            </p>
          </div>

          <div class="about-section__card">
            <div class="about-section__count-box">

              <span class="about-section__num">02</span>

              <svg class="about-section__line" width="22" height="30">
                <use href="../assets/img/icons.svg#count-line"></use>
              </svg>

              <span class="about-section__num about-section__num--grey">03</span>

            </div>

            <h5 class="about-section__date">24.06.2021</h5>

            <p class="about-section__card-text">
              Дата закрытия регистрации
            </p>
          </div>

          <div class="about-section__card">
            <div class="about-section__count-box">

              <span class="about-section__num">03</span>

              <svg class="about-section__line" width="22" height="30">
                <use href="../assets/img/icons.svg#count-line"></use>
              </svg>

              <span class="about-section__num about-section__num--grey">03</span>

            </div>

            <h5 class="about-section__date">25-28.06.2021</h5>

            <p class="about-section__card-text">
              Дата проведения
            </p>
          </div>

        </div>

      </div>
    </section>

    <section class="main__section task-section" id="task">

      <div class="task-section__container">

        <div class="task-section__heading heading-medium">
          <h2 class="heading-medium__white">Задача</h2>
          <h2 class="heading-medium__outlined">Задача</h2>
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
              Создание маркетплейса в стиле Opensea:
            </h4>

            <p class="task-section__text">
              Реализацией генератора NFT
            </p>

            <p class="task-section__text">
              Смарт контракт для токена ERC20
            </p>


          </div>

        </div>

      </div>

    </section>

    <section class="main__section audience-section" id="audience">

      <div class="audience-section__container">

        <div class="audience-section__heading heading-medium">
          <h2 class="heading-medium__white">Целевая <br> аудитория</h2>
          <h2 class="heading-medium__outlined">Целевая <br> аудитория</h2>
        </div>

        <div class="audience-section__subtitle">
          Мы ищем разработчиков с опытом в:
        </div>

        <div class="audience-section__row">
          <img src="../assets/img/python.png" alt="" class="audience-section__img">
          <img src="../assets/img/JS.png" alt="" class="audience-section__img">
          <img src="../assets/img/golang.png" alt="" class="audience-section__img">
        </div>

        <div class="audience-section__row">
          <img src="../assets/img/svelte.png" alt="" class="audience-section__img">
          <img src="../assets/img/Meteor-logo.png" alt="" class="audience-section__img">
          <img src="../assets/img/React.png" alt="" class="audience-section__img">
        </div>

      </div>

    </section>

    <section class="main__section program-section" id="program">

      <div class="program-section__container">

        <div class="audience-section__heading heading-medium">
          <h2 class="heading-medium__white">Программа</h2>
          <h2 class="heading-medium__outlined">Программа</h2>
        </div>

        <div class="program-section__list">

          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                25
              </p>
              <p class="program-section__month">
                июня
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                Старт Хакатона
              </h5>
              <p class="program-section__subtitle">
                Приветствие участников. Обращение организаторов и воркшопы.
              </p>
            </div>

          </div>

          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                26
              </p>
              <p class="program-section__month">
                июня
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                Работа над решением
              </h5>
              <p class="program-section__subtitle">
                Время для разработки лучшего решения задачи
              </p>
            </div>

          </div>

          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                27
              </p>
              <p class="program-section__month">
                июня
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                Презентация решений и интервью
              </h5>
              <p class="program-section__subtitle">
                Участники презентуют свою решения и проходят интервью с представителями JAS Nur-Sultan
              </p>
            </div>

          </div>

          <div class="program-section__box">
            <div class="program-section__date">
              <p class="program-section__day">
                28
              </p>
              <p class="program-section__month">
                июня
              </p>
            </div>

            <div class="program-section__info">
              <h5 class="program-section__title">
                Финал
              </h5>
              <p class="program-section__subtitle">
                Объявление победителей. Закрытие хакатона
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="main__section organizers-section" id="organizers">

      <div class="organizers-section__container">

        <div class="organizers-section__heading heading-medium">
          <h2 class="heading-medium__white">Организаторы</h2>
          <h2 class="heading-medium__outlined">Организаторы</h2>
        </div>

        <div class="organizers-section__row">
          <div class="organizers-section__info organizers-section__info--first">
            <div class="organizers-section__title organizers-section__title--mt50">
              SEEDSTARS
            </div>

            <div class="organizers-section__text">
              Seedstars – Швейцарская группа компаний, работающая в сфере стартапов на развивающихся рынках и ставить
              своей целью улучшения жизни людей через технологии и развитие предпринимательства, связывая
              заинтересованные стороны и инвестируя в высокопроизводительные стартапы.
            </div>

            <div class="organizers-section__address organizers-section__address--top200">
              <svg class="organizers-section__icon" width="24" height="24">
                <use href="../assets/img/icons.svg#square-dot"></use>
              </svg>
              <span>Женева, Швейцария</span>
            </div>
          </div>

          <div class="organizers-section__img-box organizers-section__img-box--first">
            <div class="organizers-section__img-wrapper">
              <img src="../assets/img/seedstars-org.svg" alt="" class="organizers-section__img">
            </div>

            <div class="organizers-section__num">
              1
            </div>
          </div>

        </div>

        <div class="organizers-section__row organizers-section__row--reverse">
          <div class="organizers-section__info organizers-section__info--second">
            <div class="organizers-section__title">
              Jas Nur-sultan
            </div>

            <div class="organizers-section__text">
              Компания JAS Nur-Sultan является молодой венчурно-инвестиционной компанией с регистрацией в юрисдикции
              Международного финансового центра «Astana», а также является участником экосистемы Назарбаев Университета.
              <br><br>

              Основная деятельность компании заключается в проактивном поиске стартапов по линии нетворкинга и различных
              инкубационных и акселерационных программ в Казахстане с последующим финансированием перспективных,
              масштабируемых и быстрорастущих стартапов.
            </div>

            <div class="organizers-section__address organizers-section__address--second">
              <svg class="organizers-section__icon" width="24" height="24">
                <use href="../assets/img/icons.svg#square-dot"></use>
              </svg>
              <span>Нур-Султан, Казахстан</span>
            </div>
          </div>

          <div class="organizers-section__img-box organizers-section__img-box--second">
            <div class="organizers-section__img-wrapper">
              <img src="../assets/img/jas.svg" alt="" class="organizers-section__img">
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
          <h2 class="heading-medium__white">Место <br> проведения</h2>
          <h2 class="heading-medium__outlined">Место <br> проведения</h2>
        </div>

        <div class="place-section__btn-group">
          <button class="place-section__btn button"
                  @click="chooseCity('Almaty')"
                  :class="{'button--grey': city !== 'Almaty'}">
            Алматы
          </button>
          <button class="place-section__btn button"
                  @click="chooseCity('Nur-Sultan')"
                  :class="{'button--grey': city !== 'Nur-Sultan'}">
            Нур-Султан
          </button>
        </div>

      </div>

      <div class="place-section__map-box" v-show="city === 'Almaty'">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32883.03264421884!2d76.90012658139838!3d43.24142553032324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e7d16c5cbab%3A0x3d44668fad986d76!2z0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1623423740150!5m2!1sru!2skz"
          style="border:0;" allowfullscreen="" loading="lazy" class="place-section__map"></iframe>

        <div class="place-section__address-box">

          <div class="place-section__row">
            <svg width="19" height="18">
              <use href="../assets/img/icons.svg#map-pin"></use>
            </svg>
            <span>
              Информация будет предоставлена позже
            </span>
          </div>

        </div>

      </div>

      <div class="place-section__map-box" v-show="city === 'Nur-Sultan'">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.0194017180393!2d71.41816375719158!3d51.08964945035462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245850d5131281b%3A0x822ca9d6999e5b5d!2z0JDQutCw0LTQtdC80LjRjyDQldC70LHQsNGB0Ys!5e0!3m2!1sru!2skz!4v1623464872299!5m2!1sru!2skz"
          style="border:0;" allowfullscreen="" loading="lazy" class="place-section__map"></iframe>

        <div class="place-section__address-box">

          <div class="place-section__row">
            <svg width="19" height="18">
              <use href="../assets/img/icons.svg#map-pin"></use>
            </svg>
            <span>
              г. Нур-Султан <br>
              ул. Мангилик ел, 55/13 Блок С2-2 <br>
              Этаж 3, кабинет 3-11
            </span>
          </div>

        </div>

      </div>

    </section>

  </main>
</template>

<script>
import VueCountDown from '@chenfengyuan/vue-countdown'

export default {
  data() {
    return {
      city: 'Almaty'
    }
  },

  components: {
    VueCountDown
  },

  computed: {
    dateTill() {
      let finishDate = new Date(2021, 5, 25, 0, 0)
      let today = new Date()
      return finishDate - today
    },
  },

  methods: {
    chooseCity(city) {
      this.city = city
    }
  },
  mounted() {

  }
}
</script>

<style>

</style>
