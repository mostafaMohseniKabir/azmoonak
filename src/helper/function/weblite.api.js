// W
const {
  W, R,
} = window

const handleNormalMode = (start, vue) => {
  start()
  Promise.all([W.loadData(), W.share.getFromServer([])]).then(data => {
    const [{
      user: {
        name
      },
      creator,
      customize: {
        title
      },
    }, ] = data

    W.getUsersInfo([name]).then(info => {
      const userInfo = R.head(R.values(info))
      
      vue.$store.commit('changeWebliteRelatedData', {
        userInfo,
        title,
        isAdmin: creator,
      })
    })
      

    

    vue.$store.commit('changeIsDataFetched', true)
  })
}

const handleCustomizeMode = (start, vue) => {
  vue.$store.commit('changeIsDataFetched', true)
  start()
}

export default vue => {
  W.setHooks({
    wappWillStart(start, error, {
      mode
    }) {
      mode === 'customize' ? handleCustomizeMode(start, vue) : handleNormalMode(start, vue)
    },

    wappDidStart({
      mode
    }) {
      if (mode !== 'customize')
        W.deleteAllNotifications()
    },

    onCustomizeValueChange({
      key,
      value
    }) {
      if (key === 'title') vue.$store.commit('changeTitle', value)
    },
  })
}