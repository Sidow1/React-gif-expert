import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 

    test('debe de cambiar el valor de la caja de text', () => {

        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Hanamichi'}});
        expect(input.value).toBe('Hanamichi');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Itadori';
        const onNewCategory = jest.fn(); // crea una función ficticia para hacer pruebas

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled(); // comprueba si la función fue llamada
        expect(onNewCategory).toHaveBeenCalledTimes(1); // comprueba si la función fue llamada una cantidad de veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue); //comprueba si la función se llamó con el valor especificado
    });

    test('no debe de llamar el onNewCategory si el input está vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
    })
});