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
      if(e) {
        console.error(e)
      }
      else {
        if(r.length === 0) {
          var transfers = [{
            address: address,
            value: 0,
            message: 'BLA'
          }]
          iota.api.prepareTransfers('ABCDEF', transfers, (e, trytes) => {
            if(e) {
              console.error(e)
            }
            else {
              console.log('abc', trytes);
              iota.api.sendTrytes(trytes, 5, 2, (e, r) => {
                if(e) {
                  console.error(e)
                }
              })
            }
          })
        }
      }
    })
  }
}
