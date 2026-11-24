
const projectsData = [
    {
        name: "maxplus",
        links: [
            { label: "maxplus.dev", url: "https://maxplus.dev" },
            { label: "github", url: "https://github.com/junioraww/maxplus" }
        ],
        snippets: [
            {
                path: "crates/crypto/src/cipher.rs",
                commit: "10.11.2026",
                code: [
                    "01 use chacha20poly1305::{aead::Aead,",
                    "   ChaCha20Poly1305, KeyInit, Nonce};",
                    "02 use x25519_dalek::{EphemeralSecret,",
                    "   PublicKey};",
                    "03",
                    "04 pub fn encrypt_envelope(secret:",
                    "   &EphemeralSecret, peer: &PublicKey,",
                    "   payload: &[u8]) -> Result<Vec<u8>,",
                    "   CryptoError> {",
                    "05   let shared = secret.diffie_hellman(peer);"
                ]
            },
            {
                path: "src-tauri/src/session.rs",
                commit: "04.11.2026",
                code: [
                    "01 pub async fn init_session(",
                    "   token: &str, device: DeviceInfo) -> Session {",
                    "02   let client = Client::builder()",
                    "03     .tcp_nodelay(true)",
                    "04     .timeout(Duration::from_secs(10))",
                    "05     .build().expect(\"client build\");",
                    "06   Session::new(client, token, device)",
                    "07 }"
                ]
            },
            {
                path: "ui/src/lib/transport/ws.ts",
                commit: "28.10.2026",
                code: [
                    "01 export class MaxSocket extends EventTarget {",
                    "02   private ws: WebSocket | null = null;",
                    "03   connect(url: string, retry = 0): void {",
                    "04     this.ws = new WebSocket(url);",
                    "05     this.ws.binaryType = \"arraybuffer\";",
                    "06     this.ws.onmessage = (e) => this.decode(e.data);",
                    "07   }"
                ]
            }
        ]
    },
    {
        name: "rumax",
        links: [
            { label: "crates.io", url: "https://crates.io/crates/rumax" },
            { label: "github", url: "https://github.com/junioraww/rumax" }
        ],
        snippets: [
            {
                path: "crates/rumax-core/src/client.rs",
                commit: "18.11.2026",
                code: [
                    "01 pub struct RuMaxClient {",
                    "02   api_base: Url,",
                    "03   session: Arc<Mutex<AuthState>>,",
                    "04 }",
                    "05 impl RuMaxClient {",
                    "06   pub async fn query<T: DeserializeOwned>(",
                    "     &self, ep: &str) -> Result<T, RuMaxError> {",
                    "07     let res = self.client.get(ep).send().await?;"
                ]
            },
            {
                path: "crates/rumax-proto/src/codec.rs",
                commit: "09.11.2026",
                code: [
                    "01 pub fn unpack_payload(buf: &[u8]) -> Packet {",
                    "02   let (header, rest) = buf.split_at(8);",
                    "03   let op = u16::from_be_bytes([header[0], header[1]]);",
                    "04   let seq = u32::from_be_bytes([",
                    "     header[2], header[3], header[4], header[5]]);",
                    "05   Packet { op, seq, body: rest.to_vec() }",
                    "06 }"
                ]
            }
        ]
    },
    {
        name: "keygram",
        links: [
            { label: "npm", url: "https://www.npmjs.com/package/keygram" },
            { label: "github", url: "https://github.com/junioraww/keygram" }
        ],
        snippets: [
            {
                path: "src/keyboard/builder.ts",
                commit: "12.10.2026",
                code: [
                    "01 export class InlineKeyboardBuilder {",
                    "02   private rows: InlineKeyboardButton[][] = [];",
                    "03   public button(text: string, data: string): this {",
                    "04     const last = this.rows[this.rows.length - 1] ?? [];",
                    "05     last.push({ text, callback_data: data });",
                    "06     return this;",
                    "07   }"
                ]
            },
            {
                path: "src/context/callback.ts",
                commit: "03.10.2026",
                code: [
                    "01 export async function handleAction(",
                    "   ctx: BotCtx, action: PanelAction) {",
                    "02   if (!action.validate(ctx.from?.id)) {",
                    "03     return ctx.answerCbQuery(\"Access denied\");",
                    "04   }",
                    "05   await action.execute(ctx);",
                    "06 }"
                ]
            }
        ]
    },
    {
        name: "hysteria-bot",
        links: [
            { label: "github", url: "https://github.com/junioraww/hysteria-bot" }
        ],
        snippets: [
            {
                path: "src/server/stats.js",
                commit: "21.09.2026",
                code: [
                    "01 async function getTraffic(userId) {",
                    "02   const res = await api.get(`/user/${userId}/traffic`);",
                    "03   const { tx, rx, limit } = res.data;",
                    "04   const remaining = Math.max(0, limit - (tx + rx));",
                    "05   return { up: formatBytes(tx), down: formatBytes(rx), remaining };",
                    "06 }"
                ]
            },
            {
                path: "src/bot/handlers/auth.js",
                commit: "14.09.2026",
                code: [
                    "01 bot.command('generate', async (ctx) => {",
                    "02   const key = crypto.randomBytes(16).toString('hex');",
                    "03   await hysteria.createUser({ id: ctx.from.id, key });",
                    "04   await ctx.replyWithDocument({ source: makeConfig(key) });",
                    "05 });"
                ]
            }
        ]
    },
    {
        name: "cctv",
        links: [
            { label: "github", url: "https://github.com/JuniorAww/cctv" }
        ],
        snippets: [
            {
                path: "src/stream/worker.js",
                commit: "15.08.2026",
                code: [
                    "01 const ffmpeg = spawn('ffmpeg', [",
                    "02   '-rtsp_transport', 'tcp',",
                    "03   '-i', rtspUrl,",
                    "04   '-f', 'image2',",
                    "05   '-vf', 'fps=1/5',",
                    "06   'pipe:1'",
                    "07 ]);"
                ]
            }
        ]
    },
    {
        name: "wireguard-tg",
        links: [
            { label: "github", url: "https://github.com/junioraww/wireguard-tg-fork" }
        ],
        snippets: [
            {
                path: "internal/wg/peer.go",
                commit: "30.08.2026",
                code: [
                    "01 func GeneratePeer(clientName string) (*Peer, error) {",
                    "02   privKey, err := wgtypes.GeneratePrivateKey()",
                    "03   if err != nil { return nil, err }",
                    "04   pubKey := privKey.PublicKey()",
                    "05   ip := allocateNextIP()",
                    "06   return &Peer{Name: clientName, Pub: pubKey.String(), IP: ip}, nil",
                    "07 }"
                ]
            }
        ]
    },
    {
        name: "AuthVee",
        links: [
            { label: "github", url: "https://github.com/junioraww/AuthVee" }
        ],
        snippets: [
            {
                path: "src/main/java/dev/junior/auth/FaceVerifier.java",
                commit: "11.07.2026",
                code: [
                    "01 public CompletableFuture<Boolean> verifyUser(",
                    "   UUID playerUuid, byte[] frame) {",
                    "02   return CompletableFuture.supplyAsync(() -> {",
                    "03     Mat face = detector.extractCrop(frame);",
                    "04     float dist = model.compare(playerUuid, face);",
                    "05     return dist < 0.42f;",
                    "06   });",
                    "07 }"
                ]
            }
        ]
    },
    {
        name: "skyart",
        links: [
            { label: "github", url: "https://github.com/junioraww/skyart" }
        ],
        snippets: [
            {
                path: "src/canvas/renderer.ts",
                commit: "02.06.2026",
                code: [
                    "01 export function renderChunk(ctx: CanvasRenderingContext2D,",
                    "   chunk: PixelChunk) {",
                    "02   const imgData = ctx.createImageData(16, 16);",
                    "03   imgData.data.set(chunk.pixels);",
                    "04   ctx.putImageData(imgData, chunk.x * 16, chunk.y * 16);",
                    "05 }"
                ]
            }
        ]
    },
    {
        name: "tgifts",
        links: [
            { label: "github", url: "https://github.com/junioraww/TGifts" }
        ],
        snippets: [
            {
                path: "src/watcher/gifts.py",
                commit: "19.10.2026",
                code: [
                    "01 async def watch_new_gifts(client: TelegramClient):",
                    "02   async for event in client.iter_gift_events():",
                    "03     if event.supply_left < 100:",
                    "04       await notify_subscribers(",
                    "         event.gift_id, event.price)",
                    "05 }"
                ]
            }
        ]
    },
    {
        name: "ytdl-bot",
        links: [
            { label: "github", url: "https://github.com/junioraww/ytdl-bot" }
        ],
        snippets: [
            {
                path: "bot/downloader.py",
                commit: "04.05.2026",
                code: [
                    "01 ydl_opts = {",
                    "02   'format': 'bestaudio/best',",
                    "03   'postprocessors': [{'key': 'FFmpegExtractAudio',",
                    "     'preferredcodec': 'mp3'}],",
                    "04   'outtmpl': 'downloads/%(id)s.%(ext)s',",
                    "05 }"
                ]
            }
        ]
    },
    {
        name: "plyt",
        links: [
            { label: "github", url: "https://github.com/junioraww/plyt" }
        ],
        snippets: [
            {
                path: "src/audio/streamer.rs",
                commit: "12.04.2026",
                code: [
                    "01 pub async fn stream_track(url: &str) -> AudioSink {",
                    "02   let stream = reqwest::get(url).await?.bytes_stream();",
                    "03   let decoder = rodio::Decoder::new(StreamReader(stream))?;",
                    "04   sink.append(decoder);",
                    "05   sink.play()",
                    "06 }"
                ]
            }
        ]
    },
    {
        name: "tgava",
        links: [
            { label: "github", url: "https://github.com/junioraww/TGAva" }
        ],
        snippets: [
            {
                path: "src/generator/avatar.py",
                commit: "28.03.2026",
                code: [
                    "01 def compose_dynamic_ava(user_id: int, text: str) -> BytesIO:",
                    "02   base = Image.new(\"RGBA\", (640, 640), (20, 20, 30, 255))",
                    "03   draw_gradient_mesh(base, seed=user_id)",
                    "04   draw_monogram(base, text, font_size=220)",
                    "05   return export_webp(base)"
                ]
            }
        ]
    },
    {
        name: "packmanager",
        links: [
            { label: "github", url: "https://github.com/junioraww/PackManager" }
        ],
        snippets: [
            {
                path: "src/pack/manifest.ts",
                commit: "17.02.2026",
                code: [
                    "01 export function compilePack(assets: AssetMap): Buffer {",
                    "02   const zip = new AdmZip();",
                    "03   zip.addFile(\"pack.mcmeta\", Buffer.from(JSON.stringify(meta)));",
                    "04   for (const [path, data] of assets) zip.addFile(path, data);",
                    "05   return zip.toBuffer();",
                    "06 }"
                ]
            }
        ]
    },
    {
        name: "Livre",
        links: [
            { label: "github", url: "https://github.com/junioraww/Livre" }
        ],
        snippets: [
            {
                path: "src/main/java/io/livre/reader/EpubParser.java",
                commit: "09.01.2026",
                code: [
                    "01 public Book parse(InputStream input) throws IOException {",
                    "02   ZipInputStream zip = new ZipInputStream(input);",
                    "03   OpfPackage opf = parsePackageDoc(zip);",
                    "04   return new Book(opf.getMetadata(), opf.getSpine());",
                    "05 }"
                ]
            }
        ]
    },
    {
        name: "skyloader",
        links: [
            { label: "download", url: "https://lisyak.net/skyloader/1.2.0/skyloader.exe" }
        ],
        snippets: [
            {
                path: "loader/src/injector.cpp",
                commit: "14.12.2025",
                code: [
                    "01 bool VerifyAndInject(DWORD pid, const char* dllPath) {",
                    "02   HANDLE hProc = OpenProcess(PROCESS_ALL_ACCESS, FALSE, pid);",
                    "03   LPVOID mem = VirtualAllocEx(hProc, NULL, strlen(dllPath), MEM_COMMIT, PAGE_READWRITE);",
                    "04   WriteProcessMemory(hProc, mem, dllPath, strlen(dllPath), NULL);",
                    "05   return CreateRemoteThread(hProc, NULL, 0, (LPTHREAD_START_ROUTINE)LoadLibraryA, mem, 0, NULL);",
                    "06 }"
                ]
            }
        ]
    }
];

