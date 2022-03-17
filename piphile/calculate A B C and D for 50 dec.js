const sqrt5 = BigNumber('5').sqrt();
//A=63365028312971999585426220 + 28337702140800842046825600*sqrt5 + 384sqrt5sqrt(10891728551171178200467436212395209160385656017 + 4870929086578810225077338534541688721351255040*sqrt5)
const A1 = BigNumber('63365028312971999585426220').plus(BigNumber('28337702140800842046825600').times(sqrt5));//+
const A2 = BigNumber('384').times(sqrt5);//x
const A3 = BigNumber('10891728551171178200467436212395209160385656017').plus(BigNumber('4870929086578810225077338534541688721351255040').times(sqrt5));
const A4 = A3.sqrt();
const A5 = A2.times(A4);
const A = A1.plus(A5);
console.log(A.toString())
                
//B = 7849910453496627210289749000 + 3510586678260932028965606400sqrt(5) + 2515968*sqrt(3110)sqrt(6260208323789001636993322654444020882161 + 2799650273060444296577206890718825190235*sqrt(5))
const B1 = BigNumber('7849910453496627210289749000').plus(BigNumber('3510586678260932028965606400').times(sqrt5));//+
const B2 = BigNumber('2515968').times(BigNumber('3110').sqrt());//x
const B3 = BigNumber('6260208323789001636993322654444020882161').plus(BigNumber('2799650273060444296577206890718825190235').times(sqrt5));
const B4 = B3.sqrt()
const B = B1.plus(B2.times(B4))
console.log(B.toString())

//C=-214772995063512240 - 96049403338648032sqrt5 - 1296sqrt5sqrt(10985234579463550323713318473 + 4912746253692362754607395912sqrt5)
const C1 = BigNumber('-214772995063512240').minus(BigNumber('96049403338648032').times(sqrt5));//-
const C2 = BigNumber('1296').times(sqrt5)//x
const C3 = BigNumber(BigNumber('10985234579463550323713318473').plus(BigNumber('4912746253692362754607395912').times(sqrt5))).sqrt();
const C = C1.minus(C2.times(C3));
console.log(C.toString())

const D1 = BigNumber('1');//-:-
const D2 = C.pow('3');
const D3 = D2.negated();
const D4 = D3.sqrt();
const D = D1.div(D4);
console.log(D.toString())