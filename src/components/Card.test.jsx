import { vi, describe, it, expect } from "vitest";
import { render, screen, act } from "@testing-library/react";
import Shop from "./Shop";
import ItemBar from "./ItemBar.jsx";
import App from '../App.jsx'
import Card from './Card.jsx'

const data = [
    { title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', img: '', description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', price: 0, id: 'Item1' },
    { title: 'Mens Casual Premium Slim Fit T-Shirts', img: '', description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.', price: 0, id: 'Item2' }
]

describe("Card component", () => {
    it('renders card', () => {
        const cartTools = { addItem: vi.fn() }
        const { container } = render(<Card data={data[0]} cartTools={cartTools} />)

        expect(container).toMatchSnapshot()
    })

    it('shortens long description', () => {
        const cartTools = { addItem: vi.fn() }

        act(() => render(<Card data={data[1]} cartTools={cartTools} />))

        const description = screen.getByPlaceholderText('description').textContent
        expect(description.length).toBeLessThanOrEqual(88)
        expect(description[description.length - 1]).toBe('.')
    })

})