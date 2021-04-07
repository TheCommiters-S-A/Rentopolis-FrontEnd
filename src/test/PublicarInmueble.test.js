import { render, screen } from '@testing-library/react';
import {PublicarInmueble} from "../components/PublicarInmueble";

test('Publicar inmueble', () => {
    render(<PublicarInmueble />);
    expect(screen.getByText(/publica tu inmueble/i)).toBeInTheDocument();

});
