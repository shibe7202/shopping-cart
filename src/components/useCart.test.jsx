import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useCart from "./useCart.jsx";

describe('useCart custom hook', () => {
    it('adds item to cart', () => {
        const { result } = renderHook(() => useCart())
        const obj = { id: 'test' }
        act(() => {
            result.current.addItem(obj)
        })
        const returnedItems = result.current.returnItems()

        expect(returnedItems.includes(obj)).toBeTruthy()
    })

    it('stacks duplicate items', () => {
        const { result } = renderHook(() => useCart())
        const obj1 = { id: 'test', quantity: 1 }
        const obj2 = { id: 'test', quantity: 1 }
        const obj3 = { id: 'example', quantity: 1 }

        act(() => {
            result.current.addItem(obj1)
        })
        act(() => {
            result.current.addItem(obj2)
        })
        act(() => {
            result.current.addItem(obj3)
        })
        const returnedItems = result.current.returnItems()

        expect(returnedItems[0].quantity).toBe(2)
    })

    it('removes items from cart', () => {
        const { result } = renderHook(() => useCart())
        const obj1 = { id: 'test', quantity: 1 }
        const obj2 = { id: 'example', quantity: 1 }
        const obj3 = { id: 'example', quantity: 1 }

        act(() => {
            result.current.addItem(obj1)
        })
        act(() => {
            result.current.addItem(obj2)
        })
        act(() => {
            result.current.addItem(obj3)
        })
        act(() => {
            result.current.removeItem(obj1)
        })
        act(() => {
            result.current.removeItem(obj3)
        })
        const returnedItems = result.current.returnItems()

        expect(returnedItems[0]).toBe(obj2)
        expect(returnedItems[0].quantity).toBe(1)
    })

    it('returns total amount of items', () => {
        const { result } = renderHook(() => useCart())
        const obj1 = { id: 'test', quantity: 1 }
        const obj2 = { id: 'example', quantity: 1 }
        const obj3 = { id: 'example', quantity: 1 }

        act(() => {
            result.current.addItem(obj1)
        })
        act(() => {
            result.current.addItem(obj2)
        })
        act(() => {
            result.current.addItem(obj3)
        })

        expect(result.current.totalItems()).toBe(3)

    })
})