const globalBonusSnippets = [
    {
        path: "crates/kernel/src/memory.rs",
        commit: "22.11.2026",
        code: [
            "01 pub unsafe fn map_page_table(",
            "   page: PhysFrame, flags: PageTableFlags) -> Result<(), MapError> {",
            "02   let virt = VirtAddr::new(page.start_address().as_u64());",
            "03   active_table.map_to(page, virt, flags, &mut frame_allocator)?.flush();",
            "04   Ok(())",
            "05 }"
        ]
    },
    {
        path: "src/network/quic.go",
        commit: "16.11.2026",
        code: [
            "01 func OpenMultiplexStream(conn quic.Connection) (io.ReadWriteCloser, error) {",
            "02   stream, err := conn.OpenStreamSync(context.Background())",
            "03   if err != nil { return nil, err }",
            "04   return snappy.NewBufferedWriter(stream), nil",
            "05 }"
        ]
    }
];

const listEl = document.getElementById("list");
const nextBtn = document.getElementById("next");
const dotsContainer = document.getElementById("pagination-dots");
const portfolioContainer = document.getElementById("portfolio-container");

const cardEl = document.getElementById("preview-card");
const cardCaret = document.getElementById("card-caret");
const cardTitle = document.getElementById("card-title");
const cardCommit = document.getElementById("card-commit");
const cardClose = document.getElementById("card-close");
const codePath = document.getElementById("code-path");
const codeContent = document.getElementById("code-content");
const codeReroll = document.getElementById("code-reroll");
const cardActions = document.getElementById("card-actions");

