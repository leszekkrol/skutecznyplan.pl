import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useQuotesStore = defineStore('quotes', () => {
  const quotes = ref([
    {
      key: 'item_1',
      author: "Katarzyna",
      position: "Studentka"
    },
    {
      key: 'item_2',
      author: "Joanna",
      position: "Projektanta"
    },
    {
      key: 'item_3',
      author: "Jacek",
      position: "Student"
    },
    {
      key: 'item_4',
      author: "Paweł",
      position: "Student"
    },
    {
      key: 'item_5',
      author: "Martyna",
      position: "Grafik 2D"
    },
    {
      key: 'item_6',
      author: "Agnieszka",
      position: "Studentka"
    },
  ])

  return {
    quotes
  }
})