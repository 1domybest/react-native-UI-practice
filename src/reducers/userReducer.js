import { createSlice } from '@reduxjs/toolkit' // toolkit 추가된 임포트
import { logInRequest } from '../actions/userAction'

const initialState = {
    loading: false,
    user: null,
    id: '',
    password: '',
    error: '',
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: { // 동기적인  액션을 넣는다.   내부적인 액션
        logOut (state, action) {
            state.user = null
            state.loading = false
        },
        id (state, action) {
            state.id = action.payload
        },
        password (state, action) {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => { // 비동적인 엑션을 넣는다  외부적인 액션 (예를들어 userSlice에서 post의 액션을 써야할때 이곳에 적는데 그때는 동기가아니고 비동기여도 넣는다.)
        builder.addCase(logInRequest.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(logInRequest.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false;
        });
        builder.addCase(logInRequest.rejected, (state, action) => {
            console.log('rejected 됨')
            console.log(action)
            state.user = null;
            state.loading = false;
        });
    },
});

export default userSlice;
