import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe('testiamo applicazione', () => {
    it('renders welcome', () => {
        render(<App />)
        expect(screen.getByText(/Hey, Nice To See You/i)).toBeInTheDocument()
    });

    // it('render allthebooks after sometime', async () => {
    //     render(<App/>)
    //     await waitFor(() => {
    //         expect(screen.queryByText(/The Last Wish/i)).toBeInTheDocument()
    //     }, {timeout : 7000} )
    // },10000);

    it('renders five cards', () => {
        render(<App />)
        fireEvent.click(screen.queryByText('Books React'))
        expect(screen.queryAllByRole('button', { name: /book details/i })).toHaveLength(20)
    })
    it('renders comment area', async () => {
        render(<App />)
        fireEvent.click(screen.queryByText('Books React'))
        fireEvent.click(screen.queryAllByRole('button', { name: /book details/i })[0])
        expect(await screen.findByText('Aggiungi un commento')).toBeInTheDocument()
    })

    it('renders comments of book', async () => {
        render(<App />)
        fireEvent.click(screen.queryByText('Books React'))
        fireEvent.click(screen.queryAllByRole('button', { name: /book details/i })[0])
        expect(await screen.findAllByText('Recensioni:')).toHaveLength(4)
    })

    it('renders all the books, no exist single book ', async () => {
        render(<App />)
        fireEvent.click(screen.queryByText('Books React'))
        expect(await screen.queryByText('Recensioni:')).toBeNull()
    })

    it('renders img add border red  ', () => {
        render(<App />)
        fireEvent.click(screen.queryByText('Books React'))
        fireEvent.click(screen.getByAltText('The Last Wish: Introducing the Witcher'))
        expect(screen.getByAltText('The Last Wish: Introducing the Witcher')).toHaveClass('card-img-top border border-5 border-danger')
    })

    it('renders img remove border red when second book^s click ', () => {
        render(<App />)
        fireEvent.click(screen.queryByText('Books React'))
        fireEvent.click(screen.getByAltText('The Last Wish: Introducing the Witcher'))
        expect(screen.getByAltText('The Last Wish: Introducing the Witcher')).toHaveClass('card-img-top border border-5 border-danger')
        fireEvent.click(screen.getByAltText('Sword of Destiny (The Witcher)'))
        expect(screen.getByAltText('The Last Wish: Introducing the Witcher')).not.toHaveClass('card-img-top border border-5 border-danger')
    })





})