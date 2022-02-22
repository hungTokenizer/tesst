import {
  vaultControlerABI,
  vaultStrategyABI,
  vaultERC20ABI,
  vaultABI,
} from '../contracts';

const vaults = [
  {
    id: 'TKN1',
    name: 'WBTC - cWBTC',
    symbol: 'WBTC',
    platform:'compound',
    description: 'Migrate your WBTC LP into cWBTC LP',
    vaultSymbol: 'yWBTC',
    erc20address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    vaultContractAddress: '0xF3B12D6238fc216c85E4643D4b11A0a95A4817fc',
    vaultStrategyAddress: '0xe8cDAbF1959555c0ba4000470A1137252eCf6A1A',
    erc20ABI: vaultERC20ABI,
    vaultContractABI: vaultABI,
    vaultStrategyABI: vaultStrategyABI,
    apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
    apyFetch: 'https://api.compound.finance/api/v2/ctoken?addresses=0xccF4429DB6322D5C611ee964527D42E5d685DD6a',
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 11210773,
    measurement: 1e18,
    depositDisabled: false,
    price_id: 'wbtc',
    network:"ETH"
  },
  // {
  //   id: 'TKN2',
  //   name: 'DAI - yDAI',
  //   symbol: 'DAI',
  //   description: 'Migrate your DAI LP into yDAI LP',
  //   vaultSymbol: 'DAI',
  //   erc20address: '0x6b175474e89094c44da98b954eedeac495271d0f',
  //   vaultContractAddress: '0x36776a9BD3Edeb55029554122b029DA4eca4C414',
  //   vaultStrategyAddress: '0x90027dcE788594BbDE26F6E3102979eBF5759a69',
  //   erc20ABI: vaultERC20ABI,
  //   vaultContractABI: vaultABI,
  //   vaultStrategyABI: vaultStrategyABI,
  //   apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
  //   balance: 0,
  //   vaultBalance: 0,
  //   decimals: 18,
  //   deposit: true,
  //   depositAll: true,
  //   withdraw: true,
  //   withdrawAll: true,
  //   lastMeasurement: 11210773,
  //   measurement: 1e18,
  //   depositDisabled: false,
  //   price_id: 'dai'
  // },
  {
    id: 'TKN3',
    name: 'WBTC - RenBTC',
    symbol: 'WRenBTC',
    description: 'Migrate your WBTC LP into RenBTC LP',
    vaultSymbol: 'yWTBC',
    pool:'ren',
    erc20address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    vaultContractAddress: '0x85c5Ce998ff55811F5EF81b0445BcD2ffCD2D697',
    vaultStrategyAddress: '0x02ee2c320EE66eaf7f4bEc2fF40279edce498277',
    erc20ABI: vaultERC20ABI,
    vaultContractABI: vaultABI,
    vaultStrategyABI: vaultStrategyABI,
    apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
    apyFetch:'https://api.curve.fi/api/getApys',
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 11210773,
    measurement: 1e18,
    depositDisabled: false,
    price_id: 'wbtc',
    network:"ETH"
  },
  {
    id: 'TKN4',
    name: 'curve-fi-ydai-yusdc-yusdt-ytusd',
    symbol: 'CRV',
    description: 'Migrate your CRV LP into yCRV LP',
    vaultSymbol: 'yCRV',
    pool:'iearn',
    erc20address: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
    vaultContractAddress: '0xfbd9Bad1101dE28646D919B35a8fe8dECdD38241',
    vaultStrategyAddress: '0x3bB565AA3fF4d3d8a33De77ca027556cd2d3F0cB',
    erc20ABI: vaultERC20ABI,
    vaultContractABI: vaultABI,
    vaultStrategyABI: vaultStrategyABI,
    apySubgraph: 'https://api.thegraph.com/subgraphs/name/ulmmrt/yagnostic-bsc',
    apyFetch:'https://api.curve.fi/api/getApys',
    balance: 0,
    vaultBalance: 0,
    decimals: 18,
    deposit: true,
    depositAll: true,
    withdraw: true,
    withdrawAll: true,
    lastMeasurement: 11210773,
    measurement: 1e18,
    depositDisabled: false,
    price_id: 'curve-fi-ydai-yusdc-yusdt-ytusd',
    network:"ETH"
  }
];

export default vaults;
