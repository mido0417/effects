export const getters = {
    HeaderMenuClickedStatus: (state, getters) => {
        return state.header.MenuClicked
    },
    HeaderStickyrStatus: (state, getters) => {
      return state.header.Sticky
    },
    HeaderSearchButtonClickedStatus: (state, getters) => {
        return state.header.SearchButtonClicked;
    },
    OriginalArticle: (state,getters) => {
        return state.article.List;
    },
    CurrentCategory: (state, getters) => {
        return state.article.SelectedCategory
    }
}
