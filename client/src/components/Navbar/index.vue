<template>
  <div class="navbar">
    <img 
      src="/logo.png" 
      alt="logo" 
      class="navbar__logo"
    />
    <ul class="navbar__menu">
      <li
        v-for="(link, linkIndex) in links"
        :key="linkIndex"
        class="navbar__menu__item"
      >
        <a :href="link.anchor" class="navbar__menu__item__link">
          {{ link.title }}
        </a>
      </li>
    </ul>
    <button class="navbar__account">
      <span class="navbar__account__label">
        Mій профіль
      </span>
    </button>
  </div>
</template>
<script>
export default {
  computed: {
    links() {
      return [
        { title: "Головна", anchor: "#main" },
        { title: "Наші переваги", anchor: "#our_advantages" },
        { title: "Прокат авто", anchor: "#car_rental" },
        { title: "Відгуки", anchor: "#feedbacks" },
        { title: "Питання", anchor: "#questions" },
        { title: "Контакти", anchor: "#contacts" },
      ];
    }
  }
};
</script>
<style scoped>
.navbar {
  width: 100%;
  min-height: 7.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 4em;
}
.navbar__logo {
  width: 9.375em;
  height: 2.5em;
}
.navbar__menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5em;
}
.navbar__menu__item {
  padding: 0 0.5em;
  min-height: 3.75em;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;  
}
.navbar__menu__item__link {
  text-decoration: none;
  font-size: 1.25em;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}
.navbar__menu__item__link:hover {
  color: #ffd900;
}
.navbar__account {
  background-color: transparent;
  border: 0.125em solid #ffd900;
  border-radius: 1.5em;
  padding: 0.5em 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}
.navbar__account:hover {
  background-color: #ffd900;
  color: #000;
}
.navbar__account__label {
  font-size: 1.25em;
  color: #ffd900;
  font-weight: 600;
  letter-spacing: 0.02em;
}
.navbar__account:is(:hover) .navbar__account__label {
  color: #000;
}
</style>