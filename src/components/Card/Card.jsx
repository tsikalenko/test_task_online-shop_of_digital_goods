import PropTypes from 'prop-types';

import './card.scss';

const Card = (props) => {
    const { goods } = props;
    return (
        goods && (
            <div className='card'>
                <img
                    src={goods.imageUrls[0]}
                    alt={goods.name}
                    width={200}
                    height={200}
                    className={'card__img'}
                />
                <h3 className={'card__title'}>{goods.name}</h3>
                <p className='card__price'>{goods.currentPrice} UAH</p>
                <button className={'card__btn'}>Add to cart</button>
            </div>
        )
    );
};

Card.propTypes = {
    goods: PropTypes.object,
};
export default Card;
