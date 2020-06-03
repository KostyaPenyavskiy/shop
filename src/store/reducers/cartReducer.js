import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, SELECTED_IMG, SWITCH_CART } from '../actions/actionsType';

const initialState = {
  items: [
    {
      id: 1,
      section: 'рубашки',
      title: 'Рубашка на пуговицах',
      price: '320',
      count: 20,
      selectedImg: 0,
      quantity: 1,
      images: [
        './images/clothes/1/0.jpg',
        './images/clothes/1/1.jpg',
        './images/clothes/1/2.jpg',
        './images/clothes/1/3.jpg',
        './images/clothes/1/4.jpg',
      ],
    },
    {
      id: 2,
      section: 'рубашки',
      title: 'Рубашка на пуговицах',
      price: '320',
      count: 20,
      selectedImg: 0,
      quantity: 1,
      images: [
        './images/clothes/2/0.jpg',
        './images/clothes/2/1.jpg',
        './images/clothes/2/2.jpg',
        './images/clothes/2/3.jpg',
        './images/clothes/2/4.jpg',
      ],
    },
    {
      id: 3,
      section: 'рубашки',
      title: 'Кофта Адидас',
      price: '256',
      count: 11,
      selectedImg: 0,
      quantity: 1,
      images: [
        './images/clothes/3/0.jpg',
        './images/clothes/3/1.jpg',
        './images/clothes/3/2.jpg',
        './images/clothes/3/3.jpg',
        './images/clothes/3/4.jpg',
      ],
    },
    {
      id: 4,
      section: 'рубашки',
      title: 'Рубашка на пуговицах',
      price: '320',
      count: 20,
      selectedImg: 0,
      quantity: 1,
      images: [
        './images/clothes/4/0.jpg',
        './images/clothes/4/1.jpg',
        './images/clothes/4/2.jpg',
        './images/clothes/4/3.jpg',
        './images/clothes/4/4.jpg',
      ],
    },
    {
      id: 5,
      section: 'кроссовки',
      title: 'Кроссовки Puma',
      price: '125',
      count: 13,
      selectedImg: 0,
      quantity: 1,
      images: [
        './images/clothes/5/0.jpg',
        './images/clothes/5/1.jpg',
        './images/clothes/5/2.jpg',
        './images/clothes/5/3.jpg',
      ],
    },
    {
      id: 6,
      section: 'кроссовки',
      title: 'Кроссовки Adidas',
      price: '220',
      count: 10,
      selectedImg: 0,
      quantity: 1,
      images: [
        './images/clothes/6/0.jpg',
        './images/clothes/6/1.jpg',
        './images/clothes/6/2.jpg',
        './images/clothes/6/3.jpg',
        './images/clothes/6/4.jpg',
      ],
    },
  ],
  isCartHidden: true,
  addedItems: [],
  total: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_ITEM:

      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };

    case ADD_QUANTITY:

      return {
        ...state,
        addedItems: state.addedItems.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        }),
      };

    case SUB_QUANTITY:
      const itemToSub = state.addedItems.find(item => item.id === action.id);

      if (itemToSub.quantity === 1) {
        const newItems = state.addedItems.filter(item => item.id !== itemToSub.id);

        return {
          ...state,
          addedItems: newItems,
        };
      }

      return {
        ...state,
        addedItems: state.addedItems.map((item) => {
          if (item.id === itemToSub.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }

          return item;
        }),
      };

    case ADD_TO_CART:
      const newItem = state.items.find(item => item.id === action.id);

      if (state.addedItems.find(item => item.id === newItem.id)) {
        return {
          ...state,
          addedItems: state.addedItems.map((item) => {
            if (item.id === newItem.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            }

            return item;
          }),
        };
      }

      return {
        ...state,
        addedItems: [...state.addedItems, newItem],
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        }),
      };

    case SWITCH_CART:
      return {
        ...state,
        isCartHidden: !action.isOpen,
      };

    case SELECTED_IMG:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return {
              ...item, selectedImg: action.i,
            };
          }

          return item;
        }),
      };
    default:
      return state;
  }
};
