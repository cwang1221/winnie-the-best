Component({
  data: {
    money: 0,
    history: [{
      type: 'EXPAND',
      money: 178.16,
      date: '2023-07-07',
      title: '家长会零食水果',
      description: "家长会零食水果共计178.16元。"
    }, {
      type: 'INCOME',
      money: 185,
      date: '2023-07-05',
      title: '食育课卖茄盒',
      description: "49*5-60（包装，酱料）=185元。"
    }, {
      type: 'INCOME',
      money: 94.5,
      date: '2023-05-12',
      title: '母亲节',
      description: "母亲节经费结余94.5元。"
    }, {
      type: 'INCOME',
      money: 270,
      date: '2022-10-21',
      title: '食育课卖回锅肉',
      description: "27*10=270元。"
    }]
  },

  methods: {
    onShow() {
      let money = 0;
      this.data.history.forEach(item => {
        if (item.type === 'INCOME') {
          money = parseFloat((item.money + money).toFixed(2));
        } else {
          money = parseFloat((money - item.money).toFixed(2));
        }
      })
      this.setData({
        money
      })
    },
    onChange(e) {
      this.setData({
        selectedTab: this.data.tabs.find(item => item.id === e.detail.value),
      });
    }
  },
});
