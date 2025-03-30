const updateLastId = (data) => {
    const length = data.length;
    const hasOnlyOne = length === 1 || length === 0;

    if (hasOnlyOne) {
        return null;
    }

    const {uid} = data[length - 2];

    return uid;
};

module.exports = {updateLastId};
