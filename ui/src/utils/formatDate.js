export function formatDate(date) {
    const 
        dateObj = new Date(date),
        year = dateObj.getUTCFullYear();
        let month = dateObj.getUTCMonth() + 1,
        day = dateObj.getUTCDate();
        if (month.length < 2) {
            month = `0${month}`;
        }
        if (day.length < 2) {
            day = `0${day}`;
        }
        const formatedDate = `${year}-${month}-${day}`;
    return formatedDate;
}