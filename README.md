# Интернет магазин цифровых товаров

## Обязательно:
Шапка сайта(с ссылками на страницы существующие)
Футер с какой-либо информацией

## Создание страниц:
* Главная с баннерами
* Корзина(хранить товар в корзине с использованием redux(можно redux-persist) основная работа с localstorage
* Личный кабинет
* Динамическая страница товара
* Авторизация и регистрация(с использованием Firebase и Auth0, методы авторизации и регистрации: (Почта и пароль), гугл авторизация и так-же создание записей при регистрации в коллекцию)
* Список товаров, категорий и методы фильтров по товарам(от меньшей цены к большей, от большей цены к меньшей, по популярности)

Страница личного кабинета  будет не доступна если пользователь не авторизирован, при попытки перейти на недоступную страницу - пользователя будет перекидывать на страницу авторизации и регистрации

При попытки не авторизированного пользователя купить товар, будет выскакивать уведомление с содержанием следующем (Чтобы добавить товар в корзину, Вам нужно (авторизоваться - ссылка на страницу авторизации/регистрации);
