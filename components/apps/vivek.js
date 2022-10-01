import React, { Component } from 'react';
import ReactGA from 'react-ga';

export class AboutVivek extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vivek" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Us</span>
                </div>
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Drug Safety</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Mental Health</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Mission Statement</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vivek's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Harm Reduction</span>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVivek;

export const displayAboutVivek = () => {
    return <AboutVivek />;
}


function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img className="w-full" src="./images/logos/bitmoji.png" alt="Vivek Patel Logo" />
            </div>
            <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>We are <span className="font-bold">Isle Of The Blessed</span> ,</div>
                <div className="font-normal ml-1">a <span className="text-pink-600 font-bold">Gaming, Harm Reduction, and Peer Support Community!</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-pc">Our primary <span className=" font-medium">platform</span> is <u className=' cursor-pointer '> <a href="https://discord.gg/dBZGS2NQvW" target={"_blank"}>Discord</a> </u>, and we work to minimize harmful effects of drug use rather than simply ignore or condemn them (Contact Us <a className='text-underline' href='mailto:support@isleoftheblessed.org'><u>support@isleoftheblessed.org</u></a> )</li>
                <li className=" mt-3 list-building"> Harm Reduction is also a movement for social justice built on a belief in, and respect for, the rights of people who use drugs.</li>
                <li className=" mt-3 list-time"> We accept drug use as a complex, multi-faceted phenomenon that encompasses a continuum of behaviors from severe use to total abstinence, and acknowledges that some ways of using drugs are clearly safer than others. <a href="https://cdn.discordapp.com/attachments/1023587164497391636/1023621137344770068/Combo_2.png" target="_blank" rel="noreferrer"> Drug Combination Chart.</a></li>
                <li className=" mt-3 list-star"> Our purpose is to establish quality of individual and community life and well-being, not necessarily cessation of all drug use!</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Drug Safety
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Psychonaut Wiki
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">https://psychonautwiki.org</div>
                    <div className=" text-sm md:text-base">Dosing, Subjective Effects. and Pharmacology</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Erowid Vault
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">https://www.erowid.org/</div>
                    <div className=" text-sm md:text-base">Trip Reports, Pharmacology, and Classifications</div>
                </li>
				<li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Tripsit Wiki
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">https://tripsit.me/</div>
                    <div className=" text-sm md:text-base">Tripsitting, Drug Combinations, and Guides</div>
                </li>
				<li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Naloxone For All
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">https://www.naloxoneforall.org/</div>
                    <div className=" text-sm md:text-base">Free Narcan, Free Delivery</div>
                </li>
            </ul>
        </>
    )
}
function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Mental Health
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Addiction Resources - https://www.mediafire.com/file/2x329sxr471ek1t/Addiction-20220929T190937Z-001.zip/file
                </li>
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Anger Management - https://www.mediafire.com/file/sy328svufao8otr/Anger_Management-20220929T190942Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Anxiety - https://www.mediafire.com/file/wwsirhzqpk3yy1x/Anxiety-20220929T190944Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    ASD - https://www.mediafire.com/file/obqshbbxvocb30f/ASD-20220929T190946Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Bipolar - https://www.mediafire.com/file/1xlid70i08mud6y/Bipolar-20220929T190957Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    BPD - https://www.mediafire.com/file/b51vihl61jaijrd/BPD-20220929T191002Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Cognitive Behavioural Therapy - https://www.mediafire.com/file/llgp84u8u0d177b/CT-20220929T191005Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    DBT - https://www.mediafire.com/file/okxu00nsgogvkuz/DBT-20220929T191007Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Depression - https://www.mediafire.com/file/blr2y3wyq2ycykw/Depression-20220929T191014Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    DID - https://www.mediafire.com/file/oshdibo6gype2fi/DID-20220929T191016Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Eating Disorders - https://www.mediafire.com/file/m1lo6ky40stzdni/Eating_Disorders-20220929T191024Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    General Psychology/Psychiatry - https://www.mediafire.com/file/jog9lcvcdhxipk3/Psychology%2526Psychiatry-20220929T191028Z-001.zip/file
                </li>
				<li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    Trauma - https://www.mediafire.com/file/jk1mr1mmkee47b8/Trauma-20220929T191044Z-001.zip/file
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Opening Statement",
            date: "10/1/2022",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "Harm reduction is a set of practical strategies and ideas aimed at reducing negative consequences associated with drug use. Harm Reduction is also a movement for social justice built on a belief in, and respect for, the rights of people who use drugs.",
            ],
            domains: ["Safety", "Social Justice"]
        },
        {
            name: "Rule Numer 1",
            date: "1",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "1. Understand drug use as a complex, multi-faceted phenomenon that encompasses a continuum of behaviors from severe use to total abstinence, and acknowledges that some ways of using drugs are clearly safer than others",
            ],
            domains: ["Risk", "Assesment"]
        },       {
            name: "Rule number 2",
            date: "2",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "2. Understand drug use as a complex, multi-faceted phenomenon that encompasses a continuum of behaviors from severe use to total abstinence, and acknowledges that some ways of using drugs are clearly safer than others",
            ],
            domains: ["Assessing", "Risks"]
        },
        {
            name: "Rule number 3",
            date: "3",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "3. Establish quality of individual and community life and well-being — not necessarily cessation of all drug use — as the criteria for successful interventions and policies",
            ],
            domains: ["Serenity", "Quality"]
        },
        {
            name: "Rule Number 4",
            date: "4",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "4. Call for the non-judgmental, non-coercive provision of services and resources to people who use drugs and the communities in which they live in order to assist them in reducing attendant harm",
            ],
            domains: ["Resources", "Services"]
        },
        {
            name: "Rule Number 5",
            date: "5",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "5. Ensure that people who use drugs and those with a history of drug use routinely have a real voice in the creation of programs and policies designed to serve them.",
            ],
            domains: ["Self-Reliance", "Independence"]
        },
        {
            name: "Rule Number 6",
            date: "6",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "6. Affirm people who use drugs (PWUD) themselves as the primary agents of reducing the harms of their drug use and seeks to empower PWUD to share information and support each other in strategies which meet their actual conditions of use.",
            ],
            domains: ["Empower", "Responsibility"]
        },
        {
            name: "Rule Number 7",
            date: "7",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "7. Recognize that the realities of poverty, class, racism, social isolation, past trauma, sex-based discrimination, and other social inequalities affect both people’s vulnerability to and capacity for effectively dealing with drug-related harm",
            ],
            domains: ["Background", "Personal Conditions"]
        },
        {
            name: "Rule Number 8",
            date: "8",
            link: "https://discord.gg/dBZGS2NQvW",
            description: [
                "8. Do not attempt to minimize or ignore the real and tragic harm and danger that can be associated with illicit drug use",
            ],
        }
    ];
	
    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Mission Statement
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
           

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                    </div>Isle Of The Blessed
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Harm_Reduction.pdf" title="vivek patel resume" frameBorder="0"></iframe>
    )
}