const ITEMS_PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(projectsData.length / ITEMS_PER_PAGE);

let currentPage = 0;
let isCardOpen = false;
let activeProjectIndex = -1;
let currentSnippetIndex = 0;

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function highlightLine(line) {
    let lineNumHtml = '';
    let restOfLine = line;

    const numMatch = line.match(/^(\d{2})\s(.*)$/);
    const indentMatch = line.match(/^(\s{2,3})(.*)$/);

    if (numMatch) {
        lineNumHtml = `<span class="tok-num">${numMatch[1]}</span>`;
        restOfLine = numMatch[2];
    } else if (indentMatch) {
        lineNumHtml = `<span class="tok-num-space"></span>`;
        restOfLine = indentMatch[2];
    }

    let escaped = escapeHtml(restOfLine);

    if (escaped.trim().startsWith("//")) {
        return lineNumHtml + `<span class="tok-comment">${escaped}</span>`;
    }

    escaped = escaped.replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="tok-str">$1</span>');

    const keywords = /\b(use|pub|fn|let|mut|struct|impl|enum|type|const|return|async|await|import|export|from|class|extends|interface|function|def|bool|throws|new|bool|void|true|false)\b/g;
    escaped = escaped.replace(keywords, '<span class="tok-kw">$1</span>');

    const types = /\b(Result|Vec|Option|PublicKey|EphemeralSecret|CryptoError|ChaCha20Poly1305|Aead|Nonce|KeyInit|TcpStream|Session|Url|Arc|Mutex|Client|Buffer|Book|CompletableFuture|UUID|String|str|u8|u16|u32|u64|usize|i32|i64|DWORD|HANDLE|LPVOID|BytesIO|Image|AdmZip|ZipInputStream|OpfPackage|Peer|Mat|InlineKeyboardButton|BotCtx|PanelAction|EventTarget|WebSocket|CanvasRenderingContext2D|PixelChunk|AudioSink|Duration)\b/g;
    escaped = escaped.replace(types, '<span class="tok-type">$1</span>');

    return lineNumHtml + escaped;
}

