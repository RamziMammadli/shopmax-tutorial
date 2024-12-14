import React, { useEffect } from "react";
import styles from "./ProductSection.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../../../components/cards/Card";
import { getProductsThunk, postProductBasketThunk, postProductWishThunk } from "../../../../redux/reducers/productSlice";

const ProductSection = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  console.log(products);

  const addWish = (item) => {
    dispatch(postProductWishThunk(item))
  }

  const addBasket = (item) => {
    dispatch(postProductBasketThunk(item))
  }
  
  

  useEffect(() => {
    dispatch(getProductsThunk())
  }, []);

  if (error) return <p>XETA BAS VERDI</p>;
  if (loading) return <p>Yuklenir...</p>;

  return (
    <div className={styles.container}>
      {products && products.map((item) => <Card item={item} addtobasket={() => addBasket(item)} addtowish={() => addWish(item)} />)}
    </div>
  );
};

export default ProductSection;
