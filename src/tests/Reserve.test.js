import { screen, render, fireEvent } from "@testing-library/react";
import ReserveForm from "../components/ReserveForm";
import { BrowserRouter } from "react-router-dom";
import AppContext from "../context/AppContext";
import App from "../App";
const mockContextValue = {
    drawerState: 'closed', // Replace with your expected state
    // Add other context values if needed
  };


test("Reserve table button disabled without date", () => {
    render(
    <BrowserRouter>
    <AppContext.Provider value={mockContextValue}>
    <ReserveForm/>
    </AppContext.Provider>
    </BrowserRouter>
);
    const reserve = screen.getByText("Reserve a table");
    expect(reserve).toBeDisabled()

})

test("Reserve table function is enabled when data is entered", () => {
    render(
        <BrowserRouter>
        <AppContext.Provider value={mockContextValue}>
        <ReserveForm/>
        </AppContext.Provider>
        </BrowserRouter>
    );

    const reserve = screen.getByText("Reserve a table");
    const date = screen.getByLabelText("Choose Date:");
    fireEvent.change(date, {target:{value:"2023-09-09"}});
    expect(reserve).toBeEnabled();

})

test("Submit button is disabled when occassion is invalid", () => {
    render(
        <BrowserRouter>
        <AppContext.Provider value={mockContextValue}>
        <ReserveForm/>
        </AppContext.Provider>
        </BrowserRouter>
    );

    const reserve = screen.getByText("Reserve a table");
    const occasion = screen.getByLabelText("Ocassion");
    fireEvent.change(occasion, {target: {value:"hello"}})
    expect(reserve).toBeDisabled()
})