const html = document.documentElement;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        html.setAttribute('data-bs-theme', prefersDark ? 'dark' : 'light');