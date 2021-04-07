import { render, screen } from '@testing-library/react';
import {PublicarInmueble} from "../components/PublicarInmueble";
import {Bienvenida} from "../components/Bienvenida";
import {App} from "../App"

test('Publicar inmueble', () => {
    render(<PublicarInmueble />);
    expect(screen.getByText(/publica tu inmueble/i)).toBeInTheDocument();

});

test('Bienvenida', () => {
    render(<Bienvenida />);
    expect(screen.getByText(/Registrarse/i)).toBeInTheDocument();

});
