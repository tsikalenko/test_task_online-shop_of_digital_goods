import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOneGoods } from '../../api/goods';

import './goods.scss';
import '../../utils/styles/page.scss';
import Loading from '../../components/Loading';

const Goods = () => {
    const { id } = useParams();

    const [goods, setGoods] = useState();
    const [isErrorLoading, setIsErrorLoading] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setGoods(await getOneGoods(id));
            } catch (err) {
                setIsErrorLoading(true);
            }
        })();
    }, []);

    return (
        <div className='goods page'>
            {goods ? (
                isErrorLoading ? (
                    <p>Something going wrong. Try again</p>
                ) : (
                    <>
                        <h2 className='goods__title'>{goods.name}</h2>
                        <img
                            src={goods.imageUrls[0]}
                            alt={goods.name}
                            width={280}
                            height={280}
                            className={'goods__img'}
                        />
                        <p className='goods__description'>
                            {goods.description}
                        </p>
                        <p className='goods__price'>{goods.currentPrice} UAH</p>
                        <button className='goods__btn'>Add to cart</button>
                    </>
                )
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Goods;
