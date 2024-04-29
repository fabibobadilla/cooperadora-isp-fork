import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import HomeComponent from '@/components/Home';

describe( "Home Component", () => {

  it("Deberia mostrar el componente", () => {
    render(<HomeComponent text={"Home Component"} />);
    const h1 = screen.getByText("Home Component");
    expect(h1).toBeInTheDocument();
  });

  it("Deberia mostrar el componente con el valor Pepito", () => {
    render(<HomeComponent text={"Pepito"} />);
    const h1 = screen.getByText("Pepito");
    expect(h1).toBeInTheDocument();
  });

});
