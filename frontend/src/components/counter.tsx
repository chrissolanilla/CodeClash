import m from "mithril"
export function Counter() {
    let count = 0;
    const increment = () => count += 1;
    const view = function () {
        return  [ 
            m("h3", `Counter : ${count}`),
            m("button", {onclick : increment}, "Inc me")
        ]
        }
    return { view }
}