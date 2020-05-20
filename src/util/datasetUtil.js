import moment from "moment";

export function isJSONString(str) {
    try{
        JSON.parse(str);
        return true;
    }
    catch{
        return false;
    }
}

export function getObjectKeys(obj) {
    if(isJSONString(obj)) {
        return Object.keys(JSON.parse(obj));
    }
    return Object.keys(obj);
}
export function getObjectValues(obj) {
    if(isJSONString(obj)) {
        return Object.values(JSON.parse(obj));
    }
    return Object.values(obj);
}

export function _getSchema(data) {
    if(data === null) return [];
    if(data.data_schema && data.data_schema !== "None") return data.data_schema.split(',');
    if(data.data_config === null || data.data_config === undefined) return [];
    if(!isJSONString(data.data_config)) return [];
    const arrConfig = JSON.parse(data.data_config);
    let schema = [];
    for (let index = 0; index < arrConfig.length; index++) {
        schema.push(Object.keys(arrConfig[index])[0]);
    }
    return schema;
}

export function _getSampleData(data) {
    if(data === null) return [];
    if(data.sample_data === null || data.sample_data === undefined) return [];
    const schema = _getSchema(data);
    // console.log('schema-------->', schema);
    if(isJSONString(data.sample_data)) {
        const arrSampleData = JSON.parse(data.sample_data);
        // console.log('arrSampleData-------->', arrSampleData);
        try{
            if(arrSampleData[0][0] === schema[0] || arrSampleData[0][1] === schema[1] || arrSampleData[0][2] === schema[2]) {
                arrSampleData.splice(0,1);
                // console.log('arrSampleData      ret-------->', arrSampleData);
                return arrSampleData;
            }
            else return arrSampleData;
        }
        catch {
            console.log('>>>>> sample data catch');
            return arrSampleData;
        }
    }
    else {
        const sampleData = data.sample_data.split('\n');
        const returnSample = [];
        const idxGPSstr = schema.map(el => el.toLowerCase()).indexOf('gps');
        for (let id = 0; id < sampleData.length; id++) {
            const element = sampleData[id].split(',');
            if(idxGPSstr > -1) {
                try{
                    element.splice(idxGPSstr, 2, element[idxGPSstr] + ',' + element[idxGPSstr + 1]);
                    returnSample.push(element);
                }
                catch {
                    console.log('>>>>>>>> gps data invalidate');
                    returnSample.push(element);
                }
            }
            else {
                returnSample.push(element);
            }
        }
        return returnSample;
    }
}

export function getSchema(data) {
    if(data === null) return null;
    if(data.data_schema) return data.data_schema.split(',');
    if(data.data_config === null || data.data_config === undefined) return null;
    if(!isJSONString(data.data_config)) return null;
    const arrConfig = JSON.parse(data.data_config);
    let schema = [];
    for (let index = 0; index < arrConfig.length; index++) {
        schema.push(Object.keys(arrConfig[index])[0]);
    }
    return schema;
}

export function getSampleData(data) {
    if(data === null) return null;
    if(data.sample_data === null || data.sample_data === undefined) return null;
    const schema = getSchema(data);
    if(isJSONString(data.sample_data)) {
        const arrSampleData = JSON.parse(data.sample_data);
        try{
            if(arrSampleData[0][0] === schema[0]) {
                arrSampleData.splice(0,1);
                return arrSampleData;
            }
        }
        catch {
            console.log('>>>>> sample data catch');
            return arrSampleData;
        }
    }
    else {
        const sampleData = data.sample_data.split('\n');
        const returnSample = [];
        const idxGPSstr = schema.indexOf('gps');
        for (let id = 0; id < sampleData.length; id++) {
            const element = sampleData[id].split(',');
            if(idxGPSstr > -1) {
                try{
                    element.splice(idxGPSstr, 2, element[idxGPSstr] + ',' + element[idxGPSstr + 1]);
                    returnSample.push(element);
                }
                catch {
                    console.log('>>>>>>>> gps data invalidate');
                    returnSample.push(element);
                }
            }
            else {
                returnSample.push(element);
            }
        }
        return returnSample;
    }
}

export function getCategoryIdx(category) {
    switch (category) {
        case 'transportation':
        case 'traffic':
        case 'transport':
            return 0;
        case 'ean':
        case 'weather':
            return 1;
        case 'ras':
            return 2;
        case 'safety':
            return 3;
        case 'energy':
            return 4;
        case 'other':
            return 5;
        default:
            return 5;
    }
}

export function getCategoryName(category) {
    const categories = ['Transportation','Environment and Nature','Roads and Streets','Citizens Safety','Energy','Other'];
    return categories[getCategoryIdx(category)];
}

// export function formatDate(strDate) {
//     if(strDate) {
//         return moment(strDate).format("DD/MM/YYYY") + " @" + moment(strDate).format("HH:mm");
//     }
//     else
//         return strDate;
// };
export function formatDate(strDate) {
    if(strDate) {
        return moment(strDate).format("MM/DD/YYYY hh:mm A");
    }
    else
        return strDate;
};

export const getHistoryDateFormat = (date) => moment(date).format('MM/DD/YYYY hh:mm A');
