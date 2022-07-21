import React, { createContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [CartItem, setCartItem] = useState([]);

  const length = JSON.parse(localStorage.getItem("cart"));
  let cartData = length || [];

  const [theme, setTheme] = useState(true);
  const [cart, setCart] = useState(0);
  const [name, setName] = useState("");
  const click = () => {
    setCart(length + 1);
    alert("Product Added To Cart!!!! Continue Shopping");
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  const [auth, setAuth] = useState(false);
  const login = () => {
    setAuth(true);
    navigate("/");
  };

  const logout = () => {
    setAuth(false);
    alert(`Hello Mr. ${name} You are Logged Out`);
    setName("");
  };
  return (
    <AuthContext.Provider
      value={{
        name,
        setName,
        click,
        CartItem,
        setCartItem,
        cart,
        changeTheme,
        auth,
        login,
        logout,
        setAuth,
        cartData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
