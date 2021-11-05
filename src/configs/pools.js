import { default as pools1 } from './pools-1';

const pools = process.env.REACT_APP_PROPOSAL_NETWORK === 'mainnet' ?
  [
    {
      id: 1,
      list: pools1
    }
  ] :
  [
    {
      id: 1,
      list: pools1
    }
  ];

export default pools;
