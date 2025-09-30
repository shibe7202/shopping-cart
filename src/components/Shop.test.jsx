import { vi, describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import useItemURL from "./useItemUrl";
import App from '../App.jsx'
import * as rrd from "react-router-dom";

vi.mock('./useItemUrl')
vi.mock("react-router-dom")
const data = [
    { title: 'Item1', img: '', description: 'Item1', price: 0, id: 'Item1' },
    { title: 'Item2', img: '', description: 'Item2', price: 0, id: 'Item2' }
]

describe("Shop component", () => {
    afterEach(() => {
        vi.resetAllMocks()
    })

    it("renders shop page", () => {
        rrd.useOutletContext.mockReturnValue(vi.fn())
        vi.mocked(useItemURL).mockReturnValue({
            loading: false,
            error: false,
            itemURL: data
        })
        const { container } = render(<Shop />);
        expect(container).toMatchSnapshot();
    });

    it("renders loading screen", () => {
        vi.mocked(useItemURL).mockReturnValue({
            loading: true,
            error: false,
            itemURL: data
        })

        render(<Shop />)
        expect(screen.getByText('Loading...').textContent).toMatch(/Loading.../)
    });

    it("renders error screen", () => {
        vi.mocked(useItemURL).mockReturnValue({
            loading: false,
            error: true,
            itemURL: data
        })

        render(<Shop />)
        expect(screen.getByText('A network error has occurred').textContent).toMatch(/A network error has occurred/)
    })

    it("renders grid of shopping items", () => {
        rrd.useOutletContext.mockReturnValue(vi.fn())
        vi.mocked(useItemURL).mockReturnValue({
            loading: false,
            error: false,
            itemURL: data
        })

        render(<Shop />)
        expect(screen.getByText('Item1').textContent).toMatch(/Item1/)
        expect(screen.getByText('Item2').textContent).toMatch(/Item2/)
    })
});