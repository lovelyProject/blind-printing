//1000 - кол-во милисекунд в 1 секунде, цифра 1 - чтобы не делить на 0
//start - время ввода первого символа
export default function getDifferenceInSeconds(start) {
    return start ? Math.round((new Date().getTime() - start) / 1000) : 1;
}