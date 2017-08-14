var Peer = require('simple-peer')

export default class WebRTC {
  constructor(iota) {
    this.iota = iota
  }

  connect(address) {
    var query = {
      addresses: [address]
    }
    this.iota.api.findTransactionObjects(query, (e, r) => {
      console.log(e, r);
    })
  }
}
