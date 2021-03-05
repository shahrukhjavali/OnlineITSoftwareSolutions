import { GoogleSpreadsheet } from 'google-spreadsheet';

const SPREADSHEET_ID = process.env.React_App_SPREADSHEET_ID;
const client_email = process.env.React_App_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.React_App_PRIVATE_KEY;

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
const readData_Testimonies = async () => {
    try{
        await doc.useServiceAccountAuth({
            client_email:client_email,
            private_key:PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[2];
        var arr = [];
        let count = 0;
        await (await sheet.getRows()).map(row => {
            arr [count] = Object.values(row);
            count++;
        })
        return arr;
    }catch(e){
        console.log(e);
    }
};
export default readData_Testimonies;