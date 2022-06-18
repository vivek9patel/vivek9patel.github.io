import React, { Component } from 'react'
import $ from 'jquery';
const Parser = require('expr-eval').Parser;

const parser = new Parser({
    operators: {
      // These default to true, but are included to be explicit
      add: true,
      concatenate: true,
      conditional: true,
      divide: true,
      factorial: true,
      multiply: true,
      power: true,
      remainder: true,
      subtract: true,

      // Disable and, or, not, <, ==, !=, etc.
      logical: false,
      comparison: false,

      // Disable 'in' and = operators
      'in': false,
      assignment: true
    }
  });

export class Calc extends Component {
    constructor() {
        super();
        this.cursor = "";
        this.terminal_rows = 2;
        this.prev_commands = [];
        this.commands_index = -1;
        this.variables={}
        this.state = {
            terminal: [],
        }
    }

    componentDidMount() {
        this.reStartTerminal();
    }

    componentDidUpdate() {
        clearInterval(this.cursor);
        this.startCursor(this.terminal_rows - 2);
    }

    componentWillUnmount() {
        clearInterval(this.cursor);
    }

    reStartTerminal = () => {
        clearInterval(this.cursor);
        $('#calculator-body').empty();
        this.appendTerminalRow();
    }

    appendTerminalRow = () => {
        let terminal = this.state.terminal;
        terminal.push(this.terminalRow(this.terminal_rows));
        this.setState({ terminal });
        this.terminal_rows += 2;
    }

    terminalRow = (id) => {
        return (

            <React.Fragment key={id}>
                <div className=" flex p-2 text-ubt-grey opacity-100 mt-1 float-left font-normal "></div>
                <div className="flex w-full h-5">
                        <div className=" flex text-ubt-green h-1 mr-2"> {';'} </div>
                    <div id="cmd" onClick={this.focusCursor} className=" bg-transperent relative flex-1 overflow-hidden">
                        <span id={`show-calculator-${id}`} className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"></span>
                        <div id={`cursor-${id}`} className=" float-left mt-1 w-1.5 h-3.5 bg-white"></div>
                        <input id={`calculator-input-${id}`} data-row-id={id} onKeyDown={this.checkKey} onBlur={this.unFocusCursor} className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent" spellCheck={false} autoFocus={true} autoComplete="off" type="text" />
                    </div>
                </div>
                <div id={`row-calculator-result-${id}`} className={"my-2 font-normal"}></div>
            </React.Fragment>
        );

    }

    focusCursor = (e) => {
        clearInterval(this.cursor);
        this.startCursor($(e.target).data("row-id"));
    }

    unFocusCursor = (e) => {
        this.stopCursor($(e.target).data("row-id"));
    }

    startCursor = (id) => {
        clearInterval(this.cursor);
        $(`input#calculator-input-${id}`).trigger("focus");
        // On input change, set current text in span
        $(`input#calculator-input-${id}`).on("input", function () {
            $(`#cmd span#show-calculator-${id}`).text($(this).val());
        });
        this.cursor = window.setInterval(function () {
            if ($(`#cursor-${id}`).css('visibility') === 'visible') {
                $(`#cursor-${id}`).css({ visibility: 'hidden' });
            } else {
                $(`#cursor-${id}`).css({ visibility: 'visible' });
            }
        }, 500);
    }

    stopCursor = (id) => {
        clearInterval(this.cursor);
        $(`#cursor-${id}`).css({ visibility: 'visible' });
    }

    removeCursor = (id) => {
        this.stopCursor(id);
        $(`#cursor-${id}`).css({ display: 'none' });
    }

