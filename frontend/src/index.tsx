// index.tsx
import m from "mithril";
import Login from "./pages/Login";
import { Menu, Nav } from "./components/Menu";
const App: m.Component = {
    view: () => [(
        <>
            <div>
              <Nav />
              <Menu />
              <Login/>
                <h1 class="p1">Hello world</h1>
                <button class="btn btn-primary">Test</button>
                
                
            </div>
        </>
    )],
};

m.route(document.body, "/", {
    "/": App
});
