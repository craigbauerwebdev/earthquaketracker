export function getDateString(unix_timestamp) {
    const formattedDate = new Date(+unix_timestamp)
        .toUTCString()
        .split(' ')
        .slice(0, 4)
        .join(' ');
    return formattedDate;
}