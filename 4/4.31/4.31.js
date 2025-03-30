import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit';
import { generateMultipleOfInteger } from './generateInteger';
import { bookTitleList } from './bookTitleList';
import { createBookCardDOMList } from './createBookCardDOMList';
import { createShoppingCartDOMList } from './createShoppingCartDOMList';

const initialState = [];

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: {
      reducer: (state, action) => {
        if (!state.find(productId => productId === action.payload)){
          state.push(action.payload);
        }
      },
      prepare: (productId) => {
        return {
          payload: productId,
        };
      },
    },
    removeFromCart: {
      reducer: (state, action) => {
        const index = state.indexOf(action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }       
      },
      prepare: (productId) => {
        return {
          payload: productId,
        }
      }
    }
  },
  selectors: {
    getTotalPrice: (state) => {
      const totalPrice = state.reduce((total, productId) => {
        return total + books.find(book => book.productId === productId).price;
      }, 0);
      return totalPrice;
    }
  }
});

const { addToCart, removeFromCart } = shoppingCartSlice.actions;
const { getTotalPrice } = shoppingCartSlice.selectors;

const { reducer } = shoppingCartSlice;

const store = configureStore({
  reducer: { 
    shoppingCart: reducer,
    //  другие редьюсеры
  },
});

const [products, shoppingCart] = ['products', 'shopping-cart'].map(id => document.getElementById(id));

const books = bookTitleList.map(title => ({ productId: nanoid(), title, price: generateMultipleOfInteger(500, 2000, 2) }));

const booksDOMList = createBookCardDOMList(books);

products.appendChild(booksDOMList);

products.addEventListener('click', (e) => {
  const {target} = e;
  if (target.tagName !== 'INPUT'){
    return;
  }

  store.dispatch(addToCart(target.dataset.id));
}, false);

shoppingCart.addEventListener('click', (e) => {
  const {target} = e;
  if (target.tagName !== 'BUTTON'){
    return;
  }

  store.dispatch(removeFromCart(target.dataset.id));
});

store.subscribe(() => {
  shoppingCart.textContent = '';
  shoppingCart.appendChild(createShoppingCartDOMList(books, store.getState().shoppingCart, getTotalPrice(store.getState())));
});

shoppingCart.appendChild(createShoppingCartDOMList(books, store.getState().shoppingCart, getTotalPrice(store.getState())));
