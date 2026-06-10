import { useState } from "react";

function MainPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.wrapper}>

      {/* Navbar */}
      <nav className={styles.navbar}>
        <span className={styles.logo}>Ukay</span>

        <div className={styles.navIcons}>
          {/* Search */}
          <button onClick={() => setSearchOpen(!searchOpen)} className={styles.iconBtn}>
            <svg width="20" height="20" fill="none" stroke="#0b1c30" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>

          {/* Cart */}
          <button className={styles.iconBtn}>
            <svg width="20" height="20" fill="none" stroke="#0b1c30" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className={styles.iconBtn}>
            <svg width="20" height="20" fill="none" stroke="#0b1c30" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Search Dropdown */}
      {searchOpen && (
        <div className={styles.searchDropdown}>
          <div className={styles.searchInner}>
            <svg width="16" height="16" fill="none" stroke="#76777d" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search for items..."
              autoFocus
              className={styles.searchInput}
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.btnOutline}>Log in</button>
          <button className={styles.btnPrimary}>Register</button>
        </div>
      )}

      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.heroTag}>Buy & Sell Pre-loved Items</span>
        <h1 className={styles.heroTitle}>Find hidden gems at unbeatable prices</h1>
        <p className={styles.heroSub}>
          Browse thousands of pre-loved clothing, accessories, and more — all in one place.
        </p>
        <div className={styles.heroBtns}>
          <button className={styles.btnPrimary}>Browse Items</button>
          <button className={styles.btnOutline}>Sell Something</button>
        </div>
      </section>

    </div>
  );
}

const styles = {
  wrapper: "min-h-screen bg-surface font-['Inter']",

  // Navbar
  navbar: "bg-white border-b border-surface-container px-4 py-3 flex items-center justify-between sticky top-0 z-50",
  logo: "font-['Lexend'] font-bold text-xl text-primary tracking-tight",
  navIcons: "flex items-center gap-2",
  iconBtn: "p-2 rounded-xl hover:bg-surface-container transition-colors cursor-pointer",

  // Search
  searchDropdown: "bg-white border-b border-surface-container px-4 py-3",
  searchInner: "flex items-center gap-2 border border-surface-container rounded-xl px-4 py-2",
  searchInput: "w-full text-sm text-primary bg-transparent outline-none placeholder:text-on-surface-variant",

  // Mobile Menu
  mobileMenu: "bg-white border-b border-surface-container px-4 py-4 flex flex-col gap-3",

  // Hero
  hero: "flex flex-col items-center text-center px-6 pt-16 pb-12 gap-5",
  heroTag: "text-xs font-semibold tracking-widest text-secondary bg-surface-container px-4 py-1.5 rounded-full uppercase",
  heroTitle: "font-['Lexend'] font-bold text-4xl text-primary leading-tight tracking-tight",
  heroSub: "text-base text-on-surface-variant leading-relaxed",
  heroBtns: "flex flex-col gap-3 w-full mt-2",

  // Buttons
  btnPrimary: "w-full text-sm font-semibold text-white bg-primary rounded-xl px-7 py-3 border-none cursor-pointer",
  btnOutline: "w-full text-sm font-semibold text-primary border border-outline rounded-xl px-7 py-3 bg-transparent cursor-pointer",
}

export default MainPage;