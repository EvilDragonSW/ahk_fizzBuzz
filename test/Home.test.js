import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import Home, {EMPTY_RESULT_HINT} from "@pages/";
import UserEvent from "@testing-library/user-event";

describe("<Home/>...", () => {

    //-------------------------------------
    //-  feel free to add more test cases  -
    //-------------------------------------

    describe("renders properly the...", () => {

        it("headline", () => {
            render(<Home/>);

            screen.getByRole("heading", {name: "FizzBuzz - Bewerber Quiz", level: 1});
        });

        it("input for target digit", () => {
            render(<Home/>);

            screen.getByPlaceholderText("enter digit", {});
        });

        it("submit button", () => {
            render(<Home/>);

            screen.getByRole("button", {name: "submit"});
        });

        it("hint text that a digit greater 0 has to be submitted", () => {
            render(<Home/>);

            screen.getByText("digit greater 0 has to be submitted", {});
        });

        describe("result when...", () => {

            it("only digits has to be rendered", async () => {
                render(<Home/>);

                await submitFormWith("feg");

                // hint should be disappeared
                expect(screen.queryByText(EMPTY_RESULT_HINT, {selector: ".result"})).toBeNull();

                screen.getByText(/^1$/g, {selector: ".result li"});
                screen.getByText(/^2$/g, {selector: ".result li"});
            });

            it.todo("Fizz has to be rendered");

            it.todo("Buzz has to be rendered");

            it.todo("FizzBuzz has to be rendered");

        });

        it.todo("error message when a digit lower than 1 was submitted");

    });

    it("clears result list when input gains focus", async () => {
        render(<Home value={3}/>);

        expect(screen.getAllByText("Fizz", {selector: ".result"})).toHaveLength(1);

        gainFocusOnInput();

        await screen.findByText(EMPTY_RESULT_HINT, {selector: ".result"});
    });

    const submitFormWith = async (digit) => {
        await UserEvent.type(screen.getByPlaceholderText("enter digit", {}), digit);
        fireEvent.click(screen.getByRole("button", {name: "submit"}));
    };

    function gainFocusOnInput() {
        throw new Error("not implemented yet");
    }
});