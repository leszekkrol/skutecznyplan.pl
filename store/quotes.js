import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useQuotesStore = defineStore({
  id: 'quotes',
  state: () => {
    const i18n = useI18n();
    return {
      quotes: [
        {
          key: i18n.t('quotes.item_1'),
          author: "Katarzyna",
          position: "Studentka"
        },
        {
          key: i18n.t('quotes.item_2'),
          author: "Joanna",
          position: "Projektanta"
        },
        {
          key: i18n.t('quotes.item_3'),
          author: "Jacek",
          position: "Student"
        },
        {
          key: i18n.t('quotes.item_4'),
          author: "Paweł",
          position: "Student"
        },
        {
          key: i18n.t('quotes.item_5'),
          author: "Martyna",
          position: "Grafik 2D"
        },
        {
          key: i18n.t('quotes.item_6'),
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