const { createContext, useState } = require("react")


const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const isInCart = (item) => cart.some(product => product.name === item.name) 

    const removeItem = (item) => {
        const checkCart = cart.filter(product => product.name !== item.name)
        setCart(checkCart)
    }

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ cart, setCart, removeItem, clearCart, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContextProvider, CartContext }