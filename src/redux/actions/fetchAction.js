export const getData = () => async (dispatch) => {
  dispatch({ type: "GET_DATA_PENDING" });

  try {
    const res = await fetch("https://northwind.vercel.app/api/suppliers");
    const data = await res.json();

    dispatch({
      type: "GET_FETCH_SUCCESSFULLY",
      payload: data,
    });
  } catch (err) {
    dispatch({ type: "GET_DATA_ERROR", error: err.message });
  }
};
