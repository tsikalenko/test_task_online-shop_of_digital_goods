import axios from '../utils/instance/instatce';

export const getAllGoods = async () => {
    const { data } = await axios.get('items/all.json');
    return data;
};

export const getOneGoods = async (id) => {
    const { data } = await axios.get(`items/oneItem/${id}.json`);
    return data;
};
