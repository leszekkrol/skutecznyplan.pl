import { defineStore } from 'pinia'

export const useQuotesStore = defineStore({
  id: 'quotes',
  state: () => {
    return {
      quotes: [
        {
          description: "Leszek stara się wszystko tłumaczyć bardzo po ludzku, zdecydowanie nadaje się na wykładowcę.",
          author: "Katarzyna",
          position: "Studentka"
        },
        {
          description: "Przyznam że słuchając Ciebie tego dnia,  poczułam przypływ motywacji na  robienie rzeczy poza firmą",
          author: "Joanna",
          position: "Projektanta"
        },
        {
          description: "Leszek porusza tematy, ktore nie tylko związane są z przedsiębiorczością i biznesem, ale również mają związek z codziennym życiem.",
          author: "Jacek",
          position: "Student"
        },
        {
          description: "Merytoryczny, inspirujący i rozwijający podcast. Dziękuję za wszystkie odcinki! Robisz mega robotę.",
          author: "Paweł",
          position: "Student"
        },
        {
          description: "Podcast daje wiele odwagi do codziennego działania. Leszek rozwija i pomaga wyjść ze strefy komfortu pozwając przy tym myśleć i patrzeć szerzej.",
          author: "Martyna",
          position: "Grafik 2D"
        },
        {
          description: "Leszka słucha się bardzo sympatycznie, delikatnie. Zdecydowanie podcast jest kierowany również do zwykłych ludzi, bez pompatycznych słów",
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