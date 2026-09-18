import React, { Component } from 'react'
import $ from 'jquery';
import ReactGA from 'react-ga4';

export class Terminal extends Component {
    constructor() {
        super();
        this.cursor = "";
        this.terminal_rows = 1;
        this.current_directory = "~";
        this.curr_dir_name = "root";
        this.prev_commands = [];
        this.commands_index = -1;
        this.start_time = Date.now();
        this.child_directories = {
            root: ["books", "projects", "personal-documents", "skills", "languages", "PDPU", "interests"],
            PDPU: ["Sem-6"],
            books: ["Eric-Jorgenson_The-Almanack-of-Naval-Ravikant.pdf", "Elon Musk: How the Billionaire CEO of SpaceX.pdf", "The $100 Startup_CHRIS_GUILLEBEAU.pdf", "The_Magic_of_Thinking_Big.pdf"],
            skills: ["Front-end development", "React.js", "jQuery", "Flutter", "Express.js", "SQL", "Firebase"],
            projects: ["vivek9patel-personal-portfolio", "synonyms-list-react", "economist.com-unlocked", "Improve-Codeforces", "flutter-banking-app", "Meditech-Healthcare", "CPU-Scheduling-APP-React-Native"],
            interests: ["Software Engineering", "Deep Learning", "Computer Vision"],
            languages: ["Javascript", "C++", "Java", "Dart"],
        };
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
        $('#terminal-body').empty();
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
                <div className="flex w-full h-5">
                    <div className="flex">
                        <div className=" text-ubt-green">vivek@Dell</div>
                        <div className="text-white mx-px font-medium">:</div>
                        <div className=" text-ubt-blue">{this.current_directory}</div>
                        <div className="text-white mx-px font-medium mr-1">$</div>
                    </div>
                    <div id="cmd" onClick={this.focusCursor} className=" bg-transperent relative flex-1 overflow-hidden">
                        <span id={`show-${id}`} className=" float-left whitespace-pre pb-1 opacity-100 font-normal tracking-wider"></span>
                        <div id={`cursor-${id}`} className=" float-left mt-1 w-1.5 h-3.5 bg-white"></div>
                        <input id={`terminal-input-${id}`} data-row-id={id} onKeyDown={this.checkKey} onBlur={this.unFocusCursor} className=" absolute top-0 left-0 w-full opacity-0 outline-none bg-transparent" spellCheck={false} autoFocus={true} autoComplete="off" type="text" />
                    </div>
                </div>
                <div id={`row-result-${id}`} className={"my-2 font-normal"}></div>
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
        $(`input#terminal-input-${id}`).trigger("focus");
        // On input change, set current text in span
        $(`input#terminal-input-${id}`).on("input", function () {
            $(`#cmd span#show-${id}`).text($(this).val());
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
        $(`input#terminal-input-${id}`).trigger("blur");
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let terminal_row_id = $(e.target).data("row-id");
            let command = $(`input#terminal-input-${terminal_row_id}`).val().trim();
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

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index--;
        }
        else if (e.key === "ArrowDown") {
            let prev_command;

            if (this.commands_index >= this.prev_commands.length) return;
            if (this.commands_index <= -1) this.commands_index = 0;

            if (this.commands_index === this.prev_commands.length) prev_command = "";
            else prev_command = this.prev_commands[this.commands_index];

            let terminal_row_id = $(e.target).data("row-id");

            $(`input#terminal-input-${terminal_row_id}`).val(prev_command);
            $(`#show-${terminal_row_id}`).text(prev_command);

            this.commands_index++;
        }
    }

    childDirectories = (parent) => {
        let files = [];
        files.push(`<div class="flex justify-start flex-wrap">`)
        this.child_directories[parent].forEach(file => {
            files.push(
                `<span class="font-bold mr-2 text-ubt-blue">'${file}'</span>`
            )
        });
        files.push(`</div>`)
        return files;
    }

    treeDirectory = (dir, prefix = "") => {
        let lines = [];
        let dirCount = 0;
        let fileCount = 0;
        if (!(dir in this.child_directories)) return { lines, dirCount, fileCount };
        const items = this.child_directories[dir];
        items.forEach((item, index) => {
            const isLast = index === items.length - 1;
            const connector = isLast ? "└── " : "├── ";
            const isDir = item in this.child_directories;
            const colorClass = isDir ? "text-ubt-blue font-bold" : "text-white";
            lines.push(`${prefix}${connector}<span class="${colorClass}">${item}</span>`);
            if (isDir) {
                dirCount++;
                const newPrefix = prefix + (isLast ? "    " : "│   ");
                const sub = this.treeDirectory(item, newPrefix);
                lines = lines.concat(sub.lines);
                dirCount += sub.dirCount;
                fileCount += sub.fileCount;
            } else {
                fileCount++;
            }
        });
        return { lines, dirCount, fileCount };
    }

    neofetch = () => {
        const art = `<pre class="whitespace-pre leading-none text-[10px] sm:text-xs" style="color:#E95420;">         .-/+oossssoo+/-.
     \`:+ssssssssssssssssss+:\`
   -+ssssssssssssssssssyyssss+-
  .ossssssssssssssssssdMMMNysssso.
 /sssssssssshdmmNNmmyNMMMMhssssss/
+ssssssssshmydMMMMMMMNddddyssssssss+
/sssssssshNMMMyhhyyyyhmNMMMNhssssssss/
.ssssssssdMMMNhsssssssssshNMMMdssssssss.
+sssshhhyNMMNyssssssssssssyNMMMysssssss+
ossyNMMMNyMMhsssssssssssssshmmmhssssssso
ossyNMMMNyMMhsssssssssssssshmmmhssssssso
+sssshhhyNMMNyssssssssssssyNMMMysssssss+
.ssssssssdMMMNhsssssssssshNMMMdssssssss.
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/
  +sssssssssdmydMMMMMMMNddddyssssssss+
   .ossssssssssssssssssdMMMNysssso.
     \`:+ssssssssssssssssss+:\`
         .-/+oossssoo+/-.</pre>`;

        const uptimeSec = Math.floor((Date.now() - this.start_time) / 1000);
        const minutes = Math.floor(uptimeSec / 60);
        const seconds = uptimeSec % 60;
        const uptime = minutes > 0 ? `${minutes} mins, ${seconds} secs` : `${seconds} secs`;
        const resolution = typeof window !== "undefined" ? `${window.innerWidth}x${window.innerHeight}` : "1920x1080";

        const header = "vivek@Dell";
        const separator = "-".repeat(header.length);

        const info = [
            ["OS", "Ubuntu 22.04.3 LTS x86_64"],
            ["Host", "vivek9patel.github.io"],
            ["Kernel", "React 18.2.0"],
            ["Uptime", uptime],
            ["Packages", "3 (npm: next, react, tailwindcss)"],
            ["Shell", "vivek-terminal"],
            ["Resolution", resolution],
            ["DE", "Ubuntu Desktop Clone"],
            ["WM", "Custom React WM"],
            ["Theme", "Yaru-dark [GTK3]"],
            ["Icons", "Yaru [GTK3]"],
            ["Terminal", "vivek-terminal"],
            ["CPU", "Full-Stack Developer"],
            ["GPU", "Tailwind CSS Renderer"],
            ["Memory", "2048MiB / 8192MiB"],
        ];

        const infoHtml = info.map(([label, value]) =>
            `<div><span class="font-bold" style="color:#E95420;">${label}:</span> ${value}</div>`
        ).join("");

        const palette = ["#2E3436", "#CC0000", "#4E9A06", "#C4A000", "#3465A4", "#75507B", "#06989A", "#D3D7CF"];
        const brightPalette = ["#555753", "#EF2929", "#8AE234", "#FCE94F", "#729FCF", "#AD7FA8", "#34E2E2", "#EEEEEC"];
        const swatchRow = (colors) => colors.map(c => `<div style="width:14px;height:14px;background-color:${c};display:inline-block;"></div>`).join("");
        const colorBlocks = `<div style="display:flex;margin-top:6px;">${swatchRow(palette)}</div><div style="display:flex;">${swatchRow(brightPalette)}</div>`;

        const infoBlock = `<div><span class="font-bold" style="color:#E95420;">${header}</span></div><div>${separator}</div>${infoHtml}${colorBlocks}`;

        return `<div style="display:flex;flex-wrap:wrap;">${art}<div style="margin-left:16px;">${infoBlock}</div></div>`;
    }

    closeTerminal = () => {
        $("#close-terminal").trigger('click');
    }

    handleCommands = (command, rowId) => {
        let words = command.split(' ').filter(Boolean);
        let main = words[0];
        words.shift()
        let result = "";
        let rest = words.join(" ");
        rest = rest.trim();
        switch (main) {
            case "cd":
                if (words.length === 0 || rest === "") {
                    this.current_directory = "~";
                    this.curr_dir_name = "root"
                    break;
                }
                if (words.length > 1) {
                    result = "too many arguments, arguments must be <1.";
                    break;
                }

                if (rest === "personal-documents") {
                    result = `bash /${this.curr_dir_name} : Permission denied 😏`;
                    break;
                }

                if (this.child_directories[this.curr_dir_name].includes(rest)) {
                    this.current_directory += "/" + rest;
                    this.curr_dir_name = rest;
                }
                else if (rest === "." || rest === ".." || rest === "../") {
                    result = "Type 'cd' to go back 😅";
                    break;
                }
                else {
                    result = `bash: cd: ${words}: No such file or directory`;
                }
                break;
            case "ls":
                let target = words[0];
                if (target === "" || target === undefined || target === null) target = this.curr_dir_name;

                if (words.length > 1) {
                    result = "too many arguments, arguments must be <1.";
                    break;
                }
                if (target in this.child_directories) {
                    result = this.childDirectories(target).join("");
                }
                else if (target === "personal-documents") {
                    result = "Nope! 🙃";
                    break;
                }
                else {
                    result = `ls: cannot access '${words}': No such file or directory                    `;
                }
                break;
            case "mkdir":
                if (words[0] !== undefined && words[0] !== "") {
                    this.props.addFolder(words[0]);
                    result = "";
                } else {
                    result = "mkdir: missing operand";
                }
                break;
            case "pwd":
                let str = this.current_directory;
                result = str.replace("~", "/home/vivek")
                break;
            case "whoami":
                if (words.length !== 0) {
                    result = "too many arguments, arguments must be 0.";
                    break;
                }
                result = "vivek";
                break;
            case "tree":
                let tree_target = words[0];
                if (tree_target === "" || tree_target === undefined || tree_target === null) tree_target = this.curr_dir_name;

                if (words.length > 1) {
                    result = "too many arguments, arguments must be <1.";
                    break;
                }
                if (tree_target in this.child_directories) {
                    const { lines, dirCount, fileCount } = this.treeDirectory(tree_target);
                    const summary = `${dirCount} director${dirCount === 1 ? "y" : "ies"}, ${fileCount} file${fileCount === 1 ? "" : "s"}`;
                    result = `<pre>.\n${lines.join("\n")}\n\n${summary}</pre>`;
                }
                else if (tree_target === "personal-documents") {
                    result = "Nope! 🙃";
                    break;
                }
                else {
                    result = `tree: '${words}': No such file or directory`;
                }
                break;
            case "neofetch":
                if (words.length !== 0) {
                    result = "too many arguments, arguments must be 0.";
                    break;
                }
                result = this.neofetch();
                break;
            case "code":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("vscode");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands:[ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg]";
                }
                break;
            case "echo":
                result = this.xss(words.join(" "));
                break;
            case "spotify":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("spotify");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "chrome":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("chrome");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "todoist":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("todo-ist");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "trash":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("trash");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "about-vivek":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("about-vivek");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "terminal":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("terminal");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "settings":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("settings");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "sendmsg":
                if (words[0] === "." || words.length === 0) {
                    this.props.openApp("gedit");
                } else {
                    result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
                }
                break;
            case "clear":
                this.reStartTerminal();
                return;
            case "exit":
                this.closeTerminal();
                return;
            case "sudo":

                ReactGA.event({
                    category: "Sudo Access",
                    action: "lol",
                });

                result = "<img class=' w-2/5' src='./images/memes/used-sudo-command.webp' />";
                break;
            default:
                result = "Command '" + main + "' not found, or not yet implemented.<br>Available Commands: [ cd, ls, pwd, tree, whoami, neofetch, echo, clear, exit, mkdir, code, spotify, chrome, about-vivek, todoist, trash, settings, sendmsg ]";
        }
        document.getElementById(`row-result-${rowId}`).innerHTML = result;
        this.appendTerminalRow();
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
            <div className="h-full w-full bg-ub-drk-abrgn text-white text-sm font-bold" id="terminal-body">
                {
                    this.state.terminal
                }
            </div>
        )
    }
}

export default Terminal

export const displayTerminal = (addFolder, openApp) => {
    return <Terminal addFolder={addFolder} openApp={openApp}> </Terminal>;
}
