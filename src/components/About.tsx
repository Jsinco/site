function About() {
    return (
        <div id="about">
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    >
                        <defs>
                            <pattern x="50%" y={-1} id="e813992c-7d03-4cc4-a2bd-151760b470a0" width={200} height={200} patternUnits="userSpaceOnUse">
                                <path d="M100 200V.5M.5 .5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0}/>
                    </svg>
                </div>
                <div
                    className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-indigo-600">whodis?</p>
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    Hi, I'm Jonah
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700">
                                    I'm some random text from a random place in the world. I'm a random person who does
                                    random things and...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="-mt-12 -ml-8 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <img
                            alt=""
                            src="https://avatars.githubusercontent.com/u/67713846?v=4"
                            className="max-w-[28rem] rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
                        />
                    </div>
                    <div
                        className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Tada! Dramatic pause for no effect, I could have used lorem ipsum or some random
                                    text generator,
                                    but who needs that? Just type it up yourself and have Github copilot do the rest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// unused component
export default About;