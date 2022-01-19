import { parseErrorTransaction } from '../../common';

const voteFor = ({
  web3,
  asset,
  account,
  proposalId,
  onError,
  onSuccess,
  onConfirm
}) => {
  return (dispatch) => {
    try {
      const governanceContract = new web3.eth.Contract(
        asset.governanceABI,
        asset.governanceAddress
      );

      governanceContract
        .methods
        .voteFor(proposalId)
        .send({ from: account })
        .on('transactionHash', (hash) => {

          onSuccess && onSuccess(hash);
        })
        .on('confirmation', (confirmationNumber, receipt) => {
          confirmationNumber === 2 && onConfirm && onConfirm(receipt);
        })
        .on('receipt', (receipt) => {
          console.log('receipt', receipt);
        })
        .on('error', (error) => {
          onError && onError(parseErrorTransaction(error));
        });
    } catch (error) {
      onError && onError(error);
    }
  };
};

export default voteFor;
