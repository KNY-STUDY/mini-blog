import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import styled from "styled-components";
import MainPage from './component/page/MainPage';
//import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import LoginPage from "./component/page/LoginPage";
import JoinPage from "./component/page/JoinPage";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <MainTitleText>😎 Mini Blog 👈</MainTitleText>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="login-page" element={<LoginPage />} />
                <Route path="join-page" element={<JoinPage />} />
                <Route path="post/:postId" element={<PostViewPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;