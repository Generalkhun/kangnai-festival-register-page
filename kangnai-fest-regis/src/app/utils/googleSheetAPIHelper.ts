import { google } from "googleapis";
import { promises as fsp } from "fs"
import { GoogleAuthOptions } from "google-auth-library";
import { values } from "lodash";

/**@todo use generated key file on production (GOOGLE_SHEET_KEYFILE_PATH) instead of the one from local secrets */
//const GOOGLE_SHEET_KEYFILE_PATH = '/tmp/googleSheetKeyFile.json'
const SHEET_RANGE_ADD = 'MainPage!A1:G' // used to append a record

// This funtion is to connect googlesheet api
const connectGoogleSheetsApi = async () => {
    let auth;
    const googleSheetAuthConfig = await getGoogleSheetAuthConfig();
    try {
        auth = await google.auth.getClient(googleSheetAuthConfig)
    } catch (error) {
        throw new Error(error as string);
    }
    // connect to googlesheet 
    const sheets = google.sheets({ version: 'v4', auth })
    return sheets
}

// const singleObjJsonFileGenerator = async (obj: Object, path: string) => {
//     const json = JSON.stringify(obj);
//     try {
//         await fsp.writeFile(path, json);
//     } catch (error) {
//         throw new Error(error as string)
//     }
// }

const getGoogleSheetAuthConfig = async () => {
    // const ggSheetCredential = JSON.parse(
    //     Buffer.from(process.env.GG_SHEET_KEY_BASE64 || '', "base64").toString()
    // );
    //generate a json file to store a keyfile
    //await singleObjJsonFileGenerator(ggSheetCredential, GOOGLE_SHEET_KEYFILE_PATH);
    // google sheets
    const GOOGLE_SHEET_AUTH_CONFIG: GoogleAuthOptions = {
        //scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        /**
         * @note keyfile from secrets folder local test.
         * Use keyfile from generated one instead on the production with keys from the env vars
        */

        /**@todo remove this one on prod, use GOOGLE_SHEET_KEYFILE_PATH instead */
        keyFile: './secrets/googleSheetKeyFile.json',
        //keyFile: GOOGLE_SHEET_KEYFILE_PATH,
    }
    return GOOGLE_SHEET_AUTH_CONFIG;
}

const transformToArrayTobeAddedToGGSheet = (formData: Object, expectedLength: number) => {
    if (Object.keys(formData).length !== expectedLength) {
        throw new Error(`number of field must be ${expectedLength}`)
    }
    return values(formData)
}
export const saveFormToGGSheet = async (formData: any) => {

    // transform the to arrays format 
    const tobeAddedDataArray = transformToArrayTobeAddedToGGSheet(formData, 7)

    // connect to the sheet 
    const sheets = await connectGoogleSheetsApi()

    // request 
    const request = {
        //spreadsheetId: process.env.SHEET_ID,
        /**@todo move this sheet id to process env. */
        spreadsheetId: "1Ut74ukr1upU8Vk7-ClqWb2UHcWqJTByP2lScqjOhk68",
        range: SHEET_RANGE_ADD,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
            "majorDimension": "ROWS",
            "values": [tobeAddedDataArray],
        }
    }
    // append data on a google sheet row
    const response = await sheets.spreadsheets.values.append(request)
    return response
}