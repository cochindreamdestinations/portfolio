import Navbar from "../components/Navbar";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <Navbar />
            <section className="container mt-24 mx-auto px-12 py-4">
                <div class="grid grid-cols-2 gap-4 md:grid-cols-5">
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/sithara.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center "
                                src="images/gallery/hatchshell.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/mit_boston.webp"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_0517.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_1063.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center "
                                src="images/gallery/IMG_1222.webp"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_1642.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center "
                                src="images/gallery/IMG_2236.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_2250.webp"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_6097.webp"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_8680.webp"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                    <div class="grid gap-4">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_9542.jpeg"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center "
                                src="images/gallery/IMG_9541.jpeg"
                                alt="gallery-photo"
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg object-cover object-center"
                                src="images/gallery/IMG_9987.jpeg"
                                alt="gallery-photo"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}