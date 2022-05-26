module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
  },
compilers: {
     solc: {
       version: "0.4.17"  // ex:  "0.4.20". (Default: Truffle's installed solc)
     }
  }
};

