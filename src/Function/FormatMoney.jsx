
function FormatMoney(props){
    let formatTigaAngka = Intl.NumberFormat("en-US", {
        maximumSignificantDigits: 3,
    });

    return formatTigaAngka.format(props.money).replace(',','.')
}

export default FormatMoney;