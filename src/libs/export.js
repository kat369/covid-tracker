const separator = ',';

const getFormattedDate = () => {
    let dateObj = new Date();
    let day = dateObj.getDate();
    let month = dateObj.getMonth();
    let year = dateObj.getFullYear();
    return `${day}-${month}-${year}`;
};

export const exportTableToCSV = (filename = '') => {
    const rows = document.querySelectorAll('table tr');
    const csv = [];

    for (var i = 0; i < rows.length; i++) {
        var row = [];
        var cols = rows[i].querySelectorAll('td, th');
        for (var j = 0; j < cols.length; j++) {
            var data = cols[j]?.innerText
                ?.replace(/(\r\n|\n|\r)/gm, '')
                .replace(/(\s\s)/gm, ' ');
            data = data.replace(/"/g, '" "');
            row.push('"' + data + '"');
        }
        csv.push(row.join(separator));
    }

    var csvStr = csv.join('\n');
    var link = document.createElement('a');
    link.style.display = 'none';
    link.setAttribute('target', '_blank');
    link.setAttribute(
        'href',
        'data:text/csv;charset=utf-8,' + encodeURIComponent(csvStr)
    );
    link.setAttribute('download', `${filename}-${getFormattedDate()}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
