import format from "date-fns/format"
function getExactDate(date){
    return new Date(format(date, 'MM/dd/yyyy') + ' EDT');
}

function getExactDateWithDateStr(dateStr){
    return new Date(dateStr + ' EDT');
}

export {getExactDate, getExactDateWithDateStr};