function displaySnippet(snippet, animate = false) {
    cardCommit.textContent = `commit: ${snippet.commit || 'main'}`;
    codePath.textContent = snippet.path;

    const formattedLines = snippet.code.map(line => highlightLine(line)).join('\n');

    if (animate) {
        codeContent.style.opacity = '0';
        setTimeout(() => {
            codeContent.innerHTML = formattedLines;
            codeContent.style.opacity = '1';
        }, 80);
    } else {
        codeContent.innerHTML = formattedLines;
        codeContent.style.opacity = '1';
    }
}

function rerollCode() {
    if (!isCardOpen || activeProjectIndex < 0) return;

    codeReroll.classList.add('spinning');
    setTimeout(() => codeReroll.classList.remove('spinning'), 400);

    const project = projectsData[activeProjectIndex];
    if (!project) return;
    const snippets = project.snippets || [];

    if (snippets.length > 1) {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * snippets.length);
        } while (nextIndex === currentSnippetIndex && snippets.length > 1);
        currentSnippetIndex = nextIndex;
        displaySnippet(snippets[currentSnippetIndex], true);
    } else if (snippets.length === 1) {
        const pool = [...snippets, ...globalBonusSnippets];
        let nextIndex = Math.floor(Math.random() * pool.length);
        displaySnippet(pool[nextIndex], true);
    }
}

