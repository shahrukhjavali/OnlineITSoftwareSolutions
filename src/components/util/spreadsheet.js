import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.React_App_SPREADSHEET_ID;
const client_email = process.env.React_App_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.React_App_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const appendData_Inquiry = async (row) => {
    try{
        await doc.useServiceAccountAuth({
            client_email:client_email,
            private_key:PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsById[0];
        await sheet.addRow(row);
    }catch(e){
        console.log(e);
    }

};
export default appendData_Inquiry;