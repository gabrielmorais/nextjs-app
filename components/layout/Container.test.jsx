import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'
import Container from "./Container"

test("it should display text Hello World inside container", () => {
    render(<Container>Hello World</Container>)
    const text = screen.getByText("Hello World")
    expect(text).toBeInTheDocument()
})
