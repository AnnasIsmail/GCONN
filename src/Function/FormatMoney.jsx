
function FormatMoney(props){
    let formatTigaAngka = Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 3,
    });

    return formatTigaAngka.format(props.money)
}

export default FormatMoney;