function updateCard(project, randomizeSnippet = true) {
    cardTitle.textContent = project.name;

    const snippets = project.snippets || [];
    if (randomizeSnippet && snippets.length > 0) {
        currentSnippetIndex = Math.floor(Math.random() * snippets.length);
    } else {
        currentSnippetIndex = 0;
    }

    if (snippets.length > 0) {
        displaySnippet(snippets[currentSnippetIndex]);
    }

    cardActions.innerHTML = (project.links || []).map(link => `
        <a class="pill-btn" href="${link.url}" target="_blank" rel="noopener noreferrer">
            <span>${link.label}</span>
            <span class="pill-arrow">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="2" y1="10" x2="10" y2="2"></line>
                    <polyline points="4 2 10 2 10 8"></polyline>
                </svg>
            </span>
        </a>
    `).join('');

    cardEl.classList.remove('hidden');
    updateCaretPosition();
}

function updateCaretPosition() {
    const activeEl = document.querySelector('.project-item.active');
    if (!activeEl || !cardEl || !cardCaret) return;

    if (window.innerWidth <= 680) {
        cardCaret.style.top = '';
        return;
    }

    const activeRect = activeEl.getBoundingClientRect();
    const cardRect = cardEl.getBoundingClientRect();

    if (cardRect.height === 0) return;

    const relativeY = (activeRect.top + activeRect.height / 2) - cardRect.top;
    cardCaret.style.top = `${Math.round(relativeY)}px`;
}

