require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace casual flee seed edge rare remind assault gesture open flower spot'; 
let testAccounts = [
"0xc556afb1a4ff0c6f81c81ed6ece8b7181a31152f41189dbe2f02c2cbc5bc0d8c",
"0x01f737fc1f19ed71212e78245a980ce7e22aa798b639c2e5d8b24cdbe17a8237",
"0x809fb09889951fe182e7afe6b076c5f5801d09d9997dd31a7c68d1ba264749e7",
"0xf751c2cc73a6f64a175e9d77deab376a29b81f729824d93e947d020309bdbcc1",
"0xb2ec22001e80f2e02b41303f6c6ff712c800cc7d32ffb60b3d91283ab249b1e5",
"0x96b59d76ff6b7c0b47878485ed30989830d9c4bd2ea3f07653a46c220cb9e900",
"0x39faf6e50fabb5d97121adee54f5f20249f70a3093a163d7a30b6843df0e097a",
"0x1d254bfd42c33f0a39bda1025a9ae742c5b034f7df0aef5885898dc4b8892b35",
"0xec380daca3f51365affb045c55a878efa36d8313f5dec8e509edab787a9608bd",
"0x6ae467de688bc0085ed7ab0c85067d6f8876000b0e0f1ea1f3824d62377a9138"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

