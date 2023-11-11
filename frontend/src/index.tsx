import m from "mithril";
import { io } from "socket.io-client";
import Rankings from "./pages/Rankings";
import Front from "./pages/Front";
import Login from "./pages/Front";
import * as dotenv from 'dotenv';
import GameLayout from "./pages/GameInstance";
import 'monaco-editor/min/vs/editor/editor.main.css';
import WinModal from "./components/GameWonModal";

const CLIENT_ID = "Iv1.96555551712a9807";

function App() {
    const socket = io("http://localhost:44251");

    socket.emit("ping");
    return {
        view: () => (
            <div>
                <Login />
      
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
m.route(document.body, "/", {
    "/": App,
    "/leaderboard": Leaderboard,
    "/gameinstance": GamePage,
    "/test" : TestingOutModalLooks,
});

export default App;