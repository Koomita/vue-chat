export default {
  namespaced: true,
  state: {
    record: [{
      person: 'other',
      content: 'Hello',
      content_type: 'text',
      time: 1558755000
    }, {
      person: 'me',
      content: 'Hi',
      content_type: 'text',
      time: 1558753800
    }, {
      person: 'system',
      content: '2019 05 25 11:10'
    }]
  },
  getters: {},
  mutations: {
    addRecord (state, obj) {
      // 聊天记录，因为聊天记录显示是倒序的，所以是插入第一条
      state.record.unshift(obj)
      setTimeout(() => {
        state.record.unshift({
          ...obj,
          person: 'other',
          time: ~~(new Date().getTime() / 1000)
        })
      }, 1000)
    },
    delRecord (state, index) {
      let obj = state.record[index]
      let now = Math.ceil(new Date().getTime() / 1000)
      if (now > obj.time + 120) {
        // 超出撤回时间（2分钟内）
        return alert('超过两分钟的信息无法撤回')
      } else {
        let people = obj.person === 'me' ? '你' : '对方'
        state.record[index] = {
          ...obj,
          person: 'system',
          content: people + '撤回了一条消息'
        }
      }
    }
  },
  actions: {}
}
