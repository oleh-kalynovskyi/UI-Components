//logic for creating a file from pdf generator by react-pdf/renderer
//generated file may be used for sending to server or to email

// create file from pdf genertor
const generateFileFromPDF = async (data) => {
    const element = data.file;
    const myPdf = pdf(<element/>);
    myPdf.updateContainer(element);
    const blob = await myPdf.toBlob();
    var file = new File([blob], "pdfname.pdf", {lastModified: (new Date()).getTime()})
    createFormDataAndSendToServer({blob: file, data})
};

// create FormData with pgf file and other options for sending to server
// sendEmail -- function for sendint to server
const createFormDataAndSendToServer = (info) => {
    const formData = new FormData();
    formData.append('file', info.blob, 'PenflexClient.pdf');
    formData.append('email', info.email);
    formData.append('name', info.name);
    formData.append('company', info.company);
    formData.append('location', info.location);
    sendEmail(formData)
}
// let config = {
//   method: 'POST',
//   body: formData
// };
//fetch('https://hijfb6luu2.execute-api.us-east-1.amazonaws.com/prod/pdf-submission', config)
