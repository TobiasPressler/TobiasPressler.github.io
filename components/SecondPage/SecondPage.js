import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDesktop, faEnvelope, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class SecondPage extends Component {
  render() {
    return <div className="text-center h-screen">
      <div className="pt-5 pb-20">
        <h1 className="rounded-md text-4xl font-bold mb-5">About Me</h1>
        <div className="mt-5 mx-20 font-mono">My name is Tobias Pressler and I am currently studying Information Technology at the HTL Spengergasse in Vienna. Computers fascinated me since I was a child. I build my first PC when I was 11 years old and soon got into writing my first HTML website. After learning Java at school, I began to learn JavaScript by myself. From then on, I got into JavaScript frameworks like Angular, Vue, React and started writing my first Backend Server with NodeJS. From then on I learned programming languages like Python, C#, and frameworks like SpringBoot, ExpressJS, and Flutter.  </div>
      </div>
      <div className="md:w-3/4 m-auto bg-white text-black">
        <div className="max-w-4xl mx-auto md:flex">
          <div className="w-full md:w-1/3 md:max-w-none bg-white p-4 md:px-6 md:py-6 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-700 md:flex md:flex-col">
            <div className="w-full flex-grow">
              <FontAwesomeIcon className="text-3xl" icon={faServer} />
              <h2 className="text-center font-bold uppercase mb-4 text-2xl">BACKEND</h2>
              <ul className="mb-8">
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Flask</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> SpringBoot</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> ExpressJS</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Firebase</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:max-w-none bg-white p-4 md:px-6 md:py-6 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative md:z-50 md:flex md:flex-col">
            <div className="w-full flex-grow">
              <FontAwesomeIcon className="text-3xl" icon={faDesktop} />
              <h2 className="text-center font-bold uppercase mb-4 text-2xl">FRONTEND</h2>
              <ul className="mb-8">
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Angular</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> React</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> VueJS</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> CSS</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> HTML</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 md:max-w-none bg-white p-4 md:px-6 md:py-6 mb-3 mx-auto md:my-2 rounded-md shadow-lg shadow-gray-700 md:flex md:flex-col">
            <div className="w-full flex-grow">
              <FontAwesomeIcon className="text-3xl" icon={faCode} />
              <h2 className="text-center font-bold uppercase mb-4 text-2xl">LANGUAGES</h2>
              <ul className="mb-8">
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Java</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> JavaScript</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Python</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> TypeScript</li>
                <li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> C#</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 pb-20">
        <h1 className="rounded-md text-4xl font-bold mb-5">Contact</h1>
        <div className="grid grid-cols-4">
          <div></div>
          <a href="mailto: pressler.tobias@gmail.com"><FontAwesomeIcon className="text-8xl" icon={faEnvelope} /></a>
          <a href="https://github.com/TobiasPressler"><FontAwesomeIcon className="text-8xl" icon={faGithub} /></a>
          <div></div>
        </div>
      </div>
    </div >;
  }
}

export default SecondPage;
