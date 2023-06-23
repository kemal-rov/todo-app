// Define a root component
const App = Vue.component('app', {
  template: `
    <div>
      <h1>{{ message }}</h1>
    </div>
  `,
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
});

// Create a Vue instance
new Vue({
  el: '#app', // Mount to the element with id "app"
  render: (h) => h(App), // Render the root component
});
