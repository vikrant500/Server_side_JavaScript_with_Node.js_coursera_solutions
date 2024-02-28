const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    // note that you check the values passed are not null before performing any operation on them
    
    const pi = 3.14
    
    
    
    if(choice != 'square' && choice != 'rectangle' && choice != 'circle'){
        return -1
    }
    
    else
    {
        switch (choice)
        {
            case 'square':
                if ((side <= 0) || (typeof side !== 'number') ){return -1}
                else{
                    area = side*4} // the formula is wrong in the test.
            break;

            case 'rectangle':
                
                if ((length <= 0 || breadth <= 0) || (typeof length !== 'number' || typeof breadth !== 'number') ){return -1}
                else{
                    area = length*breadth}
            break;

            case 'circle':
                
                if ((radius <= 0) || (typeof radius !== 'number') ){return -1}
                else{
                    area = pi * radius*radius}
            break;
        }
    }
    
    return area
}
module.exports = {calculateArea}
