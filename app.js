const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + "" + "Krenn";
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + "" + "Krenn";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
