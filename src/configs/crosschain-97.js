import { bridgeERC20ABIBSC, bridgeABIBSC } from '../contracts';

const chain = {
  id: 'yfiag',
  name: 'BCX',
  symbol: 'BCX',
  infuraApiKey: null,
  erc20address: '0x4ba05bf59ae3b7a2939dec87d0e4052dca2f046e',
  bridgeAddress: '0x3B52988e48A951f87a6F9F6EDdA59FD566E85145',
  erc20ABI: bridgeERC20ABIBSC,
  bridgeABI: bridgeABIBSC,
  decimals: 18,
  balance: 0
};

export default chain;
