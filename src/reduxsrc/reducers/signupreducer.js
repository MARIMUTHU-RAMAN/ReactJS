
//redux state

const SignupReducer=(state={},action)=>{
    switch(action.type){
        case 'SAVE_REGISTRATION' :
            return{

                customerValues: action.payload,

            }
        default: return state;
    }
}

export default  SignupReducer;