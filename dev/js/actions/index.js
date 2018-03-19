export const selectUser = (user) => {
    console.log("tıkladığın isim", user.first);
    return{
        type: "USER_SELECTED",
        payload: user,
    }
};