const swapDigits = (number)=>{
    
    if (number<0)
    {
        return 0
    }

    else
    {
        
        str_num = number.toString()
        let swappedNumber = ''

        const isEven = str_num.length % 2 === 0

        for (let i=0 ; i<str_num.length; i+=1)
        {
            if (isEven || i>0)
            {
                swappedNumber += str_num[i+1] + str_num[i]
                i++
            }
            else
            {
                swappedNumber += str_num[i]
            }
        }
        return parseInt(swappedNumber, 10);
    }
    
}

module.exports = swapDigits
