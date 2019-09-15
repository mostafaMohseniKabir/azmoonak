import { findResult } from './time'
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
    }, res] = data

    console.log('weblite API', res)

    W.getUsersInfo([name]).then(info => {
      const userInfo = R.head(R.values(info))	  

      vue.$store.commit('changeUserResult', findResult(res, userInfo))
      vue.$store.commit('changeWebliteRelatedData', {
        userInfo,	
        title,	
        isAdmin: creator,	
      })
    })
  })
}

export default vue => {
  W.setHooks({
    wappWillStart(start, error, {
      mode
    }) {
      mode === 'customize' ? start() : handleNormalMode(start, vue)
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