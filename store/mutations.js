export const mutations = {
    UpdateNewsTaxonomy: (state, tid) => {
        state.article.SelectedCategory = tid;
    },
    SaveArticles: (state, nodes) => {
        state.article.List = nodes;
    },
    ChangeHeaderMenuClickedStatus:(state, status) => {
        state.header.MenuClicked = status;
    },
    ChangeHeaderStickyStatus: (state, status) => {
      state.header.Sticky = status;
    },
    ChangeHeaderSearchButtonClickedStatus: (state, status) => {
      state.header.SearchButtonClicked = status;
    },
}
