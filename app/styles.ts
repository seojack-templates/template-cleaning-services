/**
 * Scoped CSS for the cleaning-services template.
 * EVERY selector must be prefixed with ".cleaning-services-demo" so the styles
 * cannot leak (this matters when the source is seeded into the builder).
 */
export const CLEANING_SERVICES_CSS = `
.cleaning-services-demo {
    --ink: #14141a;
    --paper: #ffffff;
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    color: var(--ink);
    background: var(--paper);
}
.cleaning-services-demo * { box-sizing: border-box; }
.cleaning-services-demo h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 1rem; }
`;