import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./routes/Blog";
import Contacto from "./routes/Contacto";
import NoEncontrada from "./components/NoEncontrada";
import Post from "./components/Post";
import Inicio from "./routes/Inicio";
import UserProvider from "./context/UserProvider"
import RutaProtegida from './routes/RutaProtegida';
import VerificarUsuario from './components/VerificarUsuario';

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Inicio/>} />
                    <Route path="blog" element={<Blog/>} />
                    <Route path="blog/:id" element={<Post/>} />
                    <Route path="contacto" element={<Contacto/>} />
                    <Route path="protegida" element={<VerificarUsuario><RutaProtegida/></VerificarUsuario>} />
                    <Route path="*" element={<NoEncontrada/>} />
                </Route>
            </Routes>
        </UserProvider>
    </BrowserRouter>,
    document.getElementById("root")
);