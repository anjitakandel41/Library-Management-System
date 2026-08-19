/* =========================================================
   Aurora Library — UI behaviour
   ========================================================= */

// ================= Login / Register toggle =================
(function () {
    const signInForm = document.getElementById('signIn');
    const signUpForm = document.getElementById('signup');
    if (!signInForm || !signUpForm) return;

    function show(which) {
        const showSignUp = which === 'signup';
        signUpForm.style.display = showSignUp ? 'block' : 'none';
        signInForm.style.display = showSignUp ? 'none' : 'block';

        // Focus the first field of the panel that just became visible.
        const panel = showSignUp ? signUpForm : signInForm;
        const first = panel.querySelector('input:not([type=hidden]), select');
        if (first) first.focus({ preventScroll: true });
    }

    // Legacy hooks kept for the existing Selenium tests.
    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');
    if (signUpButton) signUpButton.addEventListener('click', () => show('signup'));
    if (signInButton) signInButton.addEventListener('click', () => show('signIn'));

    // Text links at the bottom of each card.
    document.querySelectorAll('[data-switch]').forEach(el => {
        el.addEventListener('click', () => show(el.dataset.switch));
    });
})();

// ================= Dashboard tab navigation =================
(function () {
    const tabs = document.querySelectorAll('.tab-button');
    const sections = document.querySelectorAll('.tab-section');
    if (!tabs.length) return;

    function activate(targetId, push) {
        let matched = false;

        sections.forEach(section => {
            const isTarget = section.id === targetId;
            section.hidden = !isTarget;
            if (isTarget) matched = true;
        });
        if (!matched) return false;

        tabs.forEach(tab => {
            tab.classList.toggle('active-tab', tab.dataset.target === targetId);
        });

        if (push && history.replaceState) {
            history.replaceState(null, '', '#' + targetId);
        }
        return true;
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => activate(tab.dataset.target, true));
    });

    // Restore the tab from the URL hash so a refresh keeps your place.
    if (window.location.hash) {
        activate(window.location.hash.slice(1), false);
    }
})();

// ================= Live table search =================
(function () {
    document.querySelectorAll('[data-search]').forEach(input => {
        const table = document.getElementById(input.dataset.search);
        if (!table) return;

        const rows = Array.from(table.tBodies[0] ? table.tBodies[0].rows : []);

        input.addEventListener('input', () => {
            const term = input.value.trim().toLowerCase();
            let visible = 0;

            rows.forEach(row => {
                const match = !term || row.textContent.toLowerCase().includes(term);
                row.hidden = !match;
                if (match) visible++;
            });

            renderNoResults(table, term && visible === 0, term);
        });
    });

    function renderNoResults(table, show, term) {
        const body = table.tBodies[0];
        let note = body.querySelector('.no-results');

        if (!show) {
            if (note) note.remove();
            return;
        }
        if (note) {
            note.querySelector('p').textContent = 'No rows match "' + term + '".';
            return;
        }

        note = document.createElement('tr');
        note.className = 'no-results';
        note.innerHTML =
            '<td colspan="' + table.rows[0].cells.length + '">' +
            '<div class="empty"><i class="fas fa-magnifying-glass"></i>' +
            '<strong>Nothing found</strong>' +
            '<p>No rows match "' + term + '".</p></div></td>';
        body.appendChild(note);
    }
})();

// ================= Show / hide password =================
(function () {
    document.querySelectorAll('[data-toggle-password]').forEach(button => {
        const input = document.getElementById(button.dataset.togglePassword);
        const icon = button.querySelector('i');
        if (!input || !icon) return;

        button.addEventListener('click', () => {
            const nowVisible = input.type === 'password';

            input.type = nowVisible ? 'text' : 'password';
            icon.className = nowVisible ? 'fas fa-eye-slash' : 'fas fa-eye';

            const label = nowVisible ? 'Hide password' : 'Show password';
            button.setAttribute('aria-label', label);
            button.setAttribute('title', label);
            button.setAttribute('aria-pressed', String(nowVisible));

            // Keep the caret where the user left it.
            const end = input.value.length;
            input.focus({ preventScroll: true });
            input.setSelectionRange(end, end);
        });
    });
})();

// ================= Flash messages =================
(function () {
    const flashes = document.querySelectorAll('.flash');
    if (!flashes.length) return;

    flashes.forEach(flash => {
        const close = () => {
            flash.style.transition = 'opacity .25s, transform .25s';
            flash.style.opacity = '0';
            flash.style.transform = 'translateX(12px)';
            setTimeout(() => flash.remove(), 250);
        };

        const button = flash.querySelector('[data-dismiss]');
        if (button) button.addEventListener('click', close);

        setTimeout(close, 5000);
    });
})();

// ================= Confirmation for destructive actions =================
(function () {
    document.querySelectorAll('[data-confirm]').forEach(el => {
        el.addEventListener('click', event => {
            if (!window.confirm(el.dataset.confirm)) event.preventDefault();
        });
    });
})();

// Kept for backwards compatibility with older inline handlers.
function confirmAction(message) {
    return window.confirm(message);
}
