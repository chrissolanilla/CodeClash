import m from "mithril"
const CustomSVG = {
    view: () => m.trust(`<svg width="236" height="40" viewBox="0 0 236 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="216" cy="20" rx="20" ry="18" fill="#FFD600"/>
    <path d="M19.4104 2.28553L3.41044 25.2855M19 37.5H7.99999M3.41602 25.2773L1.41602 28.2773M19.5 2V38M1.40961 27.7133L8.40961 37.7133" stroke="black"/>
    <circle cx="217" cy="20" r="16" fill="black"/>
    <circle cx="217" cy="20" r="13" fill="#FFD600"/>
    <circle cx="217" cy="20" r="5" fill="black"/>
    <g style="mix-blend-mode:overlay" filter="url(#filter0_b_7_87)">
    <path d="M19 37H8L1 27.5L19 2V37Z" fill="#FFD600"/>
    <path d="M19 37H8L1 27.5L19 2V37Z" stroke="#FFD600"/>
    </g>
    <line x1="19.4111" y1="2.2846" x2="1.4111" y2="28.2846" stroke="#FFD600"/>
    <line x1="1.40962" y1="27.7133" x2="8.40962" y2="37.7133" stroke="#FFD600"/>
    <line x1="19" y1="37.5" x2="8" y2="37.5" stroke="#FFD600"/>
    <line x1="19.5" y1="38" x2="19.5" y2="2" stroke="#FFD600"/>
    <rect x="19" y="2" width="199" height="36" fill="black"/>
    <line x1="19" y1="37.5" x2="218" y2="37.5" stroke="#FFD600"/>
    <line x1="19" y1="2.5" x2="218" y2="2.5" stroke="#FFD600"/>
    <rect x="19" y="37" width="10.5" height="18.1" transform="rotate(180 19 37)" fill="black"/>
    <path d="M2 28L5 24.5359V31.4641L2 28Z" fill="black"/>
    <path d="M3.0634 29.146L11.7264 33.1951L8.54142 36.9839L3.0634 29.146Z" fill="black"/>
    <path d="M19.0544 3.6622L22.6385 17.0296L11.5923 15.3176L19.0544 3.6622Z" fill="black"/>
    <rect x="11" y="16" width="10" height="3" fill="black"/>
    <rect x="5" y="24" width="7" height="7" fill="black"/>
    <rect x="7" y="30" width="3" height="2" fill="black"/>
    <path d="M14 11.5L5.5 24L2.5 28L8.5 36.5H14.5V11.5H14ZM14 11.5L19 4H24V3.5" stroke="black"/>
    <line x1="19.4472" y1="3.22361" x2="18.4472" y2="5.22361" stroke="black"/>
    <rect x="11" y="15" width="8" height="6" fill="black"/>
    <rect x="9" y="18" width="4" height="3" fill="black"/>
    <rect x="10" y="17" width="2" height="1" fill="black"/>
    <rect width="2.3" height="1" transform="matrix(-1 0 0 1 13 16)" fill="black"/>
    <rect x="8" y="20" width="2" height="4" fill="black"/>
    <rect x="7" y="21" width="2" height="3" fill="black"/>
    <rect x="6" y="23" width="1" height="1" fill="black"/>
    <path d="M7.5 22L8.79904 23.5H6.20096L7.5 22Z" fill="black"/>
    <defs>
    <filter id="filter0_b_7_87" x="-3.61646" y="-3.57532" width="27.1165" height="45.0753" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/>
    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7_87"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7_87" result="shape"/>
    </filter>
    </defs>
    </svg>`)
};


export function Nav() {
    return {
        view: () => [
            m(".navbar", [
                m(".title", "Code Clash"),
                m(".auth-buttons", [
                        m(m.route.Link, { href: "/login" }, "Login"),
                        m(m.route.Link, { href: "/signup" }, "Sign Up")
                    ])
            ])
        ]
    }
}
// The Menu component
export function Menu() {
    return {
    view: () => m(".menu.flex.flex-col.items-end.justify-center.h-screen.space-y-4",
        // Loop or repeat your menu items as needed
        [1, 2, 3, 4, 5].map(item => 
        m(m.route.Link, { href: "/vsmode" },
            m(".menu-item.relative.cursor-pointer.transform.group",
            {
                class: item % 2 === 0 ? "translate-x-0" : "translate-x-48",
                onhover: (e:any) => e.currentTarget.classList.toggle("translate-x-0")
            },
            [
                m(".svg-container.absolute.w-48.h-12.scale-90.group-hover:scale-110.transition-transform.duration-300.ease-in-out",
                    m(CustomSVG)
                ),
                m(".menu-text.absolute.w-full.h-full.flex.items-center.justify-center.text-2xl.font-bold.text-white.transform.-translate-x-1/2.-translate-y-1/2.group-hover:scale-110.transition-transform.duration-300.ease-in-out",
                    m("h2", "VS Mode")
                )
            ]
            )
        )
        )
    )
    };
}

 