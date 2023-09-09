// Format uang rupiah dari integer
const FormatMoney = ({money}) => {
  const integerAmount = parseInt(money, 10);
  if (isNaN(integerAmount)) {
    throw new Error('Input must be Number!');
  }
  const formattedNumber = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(integerAmount);

  return formattedNumber;
};
export default FormatMoney;
