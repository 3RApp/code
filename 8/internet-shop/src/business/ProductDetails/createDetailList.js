import { detailsDictionary } from "./detailsDictionary";

export const createDetailList = (details) => {

    const returnList = [];

    for (const [contractKey, value] of Object.entries(details)) {
        const humanReadableKey = detailsDictionary[contractKey];

        if (humanReadableKey) {
            returnList.push({
                key: contractKey, // Это для метода map
                value,
                title: humanReadableKey
            });
            continue;
        }

        returnList.push({
            key: contractKey, // Это для метода map
            value,
            title: contractKey
        });
    }

    return returnList;
};