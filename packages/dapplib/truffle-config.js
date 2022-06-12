require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict industry flame street name radar pulse column hidden kitchen metal ghost'; 
let testAccounts = [
"0xd564bd61482570787ac5fc38eeaa4269586a47cf4d5d3cdfa665b718b058f130",
"0x8bddbe1426c4891edf0ef380a2104b6dad971ad8f275fe822acc3d0dcab1aef6",
"0x0872c97ca01fcaef8fb438a8496dfa160a3a46a821871f5c0613eceb9cd9c1ae",
"0xebb96c529758e8b0aa3a77b2ebd5869bec7c9701ec49ed2406fec8e400c15800",
"0x9d420663f53b7bf654a1592fff4b3f1cb7c695ef6af1a7475c2569dbf8c8cd40",
"0xd6095837529542610ff8f243e2048d7e6afc00c0fc66437f8184c6182b663e45",
"0xdc4f5dcbb5dc94527480051b6de04eb24a0923866fc1cc1e9ed79dde96d65ad9",
"0x672aab4c8bf093d28255badf4df7b7eb190bea35da1232308932da04c9c4b272",
"0x7f91629732df7d47aa491bf4a8c59356cfa859cfe917f80c4ce0adc8414ce862",
"0xbd6430e801c30acb6f701f2483c9d4b4fd57487d8e95cead810271f887e5f65b"
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

