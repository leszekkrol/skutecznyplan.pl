import { defineStore } from 'pinia'

export const useQuotesStore = defineStore({
  id: 'quotes',
  state: () => {
    return {
      quotes: [
        {
          key: "quotes.item_1",
          author: "Katarzyna",
          position: "Studentka"
        },
        {
          key: "quotes.item_2",
          author: "Joanna",
          position: "Projektanta"
        },
        {
          key: "quotes.item_3",
          author: "Jacek",
          position: "Student"
        },
        {
          key: "quotes.item_4",
          author: "Paweł",
          position: "Student"
        },
        {
          key: "quotes.item_5",
          author: "Martyna",
          position: "Grafik 2D"
        },
        {
          key: "quotes.item_6",
          author: "Agnieszka",
          position: "Studentka"
        },
      ]
    }
  },
  actions: {},
  getters: {
    quotesList: state => state.quotes
  },
})