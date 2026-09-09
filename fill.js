const element = document.getElementById("list");
const button = document.getElementById("next");
const block = document.getElementById("projects");

const projects = [
    { name: "maxplus", uri: "https://github.com/junioraww/maxplus" },
    { name: "hysteria-bot", uri: "https://github.com/junioraww/hysteria-bot" },
    { name: "cctv", uri: "https://github.com/JuniorAww/cctv" },
    { name: "keygram", uri: "https://github.com/junioraww/keygram" },
    { name: "wireguard-tg", uri: "https://github.com/junioraww/wireguard-tg-fork" },
    { name: "skyart", uri: "https://github.com/junioraww/skyart" },
    { name: "tgifts", uri: "https://github.com/junioraww/TGifts" },
    { name: "ytdl-bot", uri: "https://github.com/junioraww/ytdl-bot" },
    { name: "plyt", uri: "https://github.com/junioraww/plyt" },
    { name: "tgava", uri: "https://github.com/junioraww/TGAva" },
    { name: "rumax", uri: "https://github.com/junioraww/rumax" },
    { name: "packmanager", uri: "https://github.com/junioraww/PackManager" },
    { name: "rumax", uri: "https://github.com/junioraww/rumax" },
    { name: "Livre", uri: "https://github.com/junioraww/Livre" },
    { name: "skyloader", uri: "lisyak.net/skyloader/1.2.0/skyloader.exe" },
]

let page = 0;

const sleep = s => new Promise(r => setTimeout(r, s));

const fill = () => {
    const els = projects.slice(page * 3, page * 3 + 3);
    while (els.length < 3) els.push({});

    element.innerHTML = els.map(({ name, uri }) =>
        `<a target="_blank" ${uri ? 'href="'+uri+'"' : ''}>${name || '&nbsp;'}</a>`
    ).join('')


    block.style = "opacity:1";
}

fill()

button.addEventListener('click', async () => {
    page += 1;
    if (page >= projects.length / 3) page = 0;

    list.style = "opacity:0;";
    await sleep(200);
    fill();
    list.style = "opacity:1;";
})