    clearInput = (id) => {
        $(`input#calculator-input-${id}`).trigger("blur");
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let terminal_row_id = $(e.target).data("row-id");
            let command = $(`input#calculator-input-${terminal_row_id}`).val().trim();
            if (command.length !== 0) {
                this.removeCursor(terminal_row_id);
                this.handleCommands(command, terminal_row_id);
            }
            else return;
            // push to history
            this.prev_commands.push(command);
            this.commands_index = this.prev_commands.length - 1;

            this.clearInput(terminal_row_id);
        }
        else if (e.key === "ArrowUp") {
            let prev_command;

            if (this.commands_index <= -1) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#calculator-input-${terminal_row_id}`).val(prev_command);
            $(`#show-calculator-${terminal_row_id}`).text(prev_command);

            this.commands_index--;
        }
        else if (e.key === "ArrowDown") {
            let prev_command;

            if (this.commands_index >= this.prev_commands.length) return;
            if (this.commands_index <= -1) this.commands_index = 0;

            if (this.commands_index === this.prev_commands.length) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#calculator-input-${terminal_row_id}`).val(prev_command);
            $(`#show-calculator-${terminal_row_id}`).text(prev_command);

            this.commands_index++;
        }
    }

    closeTerminal = () => {
        $("#close-calc").trigger('click');
    }

    handleCommands = (command, rowId) => {
        let words = command.split(' ').filter(Boolean);
        let main = words[0];
        // words.shift()
        let result = "";
        switch (main) {        
            case "clear":
                this.reStartTerminal();
                return;
            case "exit":
                this.closeTerminal();
                return;
            case "help":                
                result = "Available Commands: <br/>Operators:<br/> addition ( + ), subtraction ( - ),<br/>multiplication ( * ), division ( / ),<br/>modulo ( % )exponentiation. ( ^ )<br/><br/>Mathematical functions:<br/>abs[x] : Absolute value (magnitude) of x<br/>acos[x] : Arc cosine of x (in radians)<br/>acosh[x] : Hyperbolic arc cosine of x (in radians)<br/>asin[x] : Arc sine of x (in radians)<br/>asinh[x] : Hyperbolic arc sine of x (in radians)<br/>atan[x] : Arc tangent of x (in radians)<br/>atanh[x] : Hyperbolic arc tangent of x (in radians)<br/>cbrt[x] : Cube root of x<br/>ceil[x] : Ceiling of x — the smallest integer that’s >= x<br/>cos[x] : Cosine of x (x is in radians)<br/>cosh[x] : Hyperbolic cosine of x (x is in radians)<br/>exp[x] : e^x (exponential/antilogarithm function with base e)<br/>floor[x] : Floor of x — the largest integer that’s <= x<br/>ln[x] : Natural logarithm of x<br/>log[x] : Natural logarithm of x (synonym for ln, not base-10)<br/>log10[x] :	Base-10 logarithm of x<br/>log2[x] : Base-2 logarithm of x<br/>round[x] :	X, rounded to the nearest integer<br/>sign[x] : Sign of x (-1, 0, or 1 for negative, zero, or positive respectively)<br/>sin[x] : Sine of x (x is in radians)<br/>sinh[x] : Hyperbolic sine of x (x is in radians)<br/>sqrt[x] : Square root of x. Result is NaN (Not a Number) if x is negative.<br/>tan[x] : Tangent of x (x is in radians)<br/>tanh[x] : Hyperbolic tangent of x (x is in radians)<br/> <br/><br/>Pre-defined functions:<br/>random(n) : Get a random number in the range [0, n). If n is zero, or not provided, it defaults to 1.<br/>fac(n)	n! : (factorial of n: \"n * (n-1) * (n-2) * … * 2 * 1\") Deprecated. Use the ! operator instead.<br/>min(a,b,…) : Get the smallest (minimum) number in the list.<br/>max(a,b,…) : Get the largest (maximum) number in the list.<br/>hypot(a,b) : Hypotenuse, i.e. the square root of the sum of squares of its arguments.<br/>pyt(a, b) : Alias for hypot.<br/>pow(x, y) : Equivalent to x^y.<br/>roundTo(x, n) : Rounds x to n places after the decimal point.<br/><br/>Constants: <br/>E : The value of Math.E from your JavaScript runtime.<br/>PI : The value of Math.PI from your JavaScript runtime.<br/><br/>Variable assignments : <br/>declare variable and assign a value: x=1  declared variable can be used in further calculation x+2.<br/><br/>clear command for clearing calculator app.<br/><br/>exit command for exit from calculator app. ";
                break;                
            default: 
                result = this.evaluteExp(command);                    
        }
        document.getElementById(`row-calculator-result-${rowId}`).innerHTML = result;
        this.appendTerminalRow();
    }
    evaluteExp = (command) => {
        let result = "";
        let expr;
            try{
                expr=parser.parse(command)
                try{
                    result = parser.evaluate(command,this.variables)
                    if(expr.tokens.length===2&&expr.tokens[2].type==="IOP2")
                    this.variables[expr.variables()[0]]=result
                }
                catch (e) {
                    result = e.message;
                }
            }
            catch(e){
                result="Invalid Expression"
            }    
        return result;
    }
    xss(str) {
        if (!str) return;
        return str.split('').map(char => {
            switch (char) {
                case '&':
                    return '&amp';
                case '<':
                    return '&lt';
                case '>':
                    return '&gt';
                case '"':
                    return '&quot';
                case "'":
                    return '&#x27';
                case '/':
                    return '&#x2F';
                default:
                    return char;
            }
        }).join('');
    }
    

    render() {
        return (
            <div className="h-full w-full bg-ub-drk-abrgn text-ubt-grey opacity-100 p-1 float-left font-normal">
                <div>C-style arbitary precision calculator (version 2.12.7.2)</div>
                <div>Calc is open software.</div>
                <div>[ type "exit" to exit, "clear" to clear, "help" for help.]</div>
            <div className="text-white text-sm font-bold bg-ub-drk-abrgn" id="calculator-body">
                {this.state.terminal}
            </div>
            </div>
        )
    }
}

export default Calc

export const displayTerminalCalc = (addFolder,openApp) => {
    return <Calc addFolder={addFolder} openApp={openApp}> </Calc>;
}