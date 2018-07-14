export default function ({store}) {
    store.commit('ChangeHeaderMenuClickedStatus', false)
    store.commit('ChangeHeaderSearchButtonClickedStatus', false)
}
