export default {
  namespaced: true,
  state: {
    record: [{
      person: 'other',
      content: 'Hello',
      content_type: 'text',
      time: '1558755000'
    }, {
      person: 'me',
      content: 'Hi',
      content_type: 'text',
      time: '1558753800'
    }, {
      person: 'system',
      content: '2019 05 25 11:10'
    }]
  },
  getters: {},
  mutations: {
    addRecord (state, obj) {
      state.record.unshift(obj)
    },
    delRecord (state, index) {
      let obj = state.record[index]
      let people = obj.person === 'me' ? '你' : '对方'
      obj = Object.assign(obj, {
        person: 'system',
        content: people + '撤回了一条消息'
      })
      state.record[index] = obj
    }
  },
  actions: {}
}
