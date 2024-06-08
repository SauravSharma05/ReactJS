
// export const reducerFun = (state=10,action)=>{
//     switch(action.type)
//     {
//      case 'increment' : return state+1
 
//      case 'decrement' : return state-1;
 
//      default : return state;
//     }
//  }


 const userSlice = createSlice({
    name: "users",
    initialState: usersList,
    reducers: {
      addusers: (state, action) => {
          // console.log(state)//[]
          // console.log(action.payload);//{name: '', email: ''}  
  
          state.push(action.payload)
      },
    },
  });
  
   export const {addusers} = userSlice.actions;
  //export const { increment, decrement, incrementByAmount } =
  // counterSlice.actions
  
  export default userSlice.reducer;
  // export default counterSlice.reducer