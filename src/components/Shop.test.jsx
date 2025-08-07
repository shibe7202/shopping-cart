import { vi, describe, it, expect, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Shop from "./Shop";
import useItemURL from "./useItemUrl";
import App from '../App.jsx'

vi.mock('./useItemUrl')

describe("Shop component", () => {
    afterEach(() => {
        vi.resetAllMocks()
    })

    it("renders shopping page", () => {
        vi.mocked(useItemURL).mockReturnValue({
            loading: false,
            error: false,
            itemURL: [{ id: 'Item1' }, { id: 'Item2' }]
        })
        const { container } = render(<Shop />);
        expect(container).toMatchSnapshot();
    });

    it("renders loading screen", () => {
        vi.mocked(useItemURL).mockReturnValue({
            loading: true,
            error: false,
            itemURL: [{ id: 'Item1' }, { id: 'Item2' }]
        })

        render(<Shop />)
        expect(screen.getByText('Loading...').textContent).toMatch(/Loading.../)
    });

    it("renders error screen", () => {
        vi.mocked(useItemURL).mockReturnValue({
            loading: false,
            error: true,
            itemURL: [{ id: 'Item1' }, { id: 'Item2' }]
        })

        render(<Shop />)
        expect(screen.getByText('A network error has occurred').textContent).toMatch(/A network error has occurred/)
    })

    it("renders grid of shopping items", () => {
        vi.mocked(useItemURL).mockReturnValue({
            loading: false,
            error: false,
            itemURL: [{ id: 'Item1' }, { id: 'Item2' }]
        })

        render(<Shop />)
        expect(screen.getByText('Item1').textContent).toMatch(/Item1/)
    })
});