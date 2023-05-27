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
        { title: "Прокат авто", anchor: "#carRental" },
        { title: "Наші переваги", anchor: "#ourAdventages" },
        { title: "Відгуки", anchor: "#feedbacks" },
        { title: "Питання", anchor: "#questions" },
        { title: "Контакти", anchor: "#contacts" },
      ];
    }
  },
};
</script>
<style scoped>
.navbar {
  width: 100%;
  min-height: 7.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
}
.navbar__logo {
  width: 9.375em;
  height: 2.5em;
}
.navbar__menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4.5em;
  margin-bottom: 0;
}
.navbar__menu__item {
  display: flex;
  min-height: inherit;
  justify-content: center;
  align-items: center;  
}
.navbar__menu__item__link {
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.125em;
  color: var(--white-color);
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
}
.navbar__menu__item__link:hover {
  color: var(--secondary-color);
}
.navbar__account {
  background-color: transparent;
  border: 0.125em solid var(--secondary-color);
  border-radius: 1.5em;
  padding: 0.5em 3.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}
.navbar__account:hover {
  background-color: var(--secondary-color);
  color: var(--black-color);
}
.navbar__account__label {
  font-size: 1.25em;
  color: var(--secondary-color);
  font-weight: 600;
  letter-spacing: 0.02em;
}
.navbar__account:is(:hover) .navbar__account__label {
  color: var(--black-color);
}
</style>