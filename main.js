// !Main function
// TODO Display the pressed keys on the calculator display
// TODO Digits should be from Right to Left
// TODO Accept only numeric values
// TODO Calculation - '+' / '-' / '/' / 'x' / '='
// TODO Character limits (10/12)
// TODO Decimal point can only entered only once

// !Optional - designs, etc
// TODO Choose the right font, size, and color for the display
// TODO Default display should be with '0'
// TODO Function keys
// TODO On/Off toggle
// TODO When "AC" (all clear) is pressed the display should be cleared with '0' appearing

const keys = document.querySelectorAll(".keys");
keys.forEach(
    (item) =>
        //^Event listener for "clicks"
        item.addEventListener("click", (e) => {
            const keyValue = e.target.getAttribute("key");
            calculator.parseInput(keyValue);
        })
    // TODO Add event listener for "keypresses"
);

const calculator = {
    //* Properties
    displayText: "0",
    //^ Store the total from the previous operations
    prevTotal: null,

    //*Methods
    parseInput(value) {
        switch (value) {
            case "o":
            //Switch on the calculator and display "Off"
            case "Escape":
                // All clear
                break;
            case "Enter":
                //Perform the calculations entered so far
                break;
            case "/":
                //Divide
                break;
            case "x":
                //Multiply
                break;
            case ".":
                if (this.displayText === "0") {
                    this.addText("0.");
                } else {
                    this.addText(value);
                }
                break;
            case "-":
                //Subtract
                break;
            default:
                this.addText(value);
                break;
        }
    },
    addText(value) {
        //^ Getting rid of the zero before starting to display the character displayed
        if (this.displayText === "0") {
            this.displayText = "";
        } else if (this.prevTotal) {
            //Adding text to our input
            this.displayText = this.prevTotal;
            this.prevTotal = null;
        }

        if (isNaN(+value) && isNaN(+this.displayText)) {
            if (isNaN(this.displayText.slice(-1))) {
                return;
            }
            //invalid sequence of operations
            //Condition: last char in display AND the entered value are not numbers
            //Such as either other operation signs +, -, x, etc
        }
        // Adding this comment to check the contribution status on Github. It's been acting up strangely
        this.displayText += value;
        this.outputText(this.displayText)
    },
    outputText(text) {
        document.querySelector('.screen').value = text
    }
};
