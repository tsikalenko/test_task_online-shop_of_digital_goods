import { Link } from 'react-router-dom';
import { getAllGoods } from '../../api/goods';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';

import './goodsList.scss';
import '../../utils/styles/page.scss';
import Loading from '../../components/Loading';

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
                    <div className='goods-list__list'>{createCards()}</div>
                )
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default GoodsList;
