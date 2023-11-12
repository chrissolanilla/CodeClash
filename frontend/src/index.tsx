import m from "mithril";
import { io } from "socket.io-client";
import Rankings from "./pages/Rankings";
import Front from "./pages/Front";
import GameLayout from "./pages/GameInstance";
import Modal from "./pages/Profile"
import MobileModal from "./pages/MobileProfile"
import MainMenuPage from './pages/MainMenuPage';
import * as dotenv from 'dotenv';



const CLIENT_ID = "Iv1.96555551712a9807";

function App() {
    const socket = io("http://localhost:3000");

    socket.emit("ping");
    return {
        view: () => (
            <div>
                <Front />
            </div>
        ),
    };
}

function Leaderboard() {
    return {
        view: () => (
            <div>
                <Rankings />
            </div>
        ),
    };
}

function GamePage() {
    return {
        view: () => (
            <div>
                <GameLayout />
            </div>
        ),
    };
}

function TestingOutModalLooks() {
    return {
        view: () => (
            <WinModal />
        )
    }
}

m.route.prefix = "";

function Profile() {
    return {
        view: () => (
            <div>
                <Modal />
            </div>
        ),
    };
}

function MobileProfile() {
    return {
        view: () => (
            <div>
                <MobileModal />
            </div>
        ),
    };
}

function MainMenu() {
    return {
        view: () => (
            <div>
                <MainMenuPage />
            </div>
        ),
    };
}

m.route.prefix = ""; 

m.route(document.body, "/", {
    "/": App,
    "/leaderboard": Leaderboard,
    "/profile": Profile,
    "/mobileprof": MobileProfile,
    "/mainmenu": MainMenu,
    "/gameinstance": GamePage,
    "/test" : TestingOutModalLooks,
});

export default App;