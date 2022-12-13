import { render, screen } from '@testing-library/react';

import Footer from '../../views/FooterView/index'

describe('Footer', () => {
    it("Render Footer Element", () => {
        const footer = render(<Footer />);
        expect(footer.getByRole("footer")).toBeTruthy()
    });
})
