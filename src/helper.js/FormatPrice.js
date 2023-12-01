const FormatPrice = ({ price }) =>{
    return Intl.NumberFormat("en-In", {
        style:"currency",
        currency : "INR",
        maximumFractionDigits:2
    }).format(price)
}

export default FormatPrice;