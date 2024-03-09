const themeBtn = document.querySelector('.theme');

function getCurrentTheme() {
    let theme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? 'dark' : 'light';
    localStorage.getItem('theme') ? theme= localStorage.getItem('theme'): null;
    return theme;
}

function loadTheme(theme) {
    const root = document.querySelector(':root');
    if (themeBtn){
        if (theme === 'light') {
            themeBtn.innerHTML = '<i class="bi bi-moon-fill " title="حالت شب"></i>\n' +
                '                            <span class="sidebar_title d-none">حالت شب</span>';
        } else {
            themeBtn.innerHTML = '<i class="bi bi-sun-fill" title="حالت روز"></i>\n' +
                '                            <span class="sidebar_title d-none">حالت روز</span>';
        }
    }
    root.setAttribute('color-scheme', theme)
}

themeBtn?.addEventListener('click', () => {
    let theme = getCurrentTheme();
    theme === 'dark' ? theme = 'light' : theme = 'dark';
    localStorage.setItem('theme', theme);
    loadTheme(theme);
})
window.addEventListener('DOMContentLoaded', () => {
    loadTheme(getCurrentTheme());
});
