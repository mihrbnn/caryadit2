import React from 'react';
import { FcFinePrint, FcConferenceCall, FcServices } from "react-icons/fc";
import { AiFillHtml5 } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap, FaReact } from "react-icons/fa";

function Footer(props) {
    return (
        <>
            <div>
                <footer className="mt-5 bg-dark text-light p-3">
                    <h3 className='text-warning text-center'><FcFinePrint size={60} />Project Details</h3>
                    <table className="mx-auto" cellSpacing={20} cellPadding={20}>
                        <thead>
                            <tr>
                                <th className='text-warning text-center'><FcConferenceCall size={50} color='white' /> Team Members:</th>
                                <th></th>
                                <th></th>
                                <th className='text-warning text-center'><FcServices size={50} /> Used Technologies:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img className="userimage me-3" src={require("../Images/nur.png")} alt="" />
                                    <div>
                                        <a className='text-decoration-none' href="https://github.com/nurgnc" target="_blank"><span
                                            className="text-light">Bedriye Nur Genç <AiFillGithub /></span>
                                        </a>
                                    </div>
                                </td>
                                <td><img className="userimage me-3" src={require("../Images/mihriban.png")} alt="" />
                                    <div>
                                        <a className='text-decoration-none' href="https://github.com/mihrbnn" target="_blank"><span className="text-light">Mihriban Kılıçkan <AiFillGithub /></span>
                                        </a>
                                    </div>
                                </td>
                                <td><img className="userimage me-3" src={require("../Images/busra.png")} alt="" />
                                    <div>
                                        <a className='text-decoration-none' href="https://github.com/busragayret" target="_blank"><span className="text-light">Büşra Gayret <AiFillGithub /></span>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <tr>
                                    </tr>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>This project developed using <a href="https://punkapi.com/documentation/v2" target="_blank">PunkAPI</a></li>
                                                <li><AiFillHtml5 />HTML</li>
                                                <li><DiCss3 />CSS</li>
                                                <li><FaBootstrap />Bootstrap</li>
                                                <li><FaReact />React</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </footer>
            </div>
        </>
    );
}

export default Footer;