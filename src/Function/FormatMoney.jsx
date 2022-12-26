
function FormatMoney(props){

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(props.money);

}

export default FormatMoney;