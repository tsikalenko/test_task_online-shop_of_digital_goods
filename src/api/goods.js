/** It's only imitation request to server **/

import axios from '../utils/instance/instatce';

export const getAllGoods = async () => {
    const { data } = await axios.get('items/all.json');
    return data;
};

export const getOneGoods = async (id) => {
    const { data } = await axios.get(`items/oneItem/${id}.json`);
    return data;
};

export const getAllGoodsSort = async (type) => {
    const { data } = await axios.get('items/all.json');
    return data.sort((item1, item2) => {
        if (type === 'low') {
            return item1.currentPrice < item2.currentPrice ? -1 : 1;
        } else if (type === 'high') {
            return item1.currentPrice < item2.currentPrice ? 1 : -1;
        }
    });
};

export const getAllGoodsCategory = async (category) => {
    const { data } = await axios.get(`items/filters/${category}.json`);
    return data;
};
