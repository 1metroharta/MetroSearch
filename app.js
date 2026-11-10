(function () {
  const PUBLISHED = "https://1metroharta.github.io/MetroSearch/";
  const TABS = ["all", "images", "news", "maps", "video", "music", "books"];
  const ICONS = {
    search: '<circle cx="11" cy="11" r="6"/><path d="m20 20-3.5-3.5"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4M8 21h8"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
    moon: '<path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>',
    ext: '<path d="M14 5h5v5M19 5l-9 9"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>',
    save: '<path d="M6 4h12v16l-6-3-6 3z"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.4"/><path d="m21 15-4.5-4.5L7 19"/>',
    news: '<path d="M5 5h11a2 2 0 0 1 2 2v12H7a2 2 0 0 0-2 2z"/><path d="M5 5v14a2 2 0 0 0 2 2h12"/><path d="M8 9h7M8 13h7"/>',
    map: '<path d="m9 4 6 2 4-1.5V18l-4 1.5-6-2-4 1.5V6z"/><path d="M9 4v13.5M15 6v13.5"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-2v8l-5-2z"/>',
    music: '<path d="M9 18a3 3 0 1 1-3-3 3 3 0 0 1 3 3zm0 0V6l10-2v12"/><path d="M19 16a3 3 0 1 1-3-3 3 3 0 0 1 3 3z"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5V21"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.8 2.5 15.2 0 18M12 3c-2.5 2.8-2.5 15.2 0 18"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    pin: '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.2"/>',
  };

  const I18N = {
    ru: {
      kicker: "Линия M · открытый интернет",
      lede: "Ищите по всему открытому интернету и открывайте любой найденный сайт. Кнопка «Найти» открывает MetroSearch, не Google.",
      ledeInline: "Ищите по открытому интернету. Результаты остаются в MetroSearch, сайты открываются напрямую.",
      placeholder: "Сайт, вопрос, адрес или город",
      find: "Найти",
      lucky: "Мне повезёт",
      voice: "Голос",
      clear: "Очистить",
      all: "Все",
      images: "Картинки",
      news: "Новости",
      maps: "Карты",
      video: "Видео",
      music: "Музыка",
      books: "Книги",
      settings: "Настройки",
      def: "По умолчанию",
      about: "О поиске",
      privacy: "Конфиденциальность",
      saved: "Сохранённое",
      theme: "Тема",
      board: "Табло запросов",
      recent: "Недавние",
      examples: "Примеры",
      emptyHist: "История появится после первого поиска и хранится только на этом устройстве.",
      resultsFor: "Результаты",
      sources: "источников ответили",
      partial: "Часть источников сейчас недоступна. Показано то, что успело прийти.",
      nothing: "Ничего не нашлось. Попробуйте короче или снимите фильтр.",
      loading: "Ищем по открытым источникам…",
      open: "Открыть",
      copy: "Копировать",
      save: "Сохранить",
      savedDone: "В сохранённом",
      copied: "Скопировано",
      copyFail: "Не удалось скопировать",
      opened: "Поиск открыт в новом окне MetroSearch",
      popup: "Браузер заблокировал окно — показали результаты здесь",
      didyou: "Возможно, вы имели в виду",
      related: "Похожие запросы",
      official: "Официальный сайт",
      knowledge: "Справка",
      web: "Страницы",
      code: "Код",
      science: "Наука",
      archive: "Архив",
      more: "Показать ещё",
      less: "Свернуть",
      prev: "Назад",
      next: "Дальше",
      filterAll: "Всё",
      imagesOf: "Картинки",
      openImage: "Открыть оригинал",
      sourcePage: "Страница источника",
      license: "Лицензия",
      route: "Маршрут",
      from: "Откуда",
      to: "Куда",
      near: "Рядом со мной",
      area: "Искать в этой области",
      schema: "Схема",
      sat: "Спутник",
      places: "Места",
      noPlaces: "Места появятся после поиска. Можно ввести адрес, город или «кафе».",
      routeReady: "Маршрут построен",
      km: "км",
      min: "мин",
      settingsTitle: "Настройки",
      lang: "Язык",
      themeLabel: "Оформление",
      dark: "Ночь",
      light: "Бумага",
      system: "Как в системе",
      safe: "Безопасный поиск",
      newWindow: "«Найти» открывает новое окно MetroSearch",
      newTab: "Сайты открывать в новой вкладке",
      perPage: "Результатов на странице",
      clearHist: "Стереть историю",
      clearSaved: "Стереть сохранённое",
      cleared: "Данные на этом устройстве удалены",
      aboutTitle: "Как устроен MetroSearch",
      privacyTitle: "Конфиденциальность",
      defaultTitle: "Сделать поиском по умолчанию",
      copyUrl: "Скопировать адрес",
      close: "Закрыть",
      operators: "Операторы: site:example.com, filetype:pdf, \"точная фраза\", -исключить",
      share: "Поделиться",
      wayback: "Копия в Wayback",
      openSite: "Открыть сайт",
      direct: "Прямой переход",
      forecast: "Прогноз",
      feel: "ощущается",
      wind: "ветер",
      humidity: "влажность",
      calc: "Калькулятор",
      convert: "Перевод величин",
      currency: "Валюта",
      weather: "Погода",
      translate: "Перевод",
      define: "Словарь",
      time: "Время",
      ip: "Ваш IP",
      noInstant: "Не удалось получить быстрый ответ",
      geoDeny: "Геолокация недоступна",
      routeFail: "Маршрут не построен. Проверьте названия.",
      page: "Страница",
      remove: "Убрать",
      emptySaved: "Пока пусто. Нажимайте «Сохранить» у результата.",
      footer: "Запросы не уходят в Google. История остаётся в браузере.",
    },
    en: {
      kicker: "Line M · the open web",
      lede: "Search the open internet and open any site you find. Find opens MetroSearch, not Google.",
      ledeInline: "Search the open internet. Results stay in MetroSearch. Sites open directly.",
      placeholder: "Site, question, address, or city",
      find: "Find",
      lucky: "I'm lucky",
      voice: "Voice",
      clear: "Clear",
      all: "All",
      images: "Images",
      news: "News",
      maps: "Maps",
      video: "Video",
      music: "Music",
      books: "Books",
      settings: "Settings",
      def: "Default",
      about: "About",
      privacy: "Privacy",
      saved: "Saved",
      theme: "Theme",
      board: "Departure board",
      recent: "Recent",
      examples: "Examples",
      emptyHist: "History appears after your first search and stays on this device.",
      resultsFor: "Results",
      sources: "sources responded",
      partial: "Some sources are unavailable. Showing what arrived.",
      nothing: "Nothing matched. Try a shorter query or clear the filter.",
      loading: "Searching open sources…",
      open: "Open",
      copy: "Copy",
      save: "Save",
      savedDone: "Saved",
      copied: "Copied",
      copyFail: "Couldn't copy",
      opened: "MetroSearch opened in a new window",
      popup: "The browser blocked the window — showing results here",
      didyou: "Did you mean",
      related: "Related",
      official: "Official site",
      knowledge: "Knowledge",
      web: "Pages",
      code: "Code",
      science: "Science",
      archive: "Archive",
      more: "Show more",
      less: "Collapse",
      prev: "Previous",
      next: "Next",
      filterAll: "All",
      imagesOf: "Images",
      openImage: "Open original",
      sourcePage: "Source page",
      license: "License",
      route: "Route",
      from: "From",
      to: "To",
      near: "Near me",
      area: "Search this area",
      schema: "Map",
      sat: "Satellite",
      places: "Places",
      noPlaces: "Places show up after a search. Try an address, a city, or “cafe”.",
      routeReady: "Route ready",
      km: "km",
      min: "min",
      settingsTitle: "Settings",
      lang: "Language",
      themeLabel: "Appearance",
      dark: "Night",
      light: "Paper",
      system: "System",
      safe: "Safe search",
      newWindow: "Find opens a new MetroSearch window",
      newTab: "Open websites in a new tab",
      perPage: "Results per page",
      clearHist: "Clear history",
      clearSaved: "Clear saved",
      cleared: "On-device data cleared",
      aboutTitle: "How MetroSearch works",
      privacyTitle: "Privacy",
      defaultTitle: "Make MetroSearch the default",
      copyUrl: "Copy address",
      close: "Close",
      operators: "Operators: site:example.com, filetype:pdf, \"exact phrase\", -exclude",
      share: "Share",
      wayback: "Wayback copy",
      openSite: "Open site",
      direct: "Go directly",
      forecast: "Forecast",
      feel: "feels like",
      wind: "wind",
      humidity: "humidity",
      calc: "Calculator",
      convert: "Unit conversion",
      currency: "Currency",
      weather: "Weather",
      translate: "Translation",
      define: "Dictionary",
      time: "Time",
      ip: "Your IP",
      noInstant: "No instant answer",
      geoDeny: "Location is unavailable",
      routeFail: "Couldn't build a route. Check the names.",
      page: "Page",
      remove: "Remove",
      emptySaved: "Nothing saved yet. Use Save on a result.",
      footer: "Queries are not sent to Google. History stays in your browser.",
    },
  };

  const EXAMPLES = {
    ru: [
      ["Погода в Москве", "all"],
      ["100 USD в RUB", "all"],
      ["Московский метрополитен", "all"],
      ["Красная площадь", "maps"],
      ["Космос", "images"],
      ["Новости метро", "news"],
    ],
    en: [
      ["Weather in Berlin", "all"],
      ["100 USD to EUR", "all"],
      ["Moscow Metro", "all"],
      ["Red Square", "maps"],
      ["Nebula", "images"],
      ["Transit news", "news"],
    ],
  };

  const ADULT = ["porn", "xxx", "pornhub", "xvideos", "xhamster", "порно", "порнуха"];
  const LANGS = {
    ru: "ru", en: "en", de: "de", fr: "fr", es: "es", it: "it", pt: "pt",
    zh: "zh-CN", ja: "ja", tr: "tr", uk: "uk", kk: "kk", pl: "pl",
    русский: "ru", английский: "en", немецкий: "de", французский: "fr",
    испанский: "es", итальянский: "it", китайский: "zh-CN", японский: "ja",
    турецкий: "tr", украинский: "uk", казахский: "kk",
    russian: "ru", english: "en", german: "de", french: "fr", spanish: "es",
    italian: "it", chinese: "zh-CN", japanese: "ja", turkish: "tr", ukrainian: "uk",
  };
  const CUR = {
    usd: "USD", dollar: "USD", dollars: "USD", доллар: "USD", доллара: "USD", долларов: "USD",
    eur: "EUR", euro: "EUR", евро: "EUR",
    rub: "RUB", rur: "RUB", руб: "RUB", рубль: "RUB", рубля: "RUB", рублей: "RUB",
    gbp: "GBP", фунт: "GBP", pound: "GBP",
    jpy: "JPY", yen: "JPY", йена: "JPY", иена: "JPY",
    cny: "CNY", юань: "CNY", yuan: "CNY",
    kzt: "KZT", тенге: "KZT",
    uah: "UAH", гривна: "UAH",
    chf: "CHF", try: "TRY", лира: "TRY", cad: "CAD", aud: "AUD",
    btc: "BTC", eth: "ETH",
  };
  const UNITS = {
    km: ["len", 1000], m: ["len", 1], cm: ["len", 0.01], mm: ["len", 0.001],
    mi: ["len", 1609.344], mile: ["len", 1609.344], miles: ["len", 1609.344],
    ft: ["len", 0.3048], in: ["len", 0.0254],
    км: ["len", 1000], м: ["len", 1], см: ["len", 0.01], мм: ["len", 0.001],
    миля: ["len", 1609.344], мили: ["len", 1609.344],
    kg: ["mass", 1000], g: ["mass", 1], lb: ["mass", 453.592], lbs: ["mass", 453.592], oz: ["mass", 28.3495],
    кг: ["mass", 1000], г: ["mass", 1],
    l: ["vol", 1], ml: ["vol", 0.001], gal: ["vol", 3.785],
    л: ["vol", 1], мл: ["vol", 0.001],
    "km/h": ["spd", 1], kmh: ["spd", 1], mph: ["spd", 1.60934],
    "км/ч": ["spd", 1],
    c: ["temp", "c"], f: ["temp", "f"], "°c": ["temp", "c"], "°f": ["temp", "f"],
  };

  const state = {
    q: "",
    tab: "all",
    page: 1,
    view: "home",
    overlay: null,
    loading: false,
    token: 0,
    buckets: {},
    arrived: 0,
    failed: 0,
    suggestion: "",
    related: [],
    knowledge: null,
    official: null,
    instant: null,
    images: [],
    places: [],
    routeA: "",
    routeB: "",
    routeInfo: null,
    routeLine: null,
    basemap: "osm",
    sourceFilter: "all",
    expanded: {},
    suggestions: [],
    suggestIndex: -1,
    lightbox: null,
    prefs: null,
    history: [],
    saved: [],
    _map: null,
    _markers: [],
    _leafletP: null,
  };

  let root = null;
  let suggestTimer = 0;

  function t(key) {
    const lang = state.prefs?.lang === "en" ? "en" : "ru";
    return I18N[lang][key] || I18N.ru[key] || key;
  }
  function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) => {
      if (c === "&") return "\u0026amp;";
      if (c === "<") return "\u0026lt;";
      if (c === ">") return "\u0026gt;";
      if (c === '"') return "\u0026quot;";
      return "\u0026#39;";
    });
  }
  function strip(html) {
    return String(html || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\u0026quot;/g, '"')
      .replace(/\u0026#039;|\u0026apos;/g, "'")
      .replace(/\u0026amp;/g, "&")
      .replace(/\u0026lt;/g, "<")
      .replace(/\u0026gt;/g, ">")
      .replace(/\u0026nbsp;/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }
  function icon(name) {
    return `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ""}</svg>`;
  }
  function safeUrl(u) {
    try {
      const url = new URL(u, "https://example.invalid");
      if (url.protocol === "http:" || url.protocol === "https:") return url.href;
    } catch { /* ignore */ }
    return "";
  }
  function hostOf(u) {
    try { return new URL(u).host.replace(/^www\./, ""); } catch { return ""; }
  }
  function inFrame() {
    try { return window.self !== window.top; } catch { return true; }
  }
  function wikiHost() {
    return state.prefs.lang === "en" ? "https://en.wikipedia.org" : "https://ru.wikipedia.org";
  }
  function newsHost() {
    return state.prefs.lang === "en" ? "https://en.wikinews.org" : "https://ru.wikinews.org";
  }
  function langCode() { return state.prefs.lang === "en" ? "en" : "ru"; }

  function loadPrefs() {
    const base = { theme: "dark", lang: "ru", safe: true, newWindow: true, newTab: true, perPage: 8 };
    try { state.prefs = { ...base, ...JSON.parse(localStorage.getItem("metrosearch.prefs") || "{}") }; }
    catch { state.prefs = base; }
    try { state.history = JSON.parse(localStorage.getItem("metrosearch.history") || "[]"); } catch { state.history = []; }
    try { state.saved = JSON.parse(localStorage.getItem("metrosearch.saved") || "[]"); } catch { state.saved = []; }
    if (!Array.isArray(state.history)) state.history = [];
    if (!Array.isArray(state.saved)) state.saved = [];
  }
  function savePrefs() { localStorage.setItem("metrosearch.prefs", JSON.stringify(state.prefs)); }
  function saveHistory() { localStorage.setItem("metrosearch.history", JSON.stringify(state.history.slice(0, 16))); }
  function saveSaved() { localStorage.setItem("metrosearch.saved", JSON.stringify(state.saved.slice(0, 80))); }

  function resolvedTheme() {
    if (state.prefs.theme === "light" || state.prefs.theme === "dark") return state.prefs.theme;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  function applyTheme() {
    const theme = resolvedTheme();
    root.dataset.theme = theme;
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#efeae1" : "#14181f");
  }

  function toast(text) {
    const el = root.querySelector("#toast");
    if (!el) return;
    el.hidden = false;
    el.textContent = text;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => { el.hidden = true; }, 2400);
  }

  async function fetchJSON(url, ms) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), ms || 9000);
    try {
      const res = await fetch(url, { signal: ctrl.signal, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      return await res.json();
    } finally { clearTimeout(timer); }
  }

  function parseQuery(raw) {
    let q = String(raw || "");
    const site = (q.match(/\bsite:(\S+)/i) || [])[1] || "";
    const filetype = (q.match(/\bfiletype:(\S+)/i) || [])[1] || "";
    const phrases = [...q.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    const minus = [...q.matchAll(/(?:^|\s)-(\S+)/g)].map((m) => m[1].toLowerCase());
    q = q.replace(/\bsite:\S+/gi, " ").replace(/\bfiletype:\S+/gi, " ").replace(/"[^"]+"/g, " ").replace(/(?:^|\s)-\S+/g, " ").replace(/\s+/g, " ").trim();
    return { raw: raw.trim(), text: q || raw.trim(), site: site.replace(/^https?:\/\//, "").replace(/\/.*$/, ""), filetype: filetype.toLowerCase(), phrases, minus };
  }
  function passFilters(item, parsed) {
    const blob = `${item.title} ${item.snippet} ${item.url}`.toLowerCase();
    if (state.prefs.safe && ADULT.some((w) => blob.includes(w))) return false;
    if (parsed.site && !hostOf(item.url).endsWith(parsed.site.toLowerCase())) return false;
    if (parsed.filetype && !item.url.toLowerCase().includes("." + parsed.filetype)) return false;
    if (parsed.phrases.some((p) => !blob.includes(p.toLowerCase()))) return false;
    if (parsed.minus.some((w) => blob.includes(w))) return false;
    return true;
  }
  function isSaved(url) { return state.saved.some((s) => s.url === url); }

  function aAttrs(url) {
    const href = safeUrl(url);
    if (!href) return 'href="#"';
    return state.prefs.newTab
      ? `href="${esc(href)}" target="_blank" rel="noopener noreferrer"`
      : `href="${esc(href)}" rel="noopener"`;
  }

  function resultHtml(item) {
    const href = safeUrl(item.url);
    if (!href) return "";
    const saved = isSaved(href);
    const bits = [];
    if (item.badge) bits.push(`<span class="badge">${esc(item.badge)}</span>`);
    return `<article class="result">
      <h3><a ${aAttrs(href)}>${esc(item.title)}</a></h3>
      <div class="host">${esc(hostOf(href))}${bits.length ? " · " + bits.join(" ") : ""}</div>
      ${item.snippet ? `<p class="snippet">${esc(item.snippet)}</p>` : ""}
      ${item.audio ? `<audio class="audio" controls preload="none" src="${esc(safeUrl(item.audio))}"></audio>` : ""}
      <div class="result-actions">
        <a class="linkish" ${aAttrs(href)}>${icon("ext")}${t("open")}</a>
        <button type="button" class="linkish" data-action="copy" data-url="${esc(href)}">${icon("copy")}${t("copy")}</button>
        <button type="button" class="linkish" data-action="toggle-save" data-url="${esc(href)}" data-title="${esc(item.title)}" data-snippet="${esc(item.snippet || "")}" data-badge="${esc(item.badge || "")}">${icon("save")}${saved ? t("savedDone") : t("save")}</button>
        <a class="linkish" ${aAttrs("https://web.archive.org/web/*/" + href)}>${t("wayback")}</a>
      </div>
    </article>`;
  }

  function section(title, items, key, dedicated) {
    const parsed = parseQuery(state.q);
    const list = items.filter((it) => passFilters(it, parsed));
    if (!list.length) return "";
    let shown = list;
    let pager = "";
    if (dedicated) {
      const size = Number(state.prefs.perPage) || 8;
      const pages = Math.max(1, Math.ceil(list.length / size));
      if (state.page > pages) state.page = pages;
      shown = list.slice((state.page - 1) * size, state.page * size);
      if (pages > 1) {
        pager = `<div class="pager">
          <button type="button" class="btn-ghost" data-action="page" data-page="${state.page - 1}" ${state.page <= 1 ? "disabled" : ""}>${t("prev")}</button>
          <span class="badge">${t("page")} ${state.page} / ${pages}</span>
          <button type="button" class="btn-ghost" data-action="page" data-page="${state.page + 1}" ${state.page >= pages ? "disabled" : ""}>${t("next")}</button>
        </div>`;
      }
    } else {
      const cap = state.expanded[key] ? list.length : 4;
      shown = list.slice(0, cap);
      if (list.length > 4) {
        pager = `<button type="button" class="linkish" data-action="expand" data-key="${esc(key)}">${state.expanded[key] ? t("less") : t("more")}</button>`;
      }
    }
    return `<h2 class="section-h">${esc(title)}</h2>${shown.map(resultHtml).join("")}${pager}`;
  }

  function imageTiles(list, compact) {
    const parsed = parseQuery(state.q);
    const items = list.filter((it) => passFilters(it, parsed) && safeUrl(it.thumb || it.url));
    if (!items.length) return "";
    if (compact) {
      return `<h2 class="section-h">${t("imagesOf")}</h2><div class="thumb-row">${items.slice(0, 8).map((it, i) =>
        `<button type="button" data-action="lightbox" data-i="${i}" data-set="strip"><img alt="${esc(it.title)}" src="${esc(safeUrl(it.thumb || it.url))}" loading="lazy" onerror="this.parentElement.remove()"></button>`
      ).join("")}</div>`;
    }
    const size = Number(state.prefs.perPage) || 8;
    const pageItems = items.slice(0, state.page * size);
    return `<div class="grid">${pageItems.map((it, i) => `<button type="button" class="tile" data-action="lightbox" data-i="${i}" data-set="images">
      <div class="frame"><img alt="${esc(it.title)}" src="${esc(safeUrl(it.thumb || it.url))}" loading="lazy" onerror="this.closest('.tile').remove()"></div>
      <span>${esc(it.title)}</span>
    </button>`).join("")}</div>${items.length > pageItems.length ? `<div class="pager"><button type="button" class="btn-ghost" data-action="page" data-page="${state.page + 1}">${t("more")}</button></div>` : ""}`;
  }

  function booksHtml(items) {
    const parsed = parseQuery(state.q);
    const list = items.filter((it) => passFilters(it, parsed));
    if (!list.length) return "";
    const size = (Number(state.prefs.perPage) || 8);
    const shown = state.tab === "books" ? list.slice(0, state.page * size) : list.slice(0, state.expanded.books ? list.length : 4);
    const cards = shown.map((it) => {
      const cover = safeUrl(it.cover || "");
      return `<article class="result book">
        ${cover ? `<img class="cover" alt="" src="${esc(cover)}" loading="lazy" onerror="this.remove()">` : `<div class="cover"></div>`}
        <div>
          <h3><a ${aAttrs(it.url)}>${esc(it.title)}</a></h3>
          <div class="host">${esc(it.badge || "")}${it.meta ? " · " + esc(it.meta) : ""}</div>
          ${it.snippet ? `<p class="snippet">${esc(it.snippet)}</p>` : ""}
          <div class="result-actions"><a class="linkish" ${aAttrs(it.url)}>${icon("ext")}${t("open")}</a></div>
        </div>
      </article>`;
    }).join("");
    const more = state.tab !== "books" && list.length > 4
      ? `<button type="button" class="linkish" data-action="expand" data-key="books">${state.expanded.books ? t("less") : t("more")}</button>`
      : "";
    return `<h2 class="section-h">${t("books")}</h2>${cards}${more}`;
  }

  function instantBlock() {
    const ins = state.instant;
    if (!ins) return "";
    if (ins.type === "weather" && ins.daily) {
      const days = ins.daily.map((d) => `<div><strong>${esc(d.label)}</strong><div>${esc(d.hi)}° / ${esc(d.lo)}°</div><div>${esc(d.text)}</div></div>`).join("");
      return `<section class="instant"><div class="badge">${t("weather")}</div><div class="big">${esc(ins.place)} ${esc(ins.temp)}°</div><p>${esc(ins.text)} · ${t("feel")} ${esc(ins.feel)}° · ${t("wind")} ${esc(ins.wind)} · ${t("humidity")} ${esc(ins.hum)}%</p><div class="forecast">${days}</div></section>`;
    }
    return `<section class="instant"><div class="badge">${esc(ins.badge || "")}</div><div class="big">${esc(ins.title || "")}</div>${ins.text ? `<p>${esc(ins.text)}</p>` : ""}${ins.url ? `<a class="btn-ghost" ${aAttrs(ins.url)}>${icon("ext")}${esc(ins.linkLabel || t("open"))}</a>` : ""}</section>`;
  }

  function knowledgeHtml() {
    const k = state.knowledge;
    if (!k) return "";
    const img = safeUrl(k.image || "");
    return `<aside class="know">
      ${img ? `<img alt="" src="${esc(img)}">` : ""}
      <div class="badge">${t("knowledge")}</div>
      <h2>${esc(k.title)}</h2>
      ${k.description ? `<p><strong>${esc(k.description)}</strong></p>` : ""}
      <p>${esc(k.text || "")}</p>
      ${k.url ? `<a class="btn-ghost" ${aAttrs(k.url)}>${icon("ext")}${t("open")}</a>` : ""}
    </aside>`;
  }

  function bucket(name) { return state.buckets[name] || []; }

  function stageHtml() {
    const parsed = parseQuery(state.q);
    const loading = state.loading && state.arrived === 0;
    const filterNote = [parsed.site && "site:" + parsed.site, parsed.filetype && "filetype:" + parsed.filetype].filter(Boolean).join(" · ");
    let body = "";
    if (state.tab === "images") body = imageTiles(state.images, false);
    else if (state.tab === "maps") body = mapHtml();
    else if (state.tab === "news") body = section(t("news"), bucket("news").concat(bucket("gdelt"), bucket("hn")), "news", true);
    else if (state.tab === "video") body = section(t("video"), bucket("video"), "video", true) + embedHtml();
    else if (state.tab === "music") body = section(t("music"), bucket("music"), "music", true);
    else if (state.tab === "books") body = booksHtml(bucket("books")) + section(t("science"), bucket("science"), "science", false);
    else {
      const kinds = [
        ["web", t("web"), bucket("wiki").concat(bucket("links"), bucket("ddg"), bucket("hnweb"))],
        ["news", t("news"), bucket("news").concat(bucket("gdelt"), bucket("hn"))],
        ["code", t("code"), bucket("code")],
        ["science", t("science"), bucket("science")],
        ["archive", t("archive"), bucket("archive")],
      ];
      if (state.sourceFilter !== "all") {
        body = section(t("resultsFor"), kinds.filter(([k]) => k === state.sourceFilter).flatMap(([, , items]) => items), "flt", true);
      } else {
        body = imageTiles(state.images, true) + booksHtml(bucket("books")) + kinds.map(([k, label, items]) => section(label, items, k, false)).join("") + section(t("video"), bucket("video").slice(0, 3), "video", false) + section(t("music"), bucket("music").slice(0, 3), "music", false);
      }
    }
    if (!body && loading) body = `<div class="skel"></div><div class="skel"></div><div class="skel"></div><p class="hint">${t("loading")}</p>`;
    else if (!body && !state.loading) body = `<div class="notice">${t("nothing")}</div>`;
    const official = state.official && state.official.url && state.tab === "all" ? `<section class="card" style="margin-bottom:12px"><div class="badge">${t("official")}</div><h3 style="margin:8px 0"><a ${aAttrs(state.official.url)}>${esc(state.official.label || hostOf(state.official.url))}</a></h3><p class="snippet">${esc(state.official.description || "")}</p><a class="btn-primary" ${aAttrs(state.official.url)}>${icon("ext")}<span>${t("openSite")}</span></a></section>` : "";
    const direct = directCard();
    const suggest = state.suggestion ? `<p class="hint">${t("didyou")}: <button type="button" class="linkish" data-action="suggest" data-q="${esc(state.suggestion)}"><strong>${esc(state.suggestion)}</strong></button></p>` : "";
    const related = state.related.length && state.tab === "all" ? `<div class="chips" style="margin:8px 0">${state.related.slice(0, 8).map((r) => `<button type="button" class="chip" data-action="suggest" data-q="${esc(r)}">${esc(r)}</button>`).join("")}</div>` : "";
    const warn = state.failed && !state.loading ? `<div class="notice">${t("partial")}</div>` : "";
    const chips = state.tab === "all" ? `<div class="chips">${["all", "web", "news", "code", "science", "archive"].map((k) => `<button type="button" class="chip${state.sourceFilter === k ? " is-on" : ""}" data-action="filter" data-filter="${k}">${esc(k === "all" ? t("filterAll") : t(k === "web" ? "web" : k))}</button>`).join("")}</div>` : "";
    const side = state.tab === "all" || state.tab === "news" || state.tab === "books" ? knowledgeHtml() : "";
    const main = `${direct}${instantBlock()}${suggest}${warn}${filterNote ? `<p class="hint">${esc(filterNote)}</p>` : ""}${chips}${related}`;
    if (!side) return `${main}<div>${official}${body}</div>`;
    return `${main}<div class="layout"><div>${official}${body}</div>${side}</div>`;
  }

  function directCard() {
    const url = asUrl(state.q);
    if (!url || state.tab !== "all") return "";
    return `<section class="instant"><div class="badge">${t("direct")}</div><div class="big">${esc(hostOf(url))}</div><p>${esc(url)}</p><div class="actions"><a class="btn-primary" ${aAttrs(url)}>${icon("ext")}<span>${t("openSite")}</span></a><a class="btn-ghost" ${aAttrs("https://web.archive.org/web/*/" + url)}>${t("wayback")}</a></div></section>`;
  }

  function embedHtml() {
    const vid = (bucket("video") || []).find((v) => v.embed);
    if (!vid) return "";
    const src = safeUrl(vid.embed);
    if (!src) return "";
    return `<h2 class="section-h">${esc(vid.title)}</h2><iframe title="${esc(vid.title)}" src="${esc(src)}" style="width:100%;aspect-ratio:16/9;border:0;border-radius:16px;background:#000" allowfullscreen loading="lazy"></iframe>`;
  }

  function mapHtml() {
    return `<div class="map-tools">
      <input id="route-a" value="${esc(state.routeA)}" placeholder="${esc(t("from"))}" aria-label="${esc(t("from"))}">
      <input id="route-b" value="${esc(state.routeB)}" placeholder="${esc(t("to"))}" aria-label="${esc(t("to"))}">
      <button type="button" class="btn-primary" data-action="route">${t("route")}</button>
      <button type="button" class="btn-ghost" data-action="geo">${t("near")}</button>
      <button type="button" class="btn-ghost" data-action="area">${t("area")}</button>
      <button type="button" class="btn-ghost" data-action="basemap" data-base="osm">${t("schema")}</button>
      <button type="button" class="btn-ghost" data-action="basemap" data-base="sat">${t("sat")}</button>
    </div>
    ${state.routeInfo ? `<p class="hint">${t("routeReady")}: ${esc(state.routeInfo)}</p>` : ""}
    <div id="map" role="region" aria-label="${esc(t("maps"))}"></div>
    <h2 class="section-h">${t("places")}</h2>
    <ul class="places" id="places">${placesHtml()}</ul>`;
  }
  function placesHtml() {
    if (!state.places.length) return `<li class="hint">${t("noPlaces")}</li>`;
    return state.places.map((p, i) => `<li><button type="button" data-action="fly" data-i="${i}"><strong>${esc(p.title)}</strong><div class="snippet">${esc(p.snippet || "")}</div></button></li>`).join("");
  }

  function tabsHtml() {
    const labels = { all: ["globe", "all"], images: ["image", "images"], news: ["news", "news"], maps: ["map", "maps"], video: ["video", "video"], music: ["music", "music"], books: ["book", "books"] };
    return `<div class="tabs" role="tablist">${TABS.map((id) => {
      const [ic, key] = labels[id];
      return `<button type="button" class="tab${state.tab === id ? " is-on" : ""}" role="tab" aria-selected="${state.tab === id}" data-action="tab" data-tab="${id}">${icon(ic)}${t(key)}</button>`;
    }).join("")}</div><div class="station-line" aria-hidden="true">${TABS.map((id) => `<i class="${state.tab === id ? "on" : ""}"></i>`).join("")}</div>`;
  }

  function searchForm() {
    return `<form id="search-form" class="search-wrap" role="search" autocomplete="off">
      <div class="search">
        ${icon("search")}
        <input id="q" name="q" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="suggest" aria-label="${esc(t("placeholder"))}" placeholder="${esc(t("placeholder"))}" value="${esc(state.q)}" enterkeyhint="search">
        ${state.q ? `<button type="button" class="icon-btn" data-action="clear" aria-label="${esc(t("clear"))}">${icon("close")}</button>` : ""}
        <button type="button" class="icon-btn" data-action="voice" aria-label="${esc(t("voice"))}">${icon("mic")}</button>
        <button class="btn-primary" type="submit">${icon("search")}<span class="long">${t("find")}</span></button>
      </div>
      <div id="suggest" class="suggest" role="listbox" hidden></div>
    </form>`;
  }

  function headerHtml() {
    return `<header class="top">
      <button type="button" class="brand" data-action="home">${logo()}<span class="brand-name">Metro<span>Search</span></span></button>
      <div class="clock" id="clock"></div>
      <nav class="top-links">
        <button type="button" data-action="overlay" data-overlay="default"><span class="label">${t("def")}</span></button>
        <button type="button" data-action="overlay" data-overlay="saved">${icon("save")}<span class="label">${t("saved")}</span></button>
        <button type="button" class="icon-btn" data-action="theme" aria-label="${esc(t("theme"))}">${icon(resolvedTheme() === "light" ? "sun" : "moon")}</button>
        <button type="button" class="icon-btn" data-action="overlay" data-overlay="settings" aria-label="${esc(t("settings"))}">${icon("gear")}</button>
      </nav>
    </header>`;
  }
  function logo() {
    return `<img alt="" width="36" height="36" src="${esc(iconSrc())}">`;
  }
  function iconSrc() {
    const path = location.pathname;
    if (path.endsWith("/index.html") || path.endsWith("/metro/") || path.includes("/metro/")) return "./favicon.svg";
    if (document.querySelector('script[src*="metro/app.js"], script[src$="/metro/app.js"]')) return "/metro/favicon.svg";
    return "./favicon.svg";
  }

  function footerHtml() {
    return `<footer class="foot"><div class="foot-row"><span>${t("footer")}</span><span>
      <button type="button" data-action="overlay" data-overlay="about">${t("about")}</button>
      <button type="button" data-action="overlay" data-overlay="privacy">${t("privacy")}</button>
      <button type="button" data-action="overlay" data-overlay="default">${t("def")}</button>
    </span></div></footer>`;
  }

  function pageHtml() {
    const progress = `<div id="progress" class="progress" ${state.loading ? "" : "hidden"}></div>`;
    if (state.view === "home") {
      return `${progress}<div class="route-bar"></div><div class="page">${headerHtml()}
        <section class="hero">
          <p class="kicker">${t("kicker")}</p>
          <h1>Metro<span style="color:var(--amber-text)">Search</span></h1>
          <p class="lede">${esc(inFrame() || !state.prefs.newWindow ? t("ledeInline") : t("lede"))}</p>
          ${searchForm()}
          ${tabsHtml()}
          <p class="hint">${t("operators")}</p>
          <div class="actions"><button type="button" class="btn-ghost" data-action="lucky">${t("lucky")}</button></div>
        </section>
        ${boardHtml()}
        ${footerHtml()}
        <div id="overlay" hidden></div><div id="toast" hidden></div>
      </div>`;
    }
    const count = countVisible();
    return `${progress}<div class="route-bar"></div><div class="page">${headerHtml()}
      <div class="results">
        ${searchForm()}
        ${tabsHtml()}
        <div class="meta-row"><span id="meta">${state.q ? `${t("resultsFor")}: <strong>${esc(state.q)}</strong> · ${count}` : ""}</span>
          <button type="button" class="linkish" data-action="share">${icon("copy")}${t("share")}</button>
        </div>
        <div id="stage">${stageHtml()}</div>
      </div>
      ${footerHtml()}
      <div id="overlay" hidden></div><div id="toast" hidden></div>
    </div>`;
  }

  function countVisible() {
    const n = ["wiki", "links", "ddg", "hn", "hnweb", "news", "gdelt", "code", "books", "science", "archive", "video", "music"].reduce((s, k) => s + bucket(k).length, 0) + state.images.length + state.places.length;
    return `${n} · ${state.arrived} ${t("sources")}`;
  }

  function boardHtml() {
    const examples = EXAMPLES[langCode()] || EXAMPLES.ru;
    const rows = state.history.length
      ? state.history.map((h) => `<button type="button" class="board-row" data-action="go" data-q="${esc(h.q)}" data-tab="${esc(h.tab || "all")}"><span class="board-time">${esc(fmtTime(h.ts))}</span><span>${esc(h.q)}</span><span class="go">${icon("arrow")}</span></button>`).join("")
      : `<p class="hint">${t("emptyHist")}</p>` + examples.map(([q, tab]) => `<button type="button" class="board-row" data-action="go" data-q="${esc(q)}" data-tab="${tab}"><span class="board-time">${t("examples")}</span><span>${esc(q)}</span><span class="go">${icon("arrow")}</span></button>`).join("");
    return `<section class="board"><h2>${state.history.length ? t("recent") : t("board")}</h2>${rows}</section>`;
  }
  function fmtTime(ts) {
    try {
      return new Intl.DateTimeFormat(langCode() === "en" ? "en-GB" : "ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date(ts));
    } catch { return ""; }
  }

  function renderAll() {
    if (state._map) { try { state._map.remove(); } catch { /* ignore */ } state._map = null; }
    const ov = state.overlay;
    root.innerHTML = pageHtml();
    root.classList.add("ms");
    applyTheme();
    tickClock();
    if (state.tab === "maps" && state.view === "results") initMap();
    if (ov) openOverlay(ov);
    paintSuggest();
  }
  function updateStage() {
    const stage = root.querySelector("#stage");
    if (!stage || state.view !== "results") { renderAll(); return; }
    const prog = root.querySelector("#progress");
    if (prog) prog.hidden = !state.loading;
    const meta = root.querySelector("#meta");
    if (meta) meta.innerHTML = `${t("resultsFor")}: <strong>${esc(state.q)}</strong> · ${countVisible()}`;
    syncTabs();
    if (state.tab === "maps" && state._map && stage.querySelector("#map")) {
      const list = stage.querySelector("#places");
      if (list) list.innerHTML = placesHtml();
      const info = stage.querySelector(".map-tools");
      if (info && state.routeInfo) {
        let note = stage.querySelector("[data-route-note]");
        if (!note) {
          note = document.createElement("p");
          note.dataset.routeNote = "1";
          note.className = "hint";
          info.after(note);
        }
        note.textContent = `${t("routeReady")}: ${state.routeInfo}`;
      }
      syncMarkers();
      return;
    }
    if (state._map) { try { state._map.remove(); } catch { /* ignore */ } state._map = null; }
    stage.innerHTML = stageHtml();
    if (state.tab === "maps") initMap();
  }
  function syncTabs() {
    root.querySelectorAll(".tab").forEach((btn) => {
      const on = btn.dataset.tab === state.tab;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    root.querySelectorAll(".station-line i").forEach((el, i) => el.classList.toggle("on", TABS[i] === state.tab));
  }

  function resultsUrl() {
    const u = new URL(location.href);
    u.searchParams.set("q", state.q);
    if (state.tab && state.tab !== "all") u.searchParams.set("tab", state.tab);
    else u.searchParams.delete("tab");
    u.searchParams.delete("p");
    u.hash = "";
    return u.toString();
  }
  function syncUrl(mode) {
    const u = new URL(location.href);
    if (state.q) u.searchParams.set("q", state.q); else u.searchParams.delete("q");
    if (state.tab && state.tab !== "all") u.searchParams.set("tab", state.tab); else u.searchParams.delete("tab");
    if (state.page > 1) u.searchParams.set("p", String(state.page)); else u.searchParams.delete("p");
    u.hash = "";
    if (mode === "push") history.pushState({ q: state.q }, "", u);
    else history.replaceState({ q: state.q }, "", u);
  }

  function pushHistory(q) {
    state.history = [{ q, tab: state.tab, ts: Date.now() }, ...state.history.filter((h) => h.q !== q)].slice(0, 16);
    saveHistory();
  }

  function commitSearch(raw, opts) {
    const options = opts || {};
    const q = String(raw ?? state.q).trim();
    if (!q) return;
    state.q = q;
    state.page = 1;
    state.suggestIndex = -1;
    state.suggestions = [];
    if (options.tab) state.tab = options.tab;
    pushHistory(q);
    const openNew = state.prefs.newWindow && !options.silent && !options.fromLoad && !inFrame();
    if (openNew) {
      const popup = window.open(resultsUrl(), "_blank", "noopener,noreferrer");
      if (popup) {
        toast(t("opened"));
        return;
      }
      toast(t("popup"));
    }
    state.view = "results";
    syncUrl("push");
    renderAll();
    runSearch();
  }

  function resetBuckets() {
    state.buckets = {};
    state.images = [];
    state.places = [];
    state.knowledge = null;
    state.official = null;
    state.instant = null;
    state.suggestion = "";
    state.related = [];
    state.routeInfo = null;
    state.routeLine = null;
    state.arrived = 0;
    state.failed = 0;
    state.expanded = {};
    state.lightbox = null;
  }

  async function runSearch() {
    const token = ++state.token;
    const parsed = parseQuery(state.q);
    const q = parsed.text;
    resetBuckets();
    state.loading = true;
    updateStage();
    const jobs = [
      () => jobWiki(q),
      () => jobSummaryAndLinks(q),
      () => jobWikidata(q),
      () => jobDDG(q),
      () => jobNews(q),
      () => jobGdelt(q),
      () => jobHN(q),
      () => jobCode(q),
      () => jobBooks(q),
      () => jobScience(q),
      () => jobArchive(q, "web"),
      () => jobVideo(q),
      () => jobMusic(q),
      () => jobImages(q),
      () => jobPlaces(q),
      () => jobInstant(state.q),
    ];
    await Promise.all(jobs.map(async (fn) => {
      try { await fn(); if (token !== state.token) return; state.arrived += 1; }
      catch { if (token !== state.token) return; state.failed += 1; }
      if (token === state.token) updateStage();
    }));
    if (token !== state.token) return;
    state.loading = false;
    updateStage();
  }

  function put(name, items) { state.buckets[name] = items || []; }

  async function jobWiki(q) {
    const data = await fetchJSON(`${wikiHost()}/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srlimit=10&utf8=1&format=json&origin=*`);
    state.suggestion = data?.query?.searchinfo?.suggestion || "";
    put("wiki", (data?.query?.search || []).map((s) => ({
      title: s.title,
      url: `${wikiHost()}/wiki/${encodeURIComponent(String(s.title).replace(/ /g, "_"))}`,
      snippet: strip(s.snippet),
      badge: langCode() === "en" ? "Wikipedia" : "Википедия",
      kind: "web",
    })));
  }
  async function jobSummaryAndLinks(q) {
    const data = await fetchJSON(`${wikiHost()}/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srlimit=1&utf8=1&format=json&origin=*`);
    const title = data?.query?.search?.[0]?.title;
    if (!title) return;
    const [summary, links] = await Promise.all([
      fetchJSON(`${wikiHost()}/api/rest_v1/page/summary/${encodeURIComponent(title)}`).catch(() => null),
      fetchJSON(`${wikiHost()}/w/api.php?action=query&prop=extlinks&titles=${encodeURIComponent(title)}&ellimit=8&format=json&origin=*`).catch(() => null),
    ]);
    if (summary && summary.extract) {
      state.knowledge = {
        title: summary.title || title,
        description: summary.description || "",
        text: summary.extract,
        url: summary.content_urls?.desktop?.page || "",
        image: summary.thumbnail?.source || "",
      };
    }
    const pages = Object.values(links?.query?.pages || {});
    const ext = (pages[0] && (pages[0].extlinks || [])) || [];
    put("links", ext.map((l) => l.url || l["*"]).filter(Boolean).slice(0, 8).map((url) => ({
      title: hostOf(url),
      url,
      snippet: (langCode() === "en" ? "Site linked from “" : "Сайт из статьи «") + title + (langCode() === "en" ? "”" : "»"),
      badge: langCode() === "en" ? "From article" : "Из статьи",
      kind: "web",
    })));
  }
  async function jobWikidata(q) {
    const found = await fetchJSON(`https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(q)}&language=${langCode()}&format=json&origin=*&limit=1`);
    const hit = found?.search?.[0];
    if (!hit) return;
    const ent = await fetchJSON(`https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${encodeURIComponent(hit.id)}&props=claims&format=json&origin=*`);
    const claims = ent?.entities?.[hit.id]?.claims?.P856;
    const url = claims?.[0]?.mainsnak?.datavalue?.value;
    if (typeof url === "string") {
      state.official = { label: hit.label || hit.id, description: hit.description || "", url };
    }
    const alias = (hit.label || "").trim();
    if (alias && alias.toLowerCase() !== q.toLowerCase()) state.related = [...new Set([alias, ...state.related])].slice(0, 8);
  }
  async function jobDDG(q) {
    const data = await fetchJSON(`https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&no_html=1&skip_disambig=1`);
    const topics = [];
    const walk = (arr) => (arr || []).forEach((item) => { if (item.Topics) walk(item.Topics); else if (item.Text) topics.push(item); });
    walk(data.RelatedTopics);
    const related = topics.map((item) => String(item.Text).split(" - ")[0]).filter(Boolean).slice(0, 8);
    state.related = [...new Set([...state.related, ...related])].slice(0, 8);
    const web = topics.map((item) => ({ title: String(item.Text).split(" - ")[0], url: item.FirstURL, snippet: item.Text, badge: "DuckDuckGo", kind: "web" }))
      .filter((item) => item.url && !/duckduckgo\.com/i.test(item.url));
    put("ddg", web.slice(0, 6));
    if (!state.knowledge && data.AbstractText) {
      state.knowledge = { title: data.Heading || q, description: data.AbstractSource || "", text: data.AbstractText, url: data.AbstractURL || "", image: data.Image ? "https://duckduckgo.com" + data.Image : "" };
    }
  }
  async function jobNews(q) {
    const data = await fetchJSON(`${newsHost()}/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srlimit=8&utf8=1&format=json&origin=*`);
    put("news", (data?.query?.search || []).map((s) => ({
      title: s.title,
      url: `${newsHost()}/wiki/${encodeURIComponent(String(s.title).replace(/ /g, "_"))}`,
      snippet: strip(s.snippet),
      badge: langCode() === "en" ? "Wikinews" : "Викиновости",
      kind: "news",
    })));
  }
  async function jobGdelt(q) {
    const data = await fetchJSON(`https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(q)}&mode=artlist&maxrecords=10&format=json&sort=datedesc`, 8000);
    const arts = data?.articles || [];
    put("gdelt", arts.map((a) => ({
      title: a.title,
      url: a.url,
      snippet: [a.domain, a.sourcecountry, a.language].filter(Boolean).join(" · "),
      badge: a.domain || "GDELT",
      kind: "news",
    })));
  }
  async function jobHN(q) {
    const data = await fetchJSON(`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(q)}&tags=story&hitsPerPage=8`);
    const stories = data?.hits || [];
    put("hn", stories.filter((h) => h.url).map((h) => ({
      title: h.title || h.url,
      url: h.url,
      snippet: `${h.points || 0} · ${h.author || ""} · ${String(h.created_at || "").slice(0, 10)}`,
      badge: "Hacker News",
      kind: "news",
    })));
    put("hnweb", stories.filter((h) => h.url).slice(0, 4).map((h) => ({
      title: h.title || h.url,
      url: h.url,
      snippet: h.story_text ? strip(h.story_text).slice(0, 220) : hostOf(h.url),
      badge: "Web",
      kind: "web",
    })));
  }
  async function jobCode(q) {
    const data = await fetchJSON(`https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&per_page=5&sort=stars`);
    put("code", (data?.items || []).map((r) => ({
      title: r.full_name,
      url: r.html_url,
      snippet: r.description || "",
      badge: `GitHub · ★ ${r.stargazers_count}`,
      kind: "code",
    })));
  }
  async function jobBooks(q) {
    const data = await fetchJSON(`https://openlibrary.org/search.json?q=${encodeURIComponent(q)}&limit=8`);
    put("books", (data?.docs || []).map((d) => ({
      title: d.title,
      url: d.key ? `https://openlibrary.org${d.key}` : "https://openlibrary.org",
      snippet: (d.author_name || []).slice(0, 3).join(", "),
      cover: d.cover_i ? `https://covers.openlibrary.org/b/id/${d.cover_i}-M.jpg` : "",
      meta: [d.first_publish_year, d.language && d.language[0]].filter(Boolean).join(" · "),
      badge: "Open Library",
      kind: "book",
    })));
  }
  async function jobScience(q) {
    const data = await fetchJSON(`https://api.crossref.org/works?query=${encodeURIComponent(q)}&rows=5&mailto=metrosearch@users.noreply.github.com`);
    put("science", (data?.message?.items || []).map((it) => ({
      title: strip((it.title && it.title[0]) || "DOI"),
      url: it.URL,
      snippet: `${(it.author || []).slice(0, 3).map((a) => a.family).filter(Boolean).join(", ")} ${((it.issued && it.issued["date-parts"] && it.issued["date-parts"][0]) || []).join("-")}`.trim(),
      badge: (it["container-title"] && it["container-title"][0]) || "Crossref",
      kind: "science",
    })));
  }
  async function jobArchive(q) {
    const data = await fetchJSON(`https://archive.org/advancedsearch.php?q=${encodeURIComponent(q)}&fl[]=identifier&fl[]=title&fl[]=description&fl[]=originalurl&output=json&rows=6`);
    put("archive", (data?.response?.docs || []).map((d) => {
      const desc = Array.isArray(d.description) ? d.description[0] : d.description;
      const url = safeUrl(d.originalurl) || `https://archive.org/details/${d.identifier}`;
      return { title: d.title || d.identifier, url, snippet: strip(desc || "").slice(0, 240), badge: "Internet Archive", kind: "archive" };
    }));
  }
  async function jobVideo(q) {
    const [arch, tunes] = await Promise.all([
      fetchJSON(`https://archive.org/advancedsearch.php?q=${encodeURIComponent(q + " AND mediatype:(movies OR video)")}&fl[]=identifier&fl[]=title&fl[]=description&output=json&rows=6`).catch(() => null),
      fetchJSON(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=musicVideo&limit=6`).catch(() => null),
    ]);
    const videos = [];
    (arch?.response?.docs || []).forEach((d) => {
      videos.push({
        title: d.title || d.identifier,
        url: `https://archive.org/details/${d.identifier}`,
        embed: videos.length === 0 ? `https://archive.org/embed/${d.identifier}` : "",
        snippet: strip(Array.isArray(d.description) ? d.description[0] : d.description || "").slice(0, 180),
        badge: "Archive",
        kind: "video",
      });
    });
    (tunes?.results || []).forEach((r) => videos.push({
      title: `${r.trackName || ""} — ${r.artistName || ""}`,
      url: r.trackViewUrl,
      snippet: r.primaryGenreName || "",
      badge: "Apple",
      audio: r.previewUrl || "",
      kind: "video",
    }));
    put("video", videos);
  }
  async function jobMusic(q) {
    const [songs, pods, shows] = await Promise.all([
      fetchJSON(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=song&limit=6`).catch(() => null),
      fetchJSON(`https://itunes.apple.com/search?term=${encodeURIComponent(q)}&entity=podcast&limit=4`).catch(() => null),
      fetchJSON(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(q)}`).catch(() => null),
    ]);
    const items = [];
    (songs?.results || []).forEach((r) => items.push({
      title: `${r.trackName} — ${r.artistName}`,
      url: r.trackViewUrl,
      snippet: r.collectionName || "",
      badge: "Music",
      audio: r.previewUrl || "",
      kind: "music",
    }));
    (pods?.results || []).forEach((r) => items.push({
      title: r.collectionName || r.trackName,
      url: r.collectionViewUrl || r.trackViewUrl,
      snippet: strip(r.artistName || ""),
      badge: "Podcast",
      kind: "music",
    }));
    (shows || []).slice(0, 4).forEach((row) => {
      const s = row.show || {};
      items.push({ title: s.name, url: s.url, snippet: strip(s.summary || "").slice(0, 200), badge: (s.genres || []).slice(0, 2).join(", ") || "TV", kind: "music" });
    });
    put("music", items);
  }
  async function jobImages(q) {
    const [verse, commons, nasa] = await Promise.all([
      fetchJSON(`https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&page_size=20&mature=false`, 12000).catch(() => null),
      fetchJSON(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(q)}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=800&format=json&origin=*`).catch(() => null),
      fetchJSON(`https://images-api.nasa.gov/search?q=${encodeURIComponent(q)}&media_type=image`).catch(() => null),
    ]);
    const images = [];
    (verse?.results || []).forEach((r) => images.push({
      title: r.title || r.creator || "Openverse",
      url: r.foreign_landing_url || r.url,
      thumb: r.thumbnail || r.url,
      full: r.url,
      snippet: `${r.creator || ""} ${r.license || ""}`.trim(),
      license: r.license,
      badge: r.source || "Openverse",
      kind: "image",
    }));
    Object.values(commons?.query?.pages || {}).forEach((p) => {
      const info = (p.imageinfo || [])[0];
      if (!info || (info.mime && !String(info.mime).startsWith("image/"))) return;
      images.push({
        title: String(p.title || "").replace(/^File:/, ""),
        url: `https://commons.wikimedia.org/wiki/${encodeURIComponent(String(p.title || "").replace(/ /g, "_"))}`,
        thumb: info.thumburl || info.url,
        full: info.url,
        snippet: "Wikimedia Commons",
        badge: "Commons",
        kind: "image",
      });
    });
    ((nasa?.collection?.items) || []).slice(0, 8).forEach((item) => {
      const meta = (item.data || [])[0] || {};
      const href = (item.links || []).find((l) => l.render === "image")?.href;
      if (!href) return;
      images.push({
        title: meta.title || "NASA",
        url: meta.nasa_id ? `https://images.nasa.gov/details/${meta.nasa_id}` : href,
        thumb: href,
        full: href,
        snippet: strip(meta.description || "").slice(0, 180),
        badge: "NASA",
        kind: "image",
      });
    });
    state.images = images;
  }
  async function jobPlaces(q) {
    const lang = langCode();
    const data = await fetchJSON(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=8&addressdetails=1&accept-language=${lang}`);
    state.places = (data || []).map((p) => ({
      title: p.display_name,
      snippet: [p.type, p.addresstype].filter(Boolean).join(" · "),
      lat: Number(p.lat),
      lon: Number(p.lon),
      url: `https://www.openstreetmap.org/${p.osm_type}/${p.osm_id}`,
    }));
    if (state.tab !== "maps") {
      put("places-web", state.places.slice(0, 3).map((p) => ({
        title: p.title.split(",")[0],
        url: p.url,
        snippet: p.title,
        badge: "OpenStreetMap",
        kind: "web",
      })));
      state.buckets.links = (state.buckets.links || []).concat(state.buckets["places-web"] || []);
    }
  }

  function asUrl(q) {
    const s = String(q || "").trim();
    if (/^https?:\/\//i.test(s)) { try { return new URL(s).href; } catch { return ""; } }
    if (/^(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/\S*)?$/i.test(s)) return "https://" + s;
    return "";
  }

  async function jobInstant(raw) {
    const q = raw.trim();
    const url = asUrl(q);
    if (url && state.tab === "all") {
      state.instant = null;
      return;
    }
    const math = tryMath(q);
    if (math != null) { state.instant = { badge: t("calc"), title: formatNum(math), text: q }; return; }
    const unit = tryUnit(q);
    if (unit) { state.instant = { badge: t("convert"), title: unit, text: q }; return; }
    const money = parseMoney(q);
    if (money) {
      const data = await fetchJSON(`https://open.er-api.com/v6/latest/${money.from}`);
      const rate = data?.rates?.[money.to];
      if (!rate) throw new Error("fx");
      state.instant = { badge: t("currency"), title: `${formatNum(money.amount * rate)} ${money.to}`, text: `1 ${money.from} = ${formatNum(rate)} ${money.to}` };
      return;
    }
    const weather = parseWeather(q);
    if (weather != null) { state.instant = await loadWeather(weather); return; }
    const tr = parseTranslate(q);
    if (tr) {
      const data = await fetchJSON(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(tr.text)}&langpair=${encodeURIComponent(tr.from + "|" + tr.to)}`);
      const text = data?.responseData?.translatedText;
      if (!text) throw new Error("tr");
      state.instant = { badge: t("translate"), title: text, text: `${tr.from} → ${tr.to}` };
      return;
    }
    const def = parseDefine(q);
    if (def) {
      if (/[а-яё]/i.test(def) || state.prefs.lang === "ru" && !/^[a-z\s-]+$/i.test(def)) {
        const sum = await fetchJSON(`${wikiHost()}/api/rest_v1/page/summary/${encodeURIComponent(def)}`);
        state.instant = { badge: t("define"), title: sum.title || def, text: sum.extract || sum.description || "", url: sum.content_urls?.desktop?.page, linkLabel: t("open") };
        return;
      }
      const data = await fetchJSON(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(def)}`);
      const entry = data?.[0];
      const meaning = entry?.meanings?.[0];
      state.instant = { badge: t("define"), title: entry?.word || def, text: `${meaning?.partOfSpeech || ""} — ${meaning?.definitions?.[0]?.definition || ""}`.trim(), url: entry?.phonetics?.find((p) => p.audio)?.audio || "", linkLabel: "MP3" };
      return;
    }
    const timeQ = parseTime(q);
    if (timeQ) {
      const geo = await fetchJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(timeQ)}&count=1&language=${langCode()}`);
      const place = geo?.results?.[0];
      if (!place) throw new Error("time");
      const when = new Intl.DateTimeFormat(langCode() === "en" ? "en-GB" : "ru-RU", { timeZone: place.timezone, hour: "2-digit", minute: "2-digit", weekday: "long", day: "numeric", month: "long" }).format(new Date());
      state.instant = { badge: t("time"), title: when, text: `${place.name}, ${place.country || ""} · ${place.timezone}` };
      return;
    }
    if (/^(?:мой\s+ip|my\s+ip|ip)$/i.test(q)) {
      const data = await fetchJSON("https://api.ipify.org?format=json");
      state.instant = { badge: t("ip"), title: data.ip || "", text: "" };
    }
  }

  function formatNum(n) {
    if (!Number.isFinite(n)) return "";
    const abs = Math.abs(n);
    const digits = abs >= 100 ? 2 : abs >= 1 ? 4 : 6;
    return String(Math.round(n * 10 ** digits) / 10 ** digits);
  }
  function tryMath(q) {
    let s = q.trim().replace(/^=/, "").replace(/,/g, ".").replace(/\s+/g, "");
    if (!s || !/\d/.test(s)) return null;
    if (/^\d+(\.\d+)?$/.test(s)) return null;
    if (!/^[\d.+\-*/%^()a-zπ]+$/i.test(s)) return null;
    if (!/[+\-*/%^()]/.test(s) && !/(sqrt|sin|cos|tan|abs|log|ln|pi)/i.test(s)) return null;
    try {
      const n = evaluate(s);
      return Number.isFinite(n) ? n : null;
    } catch { return null; }
  }
  function evaluate(expr) {
    const s = expr.replace(/π/g, "pi").toLowerCase();
    let i = 0;
    const peek = () => s[i];
    function parseExpr() {
      let n = parseTerm();
      while (peek() === "+" || peek() === "-") { const op = s[i++]; const r = parseTerm(); n = op === "+" ? n + r : n - r; }
      return n;
    }
    function parseTerm() {
      let n = parsePow();
      while (peek() === "*" || peek() === "/" || peek() === "%") {
        const op = s[i++]; const r = parsePow();
        if (op === "*") n *= r; else if (op === "/") n /= r; else n %= r;
      }
      return n;
    }
    function parsePow() { let n = parseUnary(); if (peek() === "^") { i += 1; n **= parsePow(); } return n; }
    function parseUnary() {
      if (peek() === "-") { i += 1; return -parseUnary(); }
      if (peek() === "+") { i += 1; return parseUnary(); }
      return parsePrimary();
    }
    function parsePrimary() {
      if (peek() === "(") { i += 1; const n = parseExpr(); if (s[i] !== ")") throw new Error(")"); i += 1; return n; }
      const fn = /^(sqrt|sin|cos|tan|abs|log|ln)/.exec(s.slice(i));
      if (fn) {
        i += fn[0].length;
        if (s[i] !== "(") throw new Error("fn");
        i += 1; const n = parseExpr(); if (s[i] !== ")") throw new Error(")"); i += 1;
        if (fn[0] === "sqrt") return Math.sqrt(n);
        if (fn[0] === "sin") return Math.sin(n);
        if (fn[0] === "cos") return Math.cos(n);
        if (fn[0] === "tan") return Math.tan(n);
        if (fn[0] === "abs") return Math.abs(n);
        if (fn[0] === "log") return Math.log10(n);
        return Math.log(n);
      }
      if (s.slice(i, i + 2) === "pi") { i += 2; return Math.PI; }
      if (s[i] === "e" && !/\d/.test(s[i + 1] || "")) { i += 1; return Math.E; }
      const m = /^\d+(\.\d+)?/.exec(s.slice(i));
      if (!m) throw new Error("num");
      i += m[0].length;
      return parseFloat(m[0]);
    }
    const n = parseExpr();
    if (i !== s.length) throw new Error("tail");
    return n;
  }
  function tryUnit(q) {
    const m = q.trim().toLowerCase().match(/^([\d.,]+)\s*([^\s]+)\s+(?:to|in|в|→)\s+([^\s]+)$/i);
    if (!m) return "";
    const amount = parseFloat(m[1].replace(",", "."));
    const a = UNITS[m[2].toLowerCase()];
    const b = UNITS[m[3].toLowerCase()];
    if (!a || !b || a[0] !== b[0] || !Number.isFinite(amount)) return "";
    if (a[0] === "temp") {
      const c = a[1] === "c" ? amount : (amount - 32) * 5 / 9;
      const out = b[1] === "c" ? c : c * 9 / 5 + 32;
      return `${formatNum(out)} ${m[3]}`;
    }
    return `${formatNum(amount * a[1] / b[1])} ${m[3]}`;
  }
  function codeOf(word) { return CUR[String(word || "").toLowerCase()] || ""; }
  function parseMoney(q) {
    const m = q.trim().match(/^([\d.,]+)\s*([A-Za-zА-Яа-яёЁ]+)\s+(?:to|in|в|к)\s+([A-Za-zА-Яа-яёЁ]+)$/);
    if (!m) return null;
    const from = codeOf(m[2]);
    const to = codeOf(m[3]);
    if (!from || !to || from === "BTC" || to === "BTC" || from === "ETH" || to === "ETH") return null;
    return { amount: parseFloat(m[1].replace(",", ".")), from, to };
  }
  function parseWeather(q) {
    const m = q.match(/^(?:погода|weather)\s*(.*)$/i);
    if (!m) return null;
    return m[1].trim();
  }
  function wmo(code) {
    const ru = state.prefs.lang !== "en";
    const map = {
      0: ru ? "ясно" : "clear", 1: ru ? "преимущественно ясно" : "mainly clear", 2: ru ? "переменная облачность" : "partly cloudy",
      3: ru ? "пасмурно" : "overcast", 45: ru ? "туман" : "fog", 48: ru ? "туман" : "fog",
      51: ru ? "морось" : "drizzle", 61: ru ? "дождь" : "rain", 63: ru ? "дождь" : "rain", 65: ru ? "сильный дождь" : "heavy rain",
      71: ru ? "снег" : "snow", 73: ru ? "снег" : "snow", 75: ru ? "сильный снег" : "heavy snow",
      80: ru ? "ливень" : "showers", 95: ru ? "гроза" : "thunderstorm",
    };
    return map[code] || map[Math.floor(code / 10) * 10] || (ru ? "облачно" : "cloudy");
  }
  async function loadWeather(placeQuery) {
    let place;
    if (!placeQuery) {
      const pos = await geoPosition();
      const rev = await fetchJSON(`https://nominatim.openstreetmap.org/reverse?lat=${pos.lat}&lon=${pos.lon}&format=json&accept-language=${langCode()}`);
      place = { name: rev.display_name?.split(",")[0] || "—", latitude: pos.lat, longitude: pos.lon, timezone: "auto" };
    } else {
      const geo = await fetchJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(placeQuery)}&count=1&language=${langCode()}`);
      place = geo?.results?.[0];
      if (!place) throw new Error("geo");
    }
    const wx = await fetchJSON(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=5`);
    const cur = wx.current || {};
    const daily = (wx.daily?.time || []).map((day, i) => ({
      label: day.slice(5),
      hi: Math.round(wx.daily.temperature_2m_max[i]),
      lo: Math.round(wx.daily.temperature_2m_min[i]),
      text: wmo(wx.daily.weather_code[i]),
    }));
    return {
      type: "weather",
      badge: t("weather"),
      place: place.name,
      temp: Math.round(cur.temperature_2m),
      feel: Math.round(cur.apparent_temperature),
      wind: `${Math.round(cur.wind_speed_10m)} км/ч`,
      hum: cur.relative_humidity_2m,
      text: wmo(cur.weather_code),
      daily,
    };
  }
  function parseTranslate(q) {
    const m = q.match(/^(?:переведи|перевод|translate)\s+(.+?)\s+(?:на|to|in)\s+([A-Za-zА-Яа-яёЁ-]+)$/i);
    if (!m) return null;
    const to = LANGS[m[2].toLowerCase()];
    if (!to) return null;
    const from = /[а-яё]/i.test(m[1]) ? "ru" : "en";
    return { text: m[1], from, to: to.split("-")[0] };
  }
  function parseDefine(q) {
    const m = q.match(/^(?:define|definition|что такое|what is|определение)\s+(.+)$/i);
    return m ? m[1].trim() : "";
  }
  function parseTime(q) {
    const m = q.match(/^(?:time|время)\s+(?:in|в)\s+(.+)$/i);
    return m ? m[1].trim() : "";
  }
  function geoPosition() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) reject(new Error("geo"));
      else navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => reject(new Error("geo")),
        { enableHighAccuracy: false, timeout: 8000 },
      );
    });
  }

  function loadLeaflet() {
    if (window.L) return Promise.resolve();
    if (state._leafletP) return state._leafletP;
    state._leafletP = new Promise((resolve, reject) => {
      if (!document.querySelector("link[data-leaflet]")) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.dataset.leaflet = "1";
        document.head.appendChild(link);
      }
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("leaflet"));
      document.body.appendChild(script);
    });
    return state._leafletP;
  }
  async function initMap() {
    try { await loadLeaflet(); } catch { return; }
    const el = root.querySelector("#map");
    if (!el || !window.L || state._map) return;
    const L = window.L;
    L.Icon.Default.mergeOptions({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    });
    const map = L.map(el);
    state._map = map;
    addBase(map);
    if (!state.places.length) map.setView([55.751244, 37.618423], 3);
    syncMarkers();
    setTimeout(() => map.invalidateSize(), 60);
  }
  function addBase(map) {
    const L = window.L;
    if (state._tiles) { map.removeLayer(state._tiles); }
    const sat = state.basemap === "sat";
    state._tiles = L.tileLayer(sat
      ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      : "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: sat ? "Tiles © Esri" : "&copy; OpenStreetMap",
    }).addTo(map);
  }
  function syncMarkers() {
    const L = window.L;
    const map = state._map;
    if (!L || !map) return;
    (state._markers || []).forEach((m) => map.removeLayer(m));
    state._markers = state.places.map((p) => L.marker([p.lat, p.lon]).addTo(map).bindPopup(`<strong>${esc(p.title.split(",")[0])}</strong><br>${esc(p.snippet || "")}`));
    if (state._routeLayer) { map.removeLayer(state._routeLayer); state._routeLayer = null; }
    if (state.routeLine) {
      state._routeLayer = L.geoJSON(state.routeLine, { style: { color: "#e2a122", weight: 5 } }).addTo(map);
      try { map.fitBounds(state._routeLayer.getBounds().pad(0.2)); } catch { /* ignore */ }
      return;
    }
    if (state._markers.length === 1) map.setView([state.places[0].lat, state.places[0].lon], 13);
    else if (state._markers.length > 1) {
      try { map.fitBounds(L.featureGroup(state._markers).getBounds().pad(0.3)); } catch { /* ignore */ }
    }
  }

  async function buildRoute() {
    const a = state.routeA.trim();
    const b = state.routeB.trim();
    if (!a || !b) return;
    try {
      const [ga, gb] = await Promise.all([
        fetchJSON(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(a)}&format=json&limit=1`),
        fetchJSON(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(b)}&format=json&limit=1`),
      ]);
      if (!ga?.[0] || !gb?.[0]) throw new Error("geo");
      const route = await fetchJSON(`https://router.project-osrm.org/route/v1/driving/${ga[0].lon},${ga[0].lat};${gb[0].lon},${gb[0].lat}?overview=full&geometries=geojson`);
      const leg = route?.routes?.[0];
      if (!leg) throw new Error("route");
      state.routeLine = leg.geometry;
      const km = (leg.distance / 1000).toFixed(1);
      const min = Math.round(leg.duration / 60);
      state.routeInfo = `${km} ${t("km")} · ${min} ${t("min")}`;
      state.places = [
        { title: a, snippet: t("from"), lat: Number(ga[0].lat), lon: Number(ga[0].lon), url: "https://www.openstreetmap.org" },
        { title: b, snippet: t("to"), lat: Number(gb[0].lat), lon: Number(gb[0].lon), url: "https://www.openstreetmap.org" },
      ];
      updateStage();
      toast(t("routeReady"));
    } catch { toast(t("routeFail")); }
  }

  function openOverlay(name) {
    state.overlay = name;
    const ov = root.querySelector("#overlay");
    if (!ov) return;
    ov.hidden = false;
    ov.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="${esc(t(name === "default" ? "defaultTitle" : name === "settings" ? "settingsTitle" : name === "about" ? "aboutTitle" : name === "privacy" ? "privacyTitle" : "saved"))}">
      <div class="row-between"><h2>${esc(overlayTitle(name))}</h2><button type="button" class="icon-btn" data-action="close-overlay" aria-label="${esc(t("close"))}">${icon("close")}</button></div>
      ${overlayBody(name)}
    </div>`;
    const close = ov.querySelector("[data-action=close-overlay]");
    if (close) close.focus();
  }
  function overlayTitle(name) {
    return { default: t("defaultTitle"), settings: t("settingsTitle"), about: t("aboutTitle"), privacy: t("privacyTitle"), saved: t("saved") }[name] || "";
  }
  function closeOverlay() {
    state.overlay = null;
    const ov = root.querySelector("#overlay");
    if (!ov) return;
    ov.hidden = true;
    ov.innerHTML = "";
  }
  function browserTemplate() {
    return PUBLISHED + "?q=%s";
  }
  function overlayBody(name) {
    if (name === "settings") {
      return `<div class="set-row"><span>${t("lang")}</span><select data-pref="lang"><option value="ru" ${state.prefs.lang === "ru" ? "selected" : ""}>Русский</option><option value="en" ${state.prefs.lang === "en" ? "selected" : ""}>English</option></select></div>
        <div class="set-row"><span>${t("themeLabel")}</span><select data-pref="theme"><option value="dark">${t("dark")}</option><option value="light" ${state.prefs.theme === "light" ? "selected" : ""}>${t("light")}</option><option value="system" ${state.prefs.theme === "system" ? "selected" : ""}>${t("system")}</option></select></div>
        <div class="set-row"><span>${t("safe")}</span><input data-pref="safe" type="checkbox" ${state.prefs.safe ? "checked" : ""}></div>
        <div class="set-row"><span>${t("newWindow")}</span><input data-pref="newWindow" type="checkbox" ${state.prefs.newWindow ? "checked" : ""}></div>
        <div class="set-row"><span>${t("newTab")}</span><input data-pref="newTab" type="checkbox" ${state.prefs.newTab ? "checked" : ""}></div>
        <div class="set-row"><span>${t("perPage")}</span><select data-pref="perPage">${[5, 8, 12, 16].map((n) => `<option ${Number(state.prefs.perPage) === n ? "selected" : ""}>${n}</option>`).join("")}</select></div>
        <div class="actions"><button type="button" class="btn-ghost" data-action="clear-history">${t("clearHist")}</button><button type="button" class="btn-ghost" data-action="clear-saved">${t("clearSaved")}</button></div>`;
    }
    if (name === "default") {
      const ru = state.prefs.lang !== "en";
      const url = browserTemplate();
      return `<p>${ru ? "Браузер будет открывать запросы в MetroSearch. Адрес со словом %s — шаблон, куда подставляется запрос." : "The browser will open queries in MetroSearch. %s is where the query is inserted."}</p>
        <div class="url-box"><code id="default-url">${esc(url)}</code><button type="button" class="btn-primary" data-action="copy-default">${t("copyUrl")}</button></div>
        <div class="steps">
          <div class="step"><strong>Chrome / Edge / Brave</strong><p>${ru ? "Настройки → Поиск → Управление поисковыми системами → Добавить. Имя: MetroSearch, ярлык: metro, URL — строка выше. Затем «Сделать по умолчанию»." : "Settings → Search engine → Manage → Add. Name MetroSearch, shortcut metro, URL above. Then Make default."}</p></div>
          <div class="step"><strong>${ru ? "Яндекс Браузер" : "Yandex Browser"}</strong><p>${ru ? "Настройки → Портал и поиск → Поисковая система → Управление поисковыми системами → Добавить. Вставьте тот же URL и выберите MetroSearch основным." : "Settings → Portal and search → Manage search engines → Add the URL, then choose MetroSearch."}</p></div>
          <div class="step"><strong>Firefox</strong><p>${ru ? "Откройте этот сайт, затем Настройки → Поиск. Если MetroSearch появился в списке (файл OpenSearch на сайте), сделайте его основным. Иначе добавьте закладку на главную и поставьте её стартовой страницей." : "Visit this site, then Settings → Search. If MetroSearch appears via OpenSearch, set it as default. Otherwise set the homepage to MetroSearch."}</p></div>
          <div class="step"><strong>Safari / iPhone</strong><p>${ru ? "Safari почти не даёт добавить свой поиск. Поставьте стартовую страницу: " : "Safari rarely allows a custom engine. Set the homepage to "}${esc(PUBLISHED)}${ru ? " На iPhone: Поделиться → На экран «Домой»." : " On iPhone: Share → Add to Home Screen."}</p></div>
          <div class="step"><strong>Android</strong><p>${ru ? "Chrome → Настройки → Поисковая система, либо добавьте ярлык на главный экран через меню браузера." : "Chrome → Settings → Search engine, or add a home-screen shortcut from the browser menu."}</p></div>
        </div>`;
    }
    if (name === "about") {
      const ru = state.prefs.lang !== "en";
      return `<p>${ru
        ? "MetroSearch — метапоиск. Он не перенаправляет запрос в Google. Кнопка «Найти» открывает окно MetroSearch с результатами, а ссылки ведут на сами сайты."
        : "MetroSearch is a metasearch. It does not send you to Google. Find opens a MetroSearch window, and links go to the sites themselves."}</p>
        <p>${ru ? "Источники: Википедия и Викиновости, Викиданные (официальные сайты), DuckDuckGo Instant, GDELT, Hacker News, GitHub, Open Library, Crossref, Internet Archive, Openverse, Wikimedia Commons, NASA, Apple/iTunes, TVMaze, OpenStreetMap, OSRM, Open-Meteo, Frankfurter-совместимые курсы open.er-api, словарь и перевод MyMemory." : "Sources: Wikipedia and Wikinews, Wikidata official sites, DuckDuckGo Instant, GDELT, Hacker News, GitHub, Open Library, Crossref, Internet Archive, Openverse, Wikimedia Commons, NASA, Apple/iTunes, TVMaze, OpenStreetMap, OSRM, Open-Meteo, open.er-api rates, dictionary and MyMemory."}</p>
        <p>${ru ? "Калькулятор, единицы, валюта, погода, перевод, словарь, время и IP считаются прямо в строке поиска. Операторы site:, filetype:, кавычки и минус-слова фильтруют уже найденное." : "Calculator, units, currency, weather, translation, dictionary, time, and IP run from the search box. site:, filetype:, quotes, and minus-words filter what was found."}</p>
        <p>${ru ? "Голосовой ввод использует распознавание речи браузера, если оно есть." : "Voice input uses the browser speech recognizer when available."}</p>`;
    }
    if (name === "privacy") {
      const ru = state.prefs.lang !== "en";
      return `<p>${ru
        ? "Аккаунта нет. История, сохранённые ссылки и настройки лежат в localStorage этого браузера. Их можно стереть в настройках. Мы не ставим свою аналитику."
        : "There is no account. History, saved links, and settings live in this browser's localStorage. Clear them in Settings. There is no first-party analytics."}</p>
        <p>${ru
          ? "Текст запроса уходит только в открытые API источников, которые нужны выбранному поиску: энциклопедии, карты, новости и остальные, перечисленные в разделе «О поиске». Это их серверы, не Google Search."
          : "Your query is sent only to the public APIs needed for that search — encyclopedia, maps, news, and the others listed in About. Those are their servers, not Google Search."}</p>`;
    }
    if (!state.saved.length) return `<p>${t("emptySaved")}</p>`;
    return state.saved.map((s) => `<article class="result"><h3><a ${aAttrs(s.url)}>${esc(s.title)}</a></h3><div class="host">${esc(hostOf(s.url))}</div><div class="result-actions"><button type="button" class="linkish" data-action="remove-save" data-url="${esc(s.url)}">${t("remove")}</button></div></article>`).join("");
  }

  function paintSuggest() {
    const box = root.querySelector("#suggest");
    const input = root.querySelector("#q");
    if (!box || !input) return;
    const items = state.suggestions;
    box.hidden = items.length === 0;
    input.setAttribute("aria-expanded", items.length ? "true" : "false");
    box.innerHTML = items.map((s, i) => `<button type="button" class="suggest-item${i === state.suggestIndex ? " is-on" : ""}" role="option" data-action="suggest" data-q="${esc(s)}">${icon("search")}<span>${esc(s)}</span></button>`).join("");
  }
  function scheduleSuggest() {
    clearTimeout(suggestTimer);
    const q = state.q.trim();
    const local = localSuggest(q);
    state.suggestions = local;
    state.suggestIndex = -1;
    paintSuggest();
    if (q.length < 2) return;
    suggestTimer = setTimeout(async () => {
      try {
        const data = await fetchJSON(`${wikiHost()}/w/api.php?action=opensearch&search=${encodeURIComponent(q)}&limit=6&namespace=0&format=json&origin=*`);
        const remote = Array.isArray(data?.[1]) ? data[1] : [];
        if (root.querySelector("#q")?.value.trim() !== q) return;
        state.suggestions = [...new Set([...local, ...remote])].slice(0, 8);
        paintSuggest();
      } catch { /* keep local */ }
    }, 180);
  }
  function localSuggest(q) {
    const s = q.toLowerCase();
    const hist = state.history.map((h) => h.q);
    if (!s) return hist.slice(0, 6);
    return hist.filter((item) => item.toLowerCase().includes(s)).slice(0, 6);
  }

  function onSubmit(e) {
    const form = e.target;
    if (!(form instanceof HTMLFormElement) || form.id !== "search-form") return;
    e.preventDefault();
    const picked = state.suggestIndex >= 0 ? state.suggestions[state.suggestIndex] : state.q;
    commitSearch(picked);
  }
  function onInput(e) {
    const el = e.target;
    if (el.id === "q") { state.q = el.value; scheduleSuggest(); return; }
    if (el.id === "route-a") state.routeA = el.value;
    if (el.id === "route-b") state.routeB = el.value;
    if (el.dataset && el.dataset.pref) applyPrefControl(el);
  }
  function onChange(e) {
    const el = e.target;
    if (el.dataset && el.dataset.pref) applyPrefControl(el);
  }
  function applyPrefControl(el) {
    const key = el.dataset.pref;
    let value = el.type === "checkbox" ? el.checked : el.value;
    if (key === "perPage") value = Number(value);
    state.prefs[key] = value;
    savePrefs();
    applyTheme();
    if (key === "theme") {
      const btn = root.querySelector('[data-action="theme"]');
      if (btn) btn.innerHTML = icon(resolvedTheme() === "light" ? "sun" : "moon");
    }
    if (key === "lang") {
      const ov = state.overlay;
      renderAll();
      if (ov) openOverlay(ov);
      if (state.view === "results" && state.q) runSearch();
    }
  }

  function onClick(e) {
    if (e.target.id === "overlay") { closeOverlay(); return; }
    const el = e.target.closest("[data-action]");
    if (!el || !root.contains(el)) return;
    const action = el.dataset.action;
    if (action === "home") { state.view = "home"; state.q = ""; history.pushState({}, "", location.pathname); renderAll(); return; }
    if (action === "tab") { state.tab = el.dataset.tab; state.page = 1; if (state.view === "results") { syncUrl("replace"); updateStage(); } else syncTabs(); return; }
    if (action === "clear") { state.q = ""; state.suggestions = []; const input = root.querySelector("#q"); if (input) { input.value = ""; input.focus(); } paintSuggest(); return; }
    if (action === "suggest" || action === "go") { commitSearch(el.dataset.q, { tab: el.dataset.tab }); return; }
    if (action === "lucky") { lucky(); return; }
    if (action === "voice") { voice(); return; }
    if (action === "theme") {
      state.prefs.theme = resolvedTheme() === "dark" ? "light" : "dark";
      savePrefs(); applyTheme();
      el.innerHTML = icon(resolvedTheme() === "light" ? "sun" : "moon");
      return;
    }
    if (action === "overlay") { openOverlay(el.dataset.overlay); return; }
    if (action === "close-overlay") { closeOverlay(); return; }
    if (action === "copy") { copyText(el.dataset.url); return; }
    if (action === "copy-default") { copyText(browserTemplate()); return; }
    if (action === "share") { share(); return; }
    if (action === "toggle-save") { toggleSave(el.dataset); updateStage(); return; }
    if (action === "remove-save") { state.saved = state.saved.filter((s) => s.url !== el.dataset.url); saveSaved(); openOverlay("saved"); return; }
    if (action === "expand") { state.expanded[el.dataset.key] = !state.expanded[el.dataset.key]; updateStage(); return; }
    if (action === "page") { state.page = Math.max(1, Number(el.dataset.page) || 1); syncUrl("replace"); updateStage(); return; }
    if (action === "filter") { state.sourceFilter = el.dataset.filter; state.page = 1; updateStage(); return; }
    if (action === "lightbox") { openLightbox(Number(el.dataset.i), el.dataset.set); return; }
    if (action === "lb-close") { closeLightbox(); return; }
    if (action === "lb-nav") { moveLightbox(Number(el.dataset.dir)); return; }
    if (action === "route") { buildRoute(); return; }
    if (action === "geo") { nearMe(); return; }
    if (action === "area") { searchArea(); return; }
    if (action === "basemap") { state.basemap = el.dataset.base; if (state._map) addBase(state._map); return; }
    if (action === "fly") {
      const p = state.places[Number(el.dataset.i)];
      if (p && state._map) { state._map.setView([p.lat, p.lon], 15); state._markers[Number(el.dataset.i)]?.openPopup(); }
      return;
    }
    if (action === "clear-history") { state.history = []; saveHistory(); toast(t("cleared")); return; }
    if (action === "clear-saved") { state.saved = []; saveSaved(); toast(t("cleared")); openOverlay("saved"); return; }
  }
  function onKey(e) {
    if (e.target.id !== "q") return;
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!state.suggestions.length) return;
      const dir = e.key === "ArrowDown" ? 1 : -1;
      state.suggestIndex = (state.suggestIndex + dir + state.suggestions.length) % state.suggestions.length;
      paintSuggest();
    } else if (e.key === "Escape") {
      state.suggestions = [];
      state.suggestIndex = -1;
      paintSuggest();
    }
  }
  function onGlobalKey(e) {
    if (e.key === "Escape") {
      if (state.lightbox) { closeLightbox(); return; }
      if (state.overlay) { closeOverlay(); return; }
    }
    if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      e.preventDefault();
      const input = root.querySelector("#q");
      if (input) input.focus();
    }
  }
  function onPop() {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    state.tab = TABS.includes(params.get("tab")) ? params.get("tab") : "all";
    state.page = Math.max(1, Number(params.get("p") || 1));
    state.q = q;
    if (!q) { state.view = "home"; renderAll(); return; }
    state.view = "results";
    renderAll();
    runSearch();
  }

  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); toast(t("copied")); }
    catch { toast(t("copyFail")); }
  }
  async function share() {
    const url = resultsUrl();
    if (navigator.share) {
      try { await navigator.share({ title: "MetroSearch", text: state.q, url }); return; } catch { /* fall through */ }
    }
    copyText(url);
  }
  function toggleSave(data) {
    const url = data.url;
    if (isSaved(url)) state.saved = state.saved.filter((s) => s.url !== url);
    else state.saved.unshift({ url, title: data.title, snippet: data.snippet, badge: data.badge });
    saveSaved();
    toast(isSaved(url) ? t("savedDone") : t("remove"));
  }
  function currentImages(set) {
    if (set === "strip") return state.images.slice(0, 8);
    return state.images;
  }
  function openLightbox(index, set) {
    const list = currentImages(set).filter((it) => safeUrl(it.full || it.thumb || it.url));
    if (!list.length) return;
    state.lightbox = { index, set, list };
    paintLightbox();
  }
  function moveLightbox(dir) {
    if (!state.lightbox) return;
    const { list } = state.lightbox;
    state.lightbox.index = (state.lightbox.index + dir + list.length) % list.length;
    paintLightbox();
  }
  function paintLightbox() {
    const lb = state.lightbox;
    if (!lb) return;
    let node = root.querySelector("#lightbox");
    if (!node) {
      node = document.createElement("div");
      node.id = "lightbox";
      root.appendChild(node);
    }
    const item = lb.list[lb.index];
    const src = safeUrl(item.full || item.thumb || item.url);
    node.className = "lb";
    node.innerHTML = `<img alt="${esc(item.title)}" src="${esc(src)}"><div class="lb-bar">
      <button type="button" class="btn-ghost" data-action="lb-nav" data-dir="-1">${t("prev")}</button>
      <a class="btn-primary" ${aAttrs(item.url || src)}>${t("sourcePage")}</a>
      <a class="btn-ghost" ${aAttrs(src)}>${t("openImage")}</a>
      <button type="button" class="btn-ghost" data-action="lb-close">${t("close")}</button>
      <button type="button" class="btn-ghost" data-action="lb-nav" data-dir="1">${t("next")}</button>
    </div><p class="hint">${esc(item.title)}${item.license ? " · " + t("license") + ": " + esc(item.license) : ""}</p>`;
  }
  function closeLightbox() {
    state.lightbox = null;
    root.querySelector("#lightbox")?.remove();
  }
  function voice() {
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Rec) { toast(state.prefs.lang === "en" ? "Voice input isn't available in this browser" : "Голосовой ввод недоступен в этом браузере"); return; }
    const rec = new Rec();
    rec.lang = state.prefs.lang === "en" ? "en-US" : "ru-RU";
    rec.interimResults = false;
    rec.onresult = (ev) => {
      const text = ev.results?.[0]?.[0]?.transcript || "";
      if (text) commitSearch(text);
    };
    try { rec.start(); } catch { /* already started */ }
  }
  async function lucky() {
    const q = (root.querySelector("#q")?.value || state.q).trim();
    if (!q) return;
    state.q = q;
    state.view = "results";
    if (!(state.prefs.newWindow && !inFrame())) {
      syncUrl("push");
      renderAll();
    }
    await runSearch();
    const parsed = parseQuery(state.q);
    const first = ["official"]
      .map(() => state.official?.url)
      .concat(bucket("links"), bucket("wiki"), bucket("hn"), bucket("ddg"), bucket("news"))
      .map((item) => (typeof item === "string" ? item : item?.url))
      .map(safeUrl)
      .find((url) => url && passFilters({ title: "", snippet: "", url }, parsed));
    if (first) window.open(first, "_blank", "noopener,noreferrer");
    else if (state.prefs.newWindow && !inFrame()) commitSearch(q, { silent: true });
  }
  async function nearMe() {
    try {
      const pos = await geoPosition();
      if (state._map) state._map.setView([pos.lat, pos.lon], 14);
      const rev = await fetchJSON(`https://nominatim.openstreetmap.org/reverse?lat=${pos.lat}&lon=${pos.lon}&format=json&accept-language=${langCode()}`);
      state.routeA = rev.display_name || "";
      const input = root.querySelector("#route-a");
      if (input) input.value = state.routeA;
      toast(state.routeA.split(",").slice(0, 2).join(","));
    } catch { toast(t("geoDeny")); }
  }
  async function searchArea() {
    if (!state._map) return;
    const b = state._map.getBounds();
    const q = state.q.trim() || (langCode() === "en" ? "cafe" : "кафе");
    const viewbox = `${b.getWest()},${b.getNorth()},${b.getEast()},${b.getSouth()}`;
    try {
      const data = await fetchJSON(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=10&bounded=1&viewbox=${encodeURIComponent(viewbox)}&accept-language=${langCode()}`);
      state.places = (data || []).map((p) => ({ title: p.display_name, snippet: p.type || "", lat: Number(p.lat), lon: Number(p.lon), url: `https://www.openstreetmap.org/${p.osm_type}/${p.osm_id}` }));
      updateStage();
    } catch { toast(t("partial")); }
  }

  function tickClock() {
    const el = root.querySelector("#clock");
    if (!el) return;
    el.textContent = new Intl.DateTimeFormat(langCode() === "en" ? "en-GB" : "ru-RU", { hour: "2-digit", minute: "2-digit", weekday: "short", day: "numeric", month: "short" }).format(new Date());
  }

  function bootFromUrl() {
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || "";
    const tab = params.get("tab") || "all";
    if (TABS.includes(tab)) state.tab = tab;
    state.page = Math.max(1, Number(params.get("p") || 1));
    if (params.get("view") === "default") state.overlay = "default";
    if (q) {
      state.q = q;
      state.view = "results";
      renderAll();
      runSearch();
      return;
    }
    state.view = "home";
    renderAll();
  }

  function mount(el) {
    if (!el || el.dataset.metro === "1") return;
    el.dataset.metro = "1";
    root = el;
    el.classList.add("ms");
    loadPrefs();
    applyTheme();
    el.addEventListener("click", onClick);
    el.addEventListener("submit", onSubmit);
    el.addEventListener("input", onInput);
    el.addEventListener("change", onChange);
    el.addEventListener("keydown", onKey);
    el.addEventListener("focusin", (ev) => {
      if (ev.target.id === "q" && !state.q) { state.suggestions = localSuggest(""); paintSuggest(); }
    });
    if (!window.__metroGlobal) {
      window.__metroGlobal = true;
      document.addEventListener("keydown", onGlobalKey);
      window.addEventListener("popstate", onPop);
      clearInterval(window.__metroClock);
      window.__metroClock = setInterval(tickClock, 30000);
    }
    bootFromUrl();
  }

  window.MetroSearch = { mount };
  const standalone = document.getElementById("app");
  if (standalone) mount(standalone);
})();
