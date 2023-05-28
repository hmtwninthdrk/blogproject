import React, { useEffect } from "react";
import ShopHeader from "../ShopHeader/ShopHeader";
import ShopFooter from "../ShopFooter/ShopFooter";
import ShopSideBar from "../ShopSideBar/ShopSideBar";
import s from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import minus from "../../../../img/minus.png";
import plus from "../../../../img/plus.png";
import cross from "../../../../img/cross.png";
import { getCategories } from "../../../Redx/categories/categoriesLayer";
import { getProducts } from "../../../Redx/products/productsLayer";
import { addToCart, removeItemFromCart } from "../../../Redx/user/userLayer";
import { sumBy } from "../../../Redx/fnctns";
const Cart = () => {
  const { cart } = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const changeQuantity = (item, quantity) => {
    console.log(quantity); //
    dispatch(addToCart({ ...item, quantity }));
  };

  return (
    <div className={s.container}>
      <ShopHeader />
      <div className={s.center}>
        <ShopSideBar />

        <div className={s.cart}>
          <h1 className={s.title}>CART</h1>
          {!cart.length ? (
            <div className={s.no_items}>Your cart is empty</div>
          ) : (
            <div className={s.list}>
              {cart.map((item) => {
                const { title, image, price, category, id, quantity } = item;
                return (
                  <div className={s.info} key={id}>
                    <img className={s.img} src={image} alt="" />

                    <div>
                      <img
                        src={cross}
                        onClick={() => removeItem(item.id)}
                        className={s.icons}
                        alt=""
                      />
                      <div className={s.title}>{title}</div>
                      <div className={s.price}>Price: {price}</div>
                      <div className={s.category}>Category: {category}</div>
                      <div className={s.quantitiy}>Quantity: {quantity}</div>
                      <div className={s.actions}>
                        <img
                          className={s.icons}
                          src={minus}
                          onClick={() =>
                            changeQuantity(item, Math.max(1, quantity - 1))
                          }
                          alt=""
                        />
                        <img
                          className={s.icons}
                          src={plus}
                          onClick={() =>
                            changeQuantity(item, Math.max(1, quantity + 1))
                          }
                          alt=""
                        />
                      </div>
                      <div className={s.total}>{price * quantity}$</div>
                    </div>

                    <div className={s.actions}></div>
                  </div>
                );
              })}
               <div className={s.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>
            </div>

            
          )}
        </div>
      </div>
      <ShopFooter />
    </div>
  );
};

export default Cart;
