import { useState } from 'react';

function useCart() {
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(false)

    function addItem(item) {
        if (items.some(value => value.id === item.id)) {
            setItems(items.map(value => {
                if (value.id === item.id) {
                    value.quantity += 1
                    return value
                } else {
                    return value
                }
            }))
        } else {
            setItems([...items, item])
        }
    }

    function removeItem(item) {
        const filteredItems = []
        items.forEach(value => {
            if (value.id === item.id && value.quantity > 1) {
                value.quantity -= 1
                filteredItems.push(value)
            } else if (value.id != item.id) {
                filteredItems.push(value)
            }
        })
        setItems(filteredItems)
    }

    function totalItems() {
        const total = items.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity
        }, 0)
        return total
    }

    function showCart() {
        setVisible(!visible)
    }

    return { addItem, removeItem, totalItems, showCart, items, visible }
}

export default useCart