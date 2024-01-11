const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-primary">
        <div className="flex-1">
          <a className="text-md sm:text-lg xl:text-xl freight-italic pl-3">
            cheri chan
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-sm menu-horizontal px-1">
            <li>
              <details>
                <summary className="hover:text-accent text-lg sm:text-xl xl:text-2xl">
                  work hard,
                </summary>
                <ul className="p-2 bg-primary rounded-t-none">
                  <li>
                    <a
                      href="https://cometmail-my.sharepoint.com/:w:/g/personal/cxc220002_utdallas_edu/EQ42ifWN8i9Ju-lw3hdUQhYBheWpgTxLYggN6cKmD94Qhw?e=cDIG89"
                      className="freight-italic text-md sm:text-lg xl:text-xl hover:text-accent"
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cheri8chan"
                      className="freight-italic text-md sm:text-lg xl:text-xl hover:text-accent"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1_oyf85WgeD1m_UdHLMpADwzxwS3Sif7CAkPx-IjI6HQ/edit?usp=sharing"
                className="text-lg sm:text-xl xl:text-2xl freight-bold hover:text-accent"
              >
                play hard.
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
