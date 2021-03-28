export function formatDate(date) {
    const 
        dateObj = new Date(date),
        year = dateObj.getUTCFullYear(),
        month = dateObj.getUTCMonth() + 1,
        day = dateObj.getUTCDate(),
        formatedDate = `${year}-${month}-${day}`;
    return formatedDate;
}