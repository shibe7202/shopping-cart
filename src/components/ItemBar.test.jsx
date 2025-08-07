import { vi, describe, it, expect } from "vitest";
import { render, screen, renderHook, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "./Shop";
import ItemBar from "./ItemBar.jsx";
import App from '../App.jsx'
import useCart from "./useCart.jsx";

const data = {
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
}

describe('ItemBar component', () => {
    it('increases quantity after clicking plus', async () => {
        const user = userEvent.setup()
        const cartTools = { addItem: vi.fn() }

        act(() => {
            render(<ItemBar data={data} cartTools={cartTools} />)
        })

        const button = screen.getByRole('button', { name: '+' })

        await act(async () => {
            await user.click(button)
        })

        expect(screen.getByText(/2/).textContent).toMatch(/2/)
    })

    it('adds item to cart with correct quantity', async () => {
        const user = userEvent.setup()
        const { result } = renderHook(() => useCart())

        act(() => {
            render(<ItemBar data={data} cartTools={result.current} />)
        })

        const buttonPlus = screen.getByRole('button', { name: '+' })
        const buttonAddItem = screen.getByRole('button', { name: 'Add To Cart' })

        await act(async () => {
            await user.click(buttonPlus)
        })
        await act(async () => {
            await user.click(buttonAddItem)
        })

        expect(result.current.returnItems()[0].id).toBe(0)
        expect(result.current.returnItems()[0].quantity).toBe(2)
    })
})