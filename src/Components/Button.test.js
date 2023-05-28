

import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"
import App from "../App";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer"


describe("Testing the custom Button", () => {

    it("should be present in the DOM", () => {

        render(<Button>Click Me</Button>);   // virtually
        //  screen.debug(); 
        let button = screen.getByText("Click Me");
        expect(button).toBeInTheDocument();

        // render(<App></App>)
        // let button = screen.getByText("Click Me");
        // expect(button).toBeInTheDocument();

    });


    it("Should have a button with text Click Me", () => {
        render(<App></App>)
        // screen.debug()
        let button = screen.getByTestId("customButton");  // single / a particular thing
        expect(button).toBeInTheDocument();
    })

    // Empty DOM element  <div></div>

    it("Should render without any children", () => {
        render(<Button></Button>);

        let button = screen.getByTestId("customButton")
        expect(button).toBeEmptyDOMElement();
    })


    it("Should toggle the theme", () => {
        render(<App></App>);
        let element = screen.getByText("Theme is light");

        expect(element).toHaveTextContent("light");

        let button = screen.getByTestId("customButton");
        fireEvent.click(button);
        // userEvent.click(button);
        expect(element).toHaveTextContent("dark");

    });


    // my function is trigger or not ?



    it("should call the given function", () => {

        const mockFunction = jest.fn();  // () => {} anonymous function ;

        render(<Button onClick={mockFunction}>Click Me</Button>);

        // screen.debug()

        const button = screen.getByTestId("customButton");

        userEvent.click(button);
        userEvent.click(button);

        // expect(mockFunction).toBeCalled();
        expect(mockFunction).toBeCalledTimes(2);

    })


    // snapshots

    it("Should match the snapshot", () => {

        const tree = renderer.create(
            <Button colorScheme={"green"} variant={"outlined"}>
                Increment Counter
            </Button>
        ).toJSON()  //           .toTree();
 
        expect(tree).toMatchSnapshot()

    })

});



// npm i react-test-renderer  ? ==> 

                      // why this snapshot helpful 
                          //   --> if someone change in structure in button 
                              //    ==> when the testing the button is going to  failed.

                // press u ==>update the failing the snapshot