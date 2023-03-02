import { Link } from 'react-router-dom';
import {
    getAllGoods,
    getAllGoodsSort,
    getAllGoodsCategory,
} from '../../api/goods';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Card from '../../components/Card';

import './goodsList.scss';
import '../../utils/styles/page.scss';

const GoodsList = () => {
    const [goodsList, setGoodsList] = useState();
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setGoodsList(await getAllGoods());
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    const changeSort = (event) => {
        (async () => {
            try {
                switch (event.target.value) {
                    case 'popularity':
                        setGoodsList(await getAllGoods());
                        break;
                    case 'low':
                        setGoodsList(await getAllGoodsSort('low'));
                        break;
                    case 'high':
                        setGoodsList(await getAllGoodsSort('high'));
                        break;
                }
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };
    const changeCategory = (event) => {
        (async () => {
            try {
                switch (event.target.value) {
                    case 'all':
                        setGoodsList(await getAllGoods());
                        break;
                    case 'men':
                        setGoodsList(await getAllGoodsCategory('men'));
                        break;
                    case 'ladies':
                        setGoodsList(await getAllGoodsCategory('ladies'));
                        break;
                    case 'accessories':
                        setGoodsList(await getAllGoodsCategory('accessories'));
                        break;
                }
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    };

    const createCards = () => {
        return goodsList.map((item) => (
            <Link
                to={`/goods/${item._id}`}
                key={item._id}
                className={'goods-list__item'}
            >
                <Card goods={item} />
            </Link>
        ));
    };

    return (
        <div className='goods-list page'>
            <h2 className={'page__title'}>Goods List</h2>
            {goodsList ? (
                isErrorLoading ? (
                    <p>Something going wrong. Try again</p>
                ) : (
                    <>
                        <div className='goods-list__filter'>
                            <label className='goods-list__label'>Sort:</label>
                            <select
                                name='sort'
                                className='goods-list__select'
                                onChange={changeSort}
                            >
                                <option value='popularity'>
                                    by popularity
                                </option>
                                <option value='low'>by lover price</option>
                                <option value='high'>by higher price</option>
                            </select>
                            <label className='goods-list__label'>
                                Categories:
                            </label>
                            <select
                                name='category'
                                className='goods-list__select'
                                onChange={changeCategory}
                            >
                                <option value='all'>all</option>
                                <option value='men'>men</option>
                                <option value='ladies'>ladies</option>
                                <option value='accessories'>accessories</option>
                            </select>
                        </div>
                        <div className='goods-list__list'>{createCards()}</div>
                    </>
                )
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default GoodsList;
