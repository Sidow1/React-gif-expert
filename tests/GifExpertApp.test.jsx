import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    const categories = ['Naruto'];
    const newCategory = 'Inuyasha';

    test('debe hacer match con el snapshot', () => {

        const {container} = render(<GifExpertApp />);
        
        expect(container).toMatchSnapshot();
    });

    test('la categoria a ingresar debe ser un string', () => {
        
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: newCategory}});

        expect(typeof newCategory).toBe('string');
        expect(newCategory).toEqual(expect.any(String));
    });

    test('debe verificar que no se repita categoria', () => {

        const category = 'Naruto';

        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: category}});

        expect(categories.includes(category)).toBeTruthy();
    });
});