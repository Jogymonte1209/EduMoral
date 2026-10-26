(() => {
  const palettes = {
    parchment: {
      light: {
        page: 'linear-gradient(180deg, #fbf8f1 0%, #f0e6d5 100%)',
        pageAlt: 'rgba(198, 154, 88, 0.09)',
        surface: '#fffdf8',
        surfaceSoft: '#f3eadb',
        text: '#342a20',
        muted: '#746657',
        primary: '#795334',
        primaryDark: '#4c3526',
        accent: '#c69a58',
        border: 'rgba(121, 83, 52, 0.15)',
        header: 'rgba(251, 248, 241, 0.92)',
        note: '#fbf3e6',
        shadow: '0 18px 45px rgba(76, 53, 38, 0.12)'
      }
    },
    forest: {
      light: {
        page: 'linear-gradient(180deg, #f7f8f1 0%, #e8eddf 100%)',
        pageAlt: 'rgba(93, 125, 79, 0.08)',
        surface: '#fffef9',
        surfaceSoft: '#edf2e7',
        text: '#293328',
        muted: '#657260',
        primary: '#476b4b',
        primaryDark: '#304a34',
        accent: '#b39a5a',
        border: 'rgba(71, 107, 75, 0.16)',
        header: 'rgba(247, 248, 241, 0.93)',
        note: '#f2f0e3',
        shadow: '0 18px 45px rgba(47, 70, 48, 0.12)'
      }
    },
    ocean: {
      light: {
        page: 'linear-gradient(180deg, #f4f8f7 0%, #e4eff0 100%)',
        pageAlt: 'rgba(61, 104, 119, 0.08)',
        surface: '#fbfefd',
        surfaceSoft: '#eaf3f4',
        text: '#253238',
        muted: '#60747a',
        primary: '#3d6877',
        primaryDark: '#294c59',
        accent: '#c5a263',
        border: 'rgba(61, 104, 119, 0.16)',
        header: 'rgba(244, 248, 247, 0.93)',
        note: '#f2f0e5',
        shadow: '0 18px 45px rgba(41, 76, 89, 0.12)'
      }
    },
    berry: {
      light: {
        page: 'linear-gradient(180deg, #faf6f7 0%, #f0e5eb 100%)',
        pageAlt: 'rgba(129, 83, 101, 0.08)',
        surface: '#fffdfd',
        surfaceSoft: '#f5edf0',
        text: '#352a31',
        muted: '#74646e',
        primary: '#815365',
        primaryDark: '#583747',
        accent: '#c4a36f',
        border: 'rgba(129, 83, 101, 0.16)',
        header: 'rgba(250, 246, 247, 0.93)',
        note: '#f5eee5',
        shadow: '0 18px 45px rgba(88, 55, 71, 0.12)'
      }
    }
  };

  const darkPalettes = {
    parchment: {
      page: 'linear-gradient(180deg, #211e1a 0%, #171512 100%)',
      pageAlt: 'rgba(255, 255, 255, 0.035)',
      surface: '#2b2722',
      surfaceSoft: '#373129',
      text: '#f0e8dc',
      muted: '#c0b3a1',
      primary: '#d1a36b',
      primaryDark: '#f0c88f',
      accent: '#c9995b',
      border: 'rgba(240, 222, 196, 0.16)',
      header: 'rgba(33, 30, 26, 0.94)',
      note: '#383024',
      shadow: '0 18px 45px rgba(0, 0, 0, 0.24)'
    },
    forest: {
      page: 'linear-gradient(180deg, #1c241e 0%, #141a16 100%)',
      pageAlt: 'rgba(196, 218, 188, 0.045)',
      surface: '#252e26',
      surfaceSoft: '#303a31',
      text: '#e8eee5',
      muted: '#b7c4b4',
      primary: '#a7c89b',
      primaryDark: '#c8dfbd',
      accent: '#c1a46e',
      border: 'rgba(210, 231, 202, 0.16)',
      header: 'rgba(28, 36, 30, 0.94)',
      note: '#343126',
      shadow: '0 18px 45px rgba(0, 0, 0, 0.24)'
    },
    ocean: {
      page: 'linear-gradient(180deg, #1b2529 0%, #131a1d 100%)',
      pageAlt: 'rgba(182, 215, 221, 0.045)',
      surface: '#252f33',
      surfaceSoft: '#303b40',
      text: '#e6eef0',
      muted: '#b4c6cb',
      primary: '#9bc8d3',
      primaryDark: '#c0dfe5',
      accent: '#d0ad72',
      border: 'rgba(199, 226, 231, 0.16)',
      header: 'rgba(27, 37, 41, 0.94)',
      note: '#343127',
      shadow: '0 18px 45px rgba(0, 0, 0, 0.24)'
    },
    berry: {
      page: 'linear-gradient(180deg, #292126 0%, #1b161b 100%)',
      pageAlt: 'rgba(229, 197, 214, 0.045)',
      surface: '#332a31',
      surfaceSoft: '#40343d',
      text: '#f1e8ee',
      muted: '#c8b5c1',
      primary: '#d3a8c0',
      primaryDark: '#edc9dc',
      accent: '#d2ae78',
      border: 'rgba(237, 213, 229, 0.16)',
      header: 'rgba(41, 33, 38, 0.94)',
      note: '#3a302b',
      shadow: '0 18px 45px rgba(0, 0, 0, 0.24)'
    }
  };

  const storageKey = 'edumoral-appearance';
  const root = document.documentElement;
  const body = document.body;
  const drawer = document.getElementById('theme-drawer');
  const overlay = document.getElementById('theme-overlay');
  const toggle = document.getElementById('theme-toggle');
  const close = document.getElementById('theme-close');
  const darkToggle = document.getElementById('theme-dark');
  const status = document.getElementById('theme-status');
  const schemeInputs = Array.from(document.querySelectorAll('input[name="theme-scheme"]'));

  if (!drawer || !overlay || !toggle || !close || !darkToggle || !status || !schemeInputs.length) {
    throw new Error('Appearance controls are missing from the page.');
  }

  let appearance = { scheme: 'parchment', dark: false };
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || '{}');
    if (stored && typeof stored === 'object') {
      appearance = {
        scheme: Object.prototype.hasOwnProperty.call(palettes, stored.scheme) ? stored.scheme : 'parchment',
        dark: stored.dark === true
      };
    }
  } catch (error) {
    console.error('Unable to read saved appearance settings.', error);
  }

  function applyAppearance() {
    const palette = appearance.dark
      ? darkPalettes[appearance.scheme]
      : palettes[appearance.scheme].light;
    const cssNames = {
      page: '--theme-page',
      pageAlt: '--theme-page-alt',
      surface: '--theme-surface',
      surfaceSoft: '--theme-surface-soft',
      text: '--theme-text',
      muted: '--theme-muted',
      primary: '--theme-primary',
      primaryDark: '--theme-primary-dark',
      accent: '--theme-accent',
      border: '--theme-border',
      header: '--theme-header',
      note: '--theme-note',
      shadow: '--theme-shadow'
    };

    Object.entries(cssNames).forEach(([key, property]) => {
      root.style.setProperty(property, palette[key]);
    });
    root.style.setProperty('--bg', palette.surfaceSoft);
    root.style.setProperty('--panel', palette.surface);
    root.style.setProperty('--panel-alt', palette.surfaceSoft);
    root.style.setProperty('--primary', palette.primary);
    root.style.setProperty('--primary-dark', palette.primaryDark);
    root.style.setProperty('--accent', palette.accent);
    root.style.setProperty('--text', palette.text);
    root.style.setProperty('--muted', palette.muted);
    root.style.setProperty('--shadow', palette.shadow);
    body.dataset.themeScheme = appearance.scheme;
    body.classList.toggle('theme-dark', appearance.dark);
    darkToggle.checked = appearance.dark;
    schemeInputs.forEach((input) => {
      input.checked = input.value === appearance.scheme;
    });
  }

  function saveAppearance() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(appearance));
      status.textContent = 'Your appearance is saved on this device.';
    } catch (error) {
      status.textContent = 'This browser could not save your appearance setting.';
      console.error('Unable to save appearance settings.', error);
    }
  }

  function setDrawerOpen(isOpen) {
    drawer.classList.toggle('is-open', isOpen);
    drawer.setAttribute('aria-hidden', String(!isOpen));
    overlay.hidden = !isOpen;
    toggle.setAttribute('aria-expanded', String(isOpen));
    body.classList.toggle('theme-drawer-open', isOpen);
    if (isOpen) close.focus();
    else toggle.focus();
  }

  toggle.addEventListener('click', () => setDrawerOpen(true));
  close.addEventListener('click', () => setDrawerOpen(false));
  overlay.addEventListener('click', () => setDrawerOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
      setDrawerOpen(false);
    }
  });

  schemeInputs.forEach((input) => {
    input.addEventListener('change', () => {
      appearance.scheme = input.value;
      applyAppearance();
      saveAppearance();
    });
  });

  darkToggle.addEventListener('change', () => {
    appearance.dark = darkToggle.checked;
    applyAppearance();
    saveAppearance();
  });

  applyAppearance();
})();
