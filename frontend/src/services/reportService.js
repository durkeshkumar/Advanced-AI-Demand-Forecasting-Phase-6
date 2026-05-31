
const API =
"http://127.0.0.1:8000";


export function downloadReport(){

window.open(

`${API}/reports/download`

);

}


export function downloadExcel(){

window.open(

`${API}/reports/download-excel`

);

}

// -----------------------------------
// DASHBOARD SUMMARY EXPORT
// -----------------------------------

export const downloadDashboardPDF = () => {

window.open(

`${API}/reports/download`

);

};


export const downloadDashboardExcel = () => {

window.open(

`${API}/reports/download-excel`

);

};