function updatePaginationDots() {
    if (dotsContainer.children.length !== TOTAL_PAGES) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < TOTAL_PAGES; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === currentPage ? 'active' : ''}`;
            dot.setAttribute('title', `Page ${i + 1}`);
            dot.addEventListener('click', (e) => {
                e.stopPropagation();
                goToPage(i);
            });
            dotsContainer.appendChild(dot);
        }
        return;
    }

    Array.from(dotsContainer.children).forEach((dot, i) => {
        dot.classList.toggle('active', i === currentPage);
    });
}

function renderProjectList() {
    const pageProjects = projectsData.slice(
        currentPage * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    listEl.innerHTML = pageProjects.map((p, idx) => {
        const globalIdx = currentPage * ITEMS_PER_PAGE + idx;
        const isActive = globalIdx === activeProjectIndex;
        return `
            <a class="project-item ${isActive ? 'active' : ''}" data-index="${globalIdx}">
                ${p.name}
            </a>
        `;
    }).join('');

    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.getAttribute('data-index'), 10);
            selectProject(idx);
        });
    });

    updatePaginationDots();
    updateCaretPosition();
}

function openCard(globalIndex) {
    isCardOpen = true;
    activeProjectIndex = globalIndex;

    document.querySelectorAll('.project-item').forEach(item => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        item.classList.toggle('active', idx === activeProjectIndex);
    });

    portfolioContainer.classList.remove('card-closed');
    updateCard(projectsData[activeProjectIndex], true);
    cardEl.classList.remove('hidden');
    
    requestAnimationFrame(() => {
        updateCaretPosition();
    });
}

function closeCard() {
    isCardOpen = false;
    activeProjectIndex = -1;

    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });

    portfolioContainer.classList.add('card-closed');
    cardEl.classList.add('hidden');
}

function selectProject(globalIndex) {
    if (isCardOpen && activeProjectIndex === globalIndex) {
        closeCard();
    } else {
        openCard(globalIndex);
    }
}

async function goToPage(pageIndex) {
    if (pageIndex === currentPage) return;
    currentPage = pageIndex;

    listEl.style.opacity = "0";
    await new Promise(r => setTimeout(r, 120));

    if (isCardOpen) {
        activeProjectIndex = currentPage * ITEMS_PER_PAGE;
        renderProjectList();
        updateCard(projectsData[activeProjectIndex], true);
    } else {
        renderProjectList();
    }

    listEl.style.opacity = "1";
}

nextBtn.addEventListener('click', async () => {
    const nextP = (currentPage + 1) % TOTAL_PAGES;
    await goToPage(nextP);
});

codeReroll.addEventListener('click', (e) => {
    e.stopPropagation();
    rerollCode();
});

cardClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeCard();
});

window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;

    if (e.key === 'r' || e.key === 'R' || e.key === 'к' || e.key === 'К') {
        rerollCode();
    } else if (e.key === 'ArrowDown') {
        const pageStart = currentPage * ITEMS_PER_PAGE;
        const maxOnPage = Math.min(pageStart + ITEMS_PER_PAGE - 1, projectsData.length - 1);
        if (!isCardOpen) {
            openCard(pageStart);
        } else if (activeProjectIndex < maxOnPage) {
            selectProject(activeProjectIndex + 1);
        } else {
            selectProject(pageStart);
        }
    } else if (e.key === 'ArrowUp') {
        const pageStart = currentPage * ITEMS_PER_PAGE;
        const maxOnPage = Math.min(pageStart + ITEMS_PER_PAGE - 1, projectsData.length - 1);
        if (!isCardOpen) {
            openCard(maxOnPage);
        } else if (activeProjectIndex > pageStart) {
            selectProject(activeProjectIndex - 1);
        } else {
            selectProject(maxOnPage);
        }
    } else if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'n' || e.key === 'N') {
        goToPage((currentPage + 1) % TOTAL_PAGES);
    } else if (e.key === 'ArrowLeft' || e.key === 'p' || e.key === 'P') {
        goToPage((currentPage - 1 + TOTAL_PAGES) % TOTAL_PAGES);
    } else if (e.key === 'Escape') {
        if (isCardOpen) {
            closeCard();
        } else {
            openCard(currentPage * ITEMS_PER_PAGE);
        }
    }
});

window.addEventListener('resize', () => {
    if (isCardOpen) {
        updateCaretPosition();
    }
});

function initPortfolio() {
    isCardOpen = false;
    activeProjectIndex = -1;
    portfolioContainer.classList.add('card-closed');
    cardEl.classList.add('hidden');
    renderProjectList();
    portfolioContainer.style.opacity = "1";
}

initPortfolio();
