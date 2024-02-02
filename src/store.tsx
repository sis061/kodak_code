import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  imgUrl: string;
  title: string;
  price: number;
  count: number;
}

let cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0,
      imgUrl: "/img/section01_product001_front.jpg",
      title: "페그 BLACK",
      price: 109000,
      count: 2,
    },
    {
      id: 1,
      imgUrl: "/img/section01_product002_front.jpg",
      title: "케이 마이크로플리스 안감형 자켓 BLACK",
      price: 219000,
      count: 1,
    },
    {
      id: 2,
      imgUrl: "/img/section01_product003_front.jpg",
      title: "레터링 릴렉스핏 볼캡 BLACK",
      price: 45000,
      count: 1,
    },
  ] as CartItem[],
  reducers: {
    addCount(state, action: PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[num].count++;
    },
    decreaseCount(state, action: PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      console.log(num);
      if (state[num].count > 0) {
        state[num].count--;
      } else if (state[num].count === 0) {
        alert("상품이 더 이상 없습니다.");
      }
    },
    addItem(state, action: PayloadAction<CartItem>) {
      let num = state.findIndex((a) => a.id === action.payload.id);
      if (num !== -1) {
        // console.log(action.payload.count);
        // console.log(state[num].count);
        // 장바구니에 상품 있으면 지정 상품 갯수 만큼 추가 함수
        const numAdd = () => {
          state[num].count = state[num].count + action.payload.count;
        };
        numAdd();
      } else {
        state.push(action.payload);
      }
    },

    deleteItem(state, action: PayloadAction<{ data: { checkItems: number[] } }>) {
      const updatedState = state.filter((item) => !action.payload.data.checkItems.includes(item.id));
      return updatedState;
    },

    deleteAll(state, action: PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(num + 1);
    },
  },
});

// addCount(1)

export let { addCount, decreaseCount, addItem, deleteItem, deleteAll } =
  cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
