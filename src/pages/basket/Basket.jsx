import React, { useEffect } from "react";
import Layout from "../../components/common/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getBasketThunk } from "../../redux/reducers/basketSlice";
import Card from "../../components/cards/Card";

const Basket = () => {
  const dispatch = useDispatch();
  const basketProducts = useSelector((state) => state.basket.basket);
  useEffect(() => {
    dispatch(getBasketThunk());
  }, []);

  return (
    <Layout>
      {basketProducts && basketProducts.map((item) => <Card item={item} />)}
    </Layout>
  );
};

export default Basket;
