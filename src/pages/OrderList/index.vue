<template>
  <div class="wrapp">
    <br />
    <h1>Список замовлень</h1>

    <table class="table">
      <tr>
        <th>номер</th>

        <th>ID та дата</th>
        <th>Замовник</th>
        <th>Телефон</th>
        <th>Адреса</th>

        <th>Не дзвонити в двері?</th>
        <th>Залишити під дверима?</th>
        <th>Коментарі до замовлення</th>

        <th>Замовлені продукти(назва, кількість, ціна за штуку)</th>
        <th>До сплати</th>
        <th>статус</th>
      </tr>
      <tr v-for="(order, index) in getOrders.slice().reverse()"  :key="order._id">
        <td>
          {{ index + 1 }}
        </td>
        <td>номер замовлення: {{ order._id }} , дата: {{ order.date }}</td>
        <td>Ім'я: {{ order.userName }} Email: {{order.email}}</td>
        <td>Телефон: {{ order.tel }}</td>
        <td>
          вулиця: {{ order.street }}, будинок: {{ order.house }}, під'їзд:
          {{ order.entrance }}, квартира: {{ order.flat }}, населений пункт
          {{ order.city }}
        </td>

        <td>Дзвонити в двері: {{ order.dontRingTheDoor }}</td>
        <td>Залишити під дверима: {{ order.leftAtDoor }}</td>
        <td>
          {{ order.wishes }}
        </td>

        <td>
          {{ order.products }}
        </td>
        <td>{{ order.totalPrice }} грн</td>
        <td>
          <b-icon
            v-if="!order.statusOrder"
            icon="mdi mdi-bell-ring-outline"
            size="is-medium"
            type="is-warning"
          >
          </b-icon>
          <strong v-if="!order.statusOrder"> замовлення в обробці </strong>
          <b-icon
            v-if="order.statusOrder"
            icon="mdi mdi-check"
            size="is-medium"
            type="is-success"
          >
          </b-icon>
          <strong v-if="order.statusOrder"> Виконано </strong>

          <b-button
            v-if="!order.statusOrder"
            type="is-success"
            @click="Done(order._id)"
            outlined
            >Виконати</b-button
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "OrderList",

  computed: {
    ...mapGetters("orders", ["getOrders", "orderId"]),
  },

  methods: {
    ...mapActions("orders", ["loadData", "updateOrder"]),
    Done(id) {
      this.updateOrder({
        _id: id,
        statusOrder: true,
      });
      this.loadData()
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
  font-size: 30px;
  color: rgb(81, 141, 94);
  background-color: rgb(173, 241, 183);
  padding: 20px;
}
table {
  margin: 100px auto;
  border-radius: 3px;
  text-align: center;
  width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.table td {
  border: 2px solid rgb(206, 202, 202);
  font-size: 16px;
  padding: 3px;
}
.table th {
  border: 2px solid rgb(206, 202, 202);
  font-size: 16px;
  padding: 3px;
  color: white;
  background-color: rgb(86, 198, 117);
}
</style>