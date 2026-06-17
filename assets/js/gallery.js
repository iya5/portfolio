const artworks = [
    { file: "nayeon.jpeg" },
    { file: "tzuyu.jpeg" },
    { file: "bom.jpeg" },
    { file: "cathodelogo.png" },
    { file: "dobby.jpeg" },
    { file: "ghbliphnx.png", background: "white" },
    { file: "gilmaxme.jpeg" },
    { file: "jeongyeon.jpeg" },
    { file: "ghbliphnxtowel.png", background: "white" },
    { file: "mirror.jpeg" },
    { file: "greek.png" },
    { file: "zeus.png" },
    { file: "bread.png" }
];

const gallery = document.getElementById("art-gallery");

for (const artwork of artworks) {
    const picture = document.createElement("picture");

    picture.className =
        "group mb-4 block cursor-pointer break-inside-avoid overflow-hidden";

    picture.setAttribute("role", "button");
    picture.setAttribute("tabindex", "0");

    const img = document.createElement("img");

    img.className =
        "block h-auto w-full opacity-0 transition-opacity duration-200 group-hover:opacity-80";

    img.loading = "lazy";
    img.src = `assets/images/art/${artwork.file}`;
    img.alt = artwork.file;
    img.style.opacity = "1";

    if (artwork.background) {
        img.style.backgroundColor = artwork.background;
    }

    picture.appendChild(img);
    gallery.appendChild(picture);
}