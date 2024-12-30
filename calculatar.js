
    a =+ prompt("Enter the First Number : ")
    b =+ prompt("Enter the Second Number : ")
    operator = prompt("Enter the operator : ")
    switch(operator)
    {
         case '+':console.log(a+b)
        break;
        case '-':console.log(a-b)
        break;
        case '*':console.log(a*b)
        break;
        case '/':console.log(a/b)
        break;
        case '%':console.log(a%b)
        break;
        default:console.log("Invaild Operator")
    }
    