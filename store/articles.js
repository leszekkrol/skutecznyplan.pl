import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useArticlesStore = defineStore({
  id: 'articles',
  state: () => {
    return {
      articles: [
        {
          id: 8,
          filename: '/pl/to-nie-cel-sie-liczy',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/08--To-nie-cel-si-liczy-e1n5a9d',
          publish_date: '2022.09.10 14:58'
        },
        {
          id: 7,
          filename: '/pl/technika-skutecznego-robienia-postepow',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/07--Technika-skutecznego-robienia-postpw-e1m9jg3/a-a8c4koi',
          publish_date: '2022.08.10 08:49'
        },
        {
          id: 6,
          filename: '/pl/matrycja-priorytetow-i-zarzadzania-czasem',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/06--Matryca-priorytetw-i-zarzdzania-czasem-e1kqt8h',
          publish_date: '2022.07.10 09:04'
        },
        {
          id: 5,
          filename: '/pl/zasada-2-minut-czyli-skuteczne-zarzadzanie-czasem',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/05--Zasada-2-minut--czyli-skuteczne-zarzdzanie-czasem-e1eef5m',
          publish_date: '2022.06.10 05:23'
        },
        {
          id: 4,
          filename: '/pl/gdy-zadania-zaczna-ciebie-przytlaczac',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/04--Gdy-zadania-zaczn-Ciebie-przytacza-e1eedl4',
          publish_date: '2022.05.10 09:32'
        },
        {
          id: 3,
          filename: '/pl/zacznij-kontrolowac-swoje-ryzyko',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/03--Zacznij-kontrolowa-swoje-ryzyko-e1edm05',
          publish_date: '2022.04.10 16:25'
        },
        {
          id: 2,
          filename: '/pl/moje-spojrzenie-na-samodoskonalenie',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/02--Moje-spojrzenie-na-samodoskonalenie-e1ea9f9',
          publish_date: '2022.03.10 08:27'
        },
        {
          id: 1,
          filename: '/pl/prosty-sposob-na-produktywnosc',
          url: 'https://anchor.fm/skuteczny-plan-podcast/episodes/01--Prosty-sposb-na-produktywno-e1dpl1t',
          publish_date: '2022.02.10 09:13'
        },
      ],
    }
  },
  actions: {},
  getters: {
    articlesList: state => state.articles,
    getArticleBySlug: (state) => {
      return (slug) => {
        const res = state.articles.find((i) => i.slug === slug)
        if (!res) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
        return res
      }
    },
  },
})