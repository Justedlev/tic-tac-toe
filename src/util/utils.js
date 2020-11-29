import _ from "lodash";

export const getRandomNumber = (min, max) => {
    if (min > max) {
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max - min));
};

export const isFreeSpace = (array, length) => {
    const awes = _.compact(array);
    if (length > awes.length) {
        return true;
    }
    return false;
};
