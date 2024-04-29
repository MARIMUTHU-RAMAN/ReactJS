import "../Login/Login.css"

function Sidebar() {
  return (
    <>
    <div id="root">
    <div class="spread dash-layout">
      <header data-element-id="app-bar" data-testid="app-bar" aria-label="Navigation bar"
        class="dash-header">
        <div class="header-layer  ">
          <div class="header-layout-left ">
            <button id="sidebarAction" class=" actionMenu-sidebar ">
              <svg fill="currentcolor" viewBox="0 0 16 16" role="img"
                aria-label="burger icon" class="Icon Icon-burger emotion-3qkpde " width="20" height="20">
                <path
                  d="M3.25 5A.75.75 0 0 1 4 4.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 5zm0 3A.75.75 0 0 1 4 7.25h8a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8zM4 10.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H4z">
                </path>
              </svg>
            </button><a data-testid="main-logo-link" class="ehgm33i0 brandLogo-action" aria-disabled="false"
              href="/"><svg class="Icon text-brand" viewBox="0 0 66 85" height="32" fill="currentcolor"
                data-testid="main-logo">
                <path
                  d="M46.8253288,70.4935014 C49.5764899,70.4935014 51.8067467,68.1774705 51.8067467,65.3205017 C51.8067467,62.4635329 49.5764899,60.147502 46.8253288,60.147502 C44.0741676,60.147502 41.8439108,62.4635329 41.8439108,65.3205017 C41.8439108,68.1774705 44.0741676,70.4935014 46.8253288,70.4935014 Z M32.8773585,84.9779005 C35.6285197,84.9779005 37.8587764,82.6618697 37.8587764,79.8049008 C37.8587764,76.947932 35.6285197,74.6319011 32.8773585,74.6319011 C30.1261973,74.6319011 27.8959405,76.947932 27.8959405,79.8049008 C27.8959405,82.6618697 30.1261973,84.9779005 32.8773585,84.9779005 Z M32.8773585,70.4935014 C35.6285197,70.4935014 37.8587764,68.1774705 37.8587764,65.3205017 C37.8587764,62.4635329 35.6285197,60.147502 32.8773585,60.147502 C30.1261973,60.147502 27.8959405,62.4635329 27.8959405,65.3205017 C27.8959405,68.1774705 30.1261973,70.4935014 32.8773585,70.4935014 Z M18.9293882,70.4935014 C21.6805494,70.4935014 23.9108062,68.1774705 23.9108062,65.3205017 C23.9108062,62.4635329 21.6805494,60.147502 18.9293882,60.147502 C16.1782271,60.147502 13.9479703,62.4635329 13.9479703,65.3205017 C13.9479703,68.1774705 16.1782271,70.4935014 18.9293882,70.4935014 Z M46.8253288,56.0091023 C49.5764899,56.0091023 51.8067467,53.6930714 51.8067467,50.8361026 C51.8067467,47.9791337 49.5764899,45.6631029 46.8253288,45.6631029 C44.0741676,45.6631029 41.8439108,47.9791337 41.8439108,50.8361026 C41.8439108,53.6930714 44.0741676,56.0091023 46.8253288,56.0091023 Z M18.9293882,56.0091023 C21.6805494,56.0091023 23.9108062,53.6930714 23.9108062,50.8361026 C23.9108062,47.9791337 21.6805494,45.6631029 18.9293882,45.6631029 C16.1782271,45.6631029 13.9479703,47.9791337 13.9479703,50.8361026 C13.9479703,53.6930714 16.1782271,56.0091023 18.9293882,56.0091023 Z M46.8253288,26.8995984 C49.5764899,26.8995984 51.8067467,24.5835675 51.8067467,21.7265987 C51.8067467,18.8696299 49.5764899,16.553599 46.8253288,16.553599 C44.0741676,16.553599 41.8439108,18.8696299 41.8439108,21.7265987 C41.8439108,24.5835675 44.0741676,26.8995984 46.8253288,26.8995984 Z M32.8773585,41.5247031 C35.6285197,41.5247031 37.8587764,39.2086723 37.8587764,36.3517034 C37.8587764,33.4947346 35.6285197,31.1787037 32.8773585,31.1787037 C30.1261973,31.1787037 27.8959405,33.4947346 27.8959405,36.3517034 C27.8959405,39.2086723 30.1261973,41.5247031 32.8773585,41.5247031 Z M32.8773585,10.3459994 C35.6285197,10.3459994 37.8587764,8.02996853 37.8587764,5.17299969 C37.8587764,2.31603085 35.6285197,0 32.8773585,0 C30.1261973,0 27.8959405,2.31603085 27.8959405,5.17299969 C27.8959405,8.02996853 30.1261973,10.3459994 32.8773585,10.3459994 Z M32.8773585,26.8995984 C35.6285197,26.8995984 37.8587764,24.5835675 37.8587764,21.7265987 C37.8587764,18.8696299 35.6285197,16.553599 32.8773585,16.553599 C30.1261973,16.553599 27.8959405,18.8696299 27.8959405,21.7265987 C27.8959405,24.5835675 30.1261973,26.8995984 32.8773585,26.8995984 Z M18.9293882,26.8995984 C21.6805494,26.8995984 23.9108062,24.5835675 23.9108062,21.7265987 C23.9108062,18.8696299 21.6805494,16.553599 18.9293882,16.553599 C16.1782271,16.553599 13.9479703,18.8696299 13.9479703,21.7265987 C13.9479703,24.5835675 16.1782271,26.8995984 18.9293882,26.8995984 Z"
                  opacity="0.2"></path>
                <path
                  d="M60.773299,70.4935014 C63.5244602,70.4935014 65.754717,68.1774705 65.754717,65.3205017 C65.754717,62.4635329 63.5244602,60.147502 60.773299,60.147502 C58.0221379,60.147502 55.7918811,62.4635329 55.7918811,65.3205017 C55.7918811,68.1774705 58.0221379,70.4935014 60.773299,70.4935014 Z M4.98141795,70.3527958 C7.73257912,70.3527958 9.96283591,68.0367649 9.96283591,65.1797961 C9.96283591,62.3228273 7.73257912,60.0067964 4.98141795,60.0067964 C2.23025679,60.0067964 0,62.3228273 0,65.1797961 C0,68.0367649 2.23025679,70.3527958 4.98141795,70.3527958 Z M60.773299,56.0091023 C63.5244602,56.0091023 65.754717,53.6930714 65.754717,50.8361026 C65.754717,47.9791337 63.5244602,45.6631029 60.773299,45.6631029 C58.0221379,45.6631029 55.7918811,47.9791337 55.7918811,50.8361026 C55.7918811,53.6930714 58.0221379,56.0091023 60.773299,56.0091023 Z M32.8773585,56.0091023 C35.6285197,56.0091023 37.8587764,53.6930714 37.8587764,50.8361026 C37.8587764,47.9791337 35.6285197,45.6631029 32.8773585,45.6631029 C30.1261973,45.6631029 27.8959405,47.9791337 27.8959405,50.8361026 C27.8959405,53.6930714 30.1261973,56.0091023 32.8773585,56.0091023 Z M4.98141795,55.8683967 C7.73257912,55.8683967 9.96283591,53.5523658 9.96283591,50.695397 C9.96283591,47.8384281 7.73257912,45.5223973 4.98141795,45.5223973 C2.23025679,45.5223973 0,47.8384281 0,50.695397 C0,53.5523658 2.23025679,55.8683967 4.98141795,55.8683967 Z M60.773299,41.5247031 C63.5244602,41.5247031 65.754717,39.2086723 65.754717,36.3517034 C65.754717,33.4947346 63.5244602,31.1787037 60.773299,31.1787037 C58.0221379,31.1787037 55.7918811,33.4947346 55.7918811,36.3517034 C55.7918811,39.2086723 58.0221379,41.5247031 60.773299,41.5247031 Z M46.8253288,41.5247031 C49.5764899,41.5247031 51.8067467,39.2086723 51.8067467,36.3517034 C51.8067467,33.4947346 49.5764899,31.1787037 46.8253288,31.1787037 C44.0741676,31.1787037 41.8439108,33.4947346 41.8439108,36.3517034 C41.8439108,39.2086723 44.0741676,41.5247031 46.8253288,41.5247031 Z M60.773299,26.8995984 C63.5244602,26.8995984 65.754717,24.5835675 65.754717,21.7265987 C65.754717,18.8696299 63.5244602,16.553599 60.773299,16.553599 C58.0221379,16.553599 55.7918811,18.8696299 55.7918811,21.7265987 C55.7918811,24.5835675 58.0221379,26.8995984 60.773299,26.8995984 Z M18.9293882,41.5247031 C21.6805494,41.5247031 23.9108062,39.2086723 23.9108062,36.3517034 C23.9108062,33.4947346 21.6805494,31.1787037 18.9293882,31.1787037 C16.1782271,31.1787037 13.9479703,33.4947346 13.9479703,36.3517034 C13.9479703,39.2086723 16.1782271,41.5247031 18.9293882,41.5247031 Z M4.98141795,41.3839975 C7.73257912,41.3839975 9.96283591,39.0679667 9.96283591,36.2109978 C9.96283591,33.354029 7.73257912,31.0379981 4.98141795,31.0379981 C2.23025679,31.0379981 0,33.354029 0,36.2109978 C0,39.0679667 2.23025679,41.3839975 4.98141795,41.3839975 Z M4.98141795,26.8995984 C7.73257912,26.8995984 9.96283591,24.5835675 9.96283591,21.7265987 C9.96283591,18.8696299 7.73257912,16.553599 4.98141795,16.553599 C2.23025679,16.553599 0,18.8696299 0,21.7265987 C0,24.5835675 2.23025679,26.8995984 4.98141795,26.8995984 Z">
                </path>
              </svg></a>
          </div>
          <div class="header-layout-right ">
            <div class="header-search-div">
              <div class="search-outer-field"><svg fill="currentcolor"
                  fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 16 16" role="img" aria-label="search icon"
                  class="Icon Icon-search emotion-1ug5hwe e1bl69jj2" width="16" height="16">
                  <path
                    d="M7 1.25a5.75 5.75 0 1 0 3.501 10.312l2.969 2.968a.75.75 0 1 0 1.06-1.06l-2.968-2.97A5.75 5.75 0 0 0 7 1.25zM2.75 7a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0z">
                  </path>
                </svg><input placeholder="Search…" maxlength="200" class="header__search-field" value=""/></div>
            </div>
            <div aria-haspopup="dialog" aria-expanded="false" aria-controls="mantine-ix6et0ki9-dropdown"
              id="mantine-ix6et0ki9-target" class=""><span><button onclick="headerMenu()" aria-label="New"
                  class="Button esqdtmv1 Button--primary menu-add-source">
                  <div class="emotion-zxs4gr "><svg fill="currentcolor"
                      viewBox="0 0 16 16" role="img" aria-label="add icon" class="Icon Icon-add" width="16" height="16">
                      <path
                        d="M8.75 3a.75.75 0 0 0-1.5 0v4.25H3a.75.75 0 0 0 0 1.5h4.25V13a.75.75 0 0 0 1.5 0V8.75H13a.75.75 0 0 0 0-1.5H8.75V3z">
                      </path>
                    </svg>
                    <div class=" header__menu-option emiw9oj0">
                      <h4 class="emotion-xanfyj esqdtmv0">New</h4>
                    </div>
                  </div>
                </button></span></div>
            <div class="emotion-1jc472g e4w71dr0">
              <div>
                <div aria-haspopup="dialog" aria-expanded="false" aria-controls="mantine-c652rp6e3-dropdown"
                  id="mantine-c652rp6e3-target" class=""><button id="menusHeader"  color="#696E7B"
                    class="Button e1gdjdn70 Button--onlyIcon p1 emotion-12f2wg1 ">
                    <div class="emotion-zxs4gr "><svg fill="currentcolor"
                        viewBox="0 0 16 16" role="img" aria-label="gear icon" class="Icon Icon-gear" width="16"
                        height="16">
                        <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
                        <path fill-rule="evenodd"
                          d="M7 .75A1.75 1.75 0 0 0 5.25 2.5v.45a5.74 5.74 0 0 0-.25.143l-.388-.224a1.75 1.75 0 0 0-2.39.64l-1 1.732a1.75 1.75 0 0 0 .64 2.39l.39.226a5.828 5.828 0 0 0 0 .286l-.39.225a1.75 1.75 0 0 0-.64 2.39l1 1.733a1.75 1.75 0 0 0 2.39.64L5 12.908c.081.05.164.098.249.144v.449c0 .966.783 1.75 1.75 1.75h2a1.75 1.75 0 0 0 1.75-1.75v-.45c.084-.045.167-.093.249-.143l.389.225a1.75 1.75 0 0 0 2.39-.64l1-1.733a1.75 1.75 0 0 0-.64-2.39l-.39-.226a5.703 5.703 0 0 0 0-.286l.39-.226a1.75 1.75 0 0 0 .64-2.39l-1-1.732a1.75 1.75 0 0 0-2.39-.64l-.39.224a5.77 5.77 0 0 0-.248-.144V2.5A1.75 1.75 0 0 0 9 .75H7zM6.75 2.5A.25.25 0 0 1 7 2.25h2a.25.25 0 0 1 .25.25v1.407l.45.196c.292.128.568.288.823.477l.395.292 1.22-.705a.25.25 0 0 1 .341.092l1 1.732a.25.25 0 0 1-.091.341l-1.219.704.054.487a4.303 4.303 0 0 1 0 .954l-.054.487 1.219.704a.25.25 0 0 1 .091.341l-1 1.732a.25.25 0 0 1-.341.092l-1.22-.705-.395.292c-.255.188-.53.349-.823.477l-.45.196V13.5a.25.25 0 0 1-.25.25H7a.25.25 0 0 1-.25-.25v-1.407l-.45-.196a4.245 4.245 0 0 1-.823-.477l-.396-.292-1.22.704a.25.25 0 0 1-.34-.091l-1-1.732a.25.25 0 0 1 .09-.342l1.22-.703-.055-.488a4.305 4.305 0 0 1 0-.952l.054-.488-1.218-.703a.25.25 0 0 1-.092-.342l1-1.732a.25.25 0 0 1 .342-.091l1.22.704.395-.292c.254-.188.53-.349.823-.477l.45-.196V2.5z"
                          clip-rule="evenodd"></path>
                      </svg></div>
                  </button></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="dash-outerDiv ">
        <aside id="navBar" class="dash-sidebar Nav " aria-hidden="false" data-testid="main-navbar-root">
          <nav class="dash-nav-section ">
            <div class="nav-menues ">
              <div>
                <div class="nav-menu-category  exp4uno10">
                  <ul>
                    <li aria-label="Home" aria-selected="true" class="exp4uno1 menu-list-1"><a
                        class="emyths83 list-item " href="/">
                        <div class="menu-list-item "><svg
                            fill="currentcolor" viewBox="0 0 16 16" role="img" aria-label="home icon"
                            class="Icon Icon-home menu-icon " width="16" height="16">
                            <path
                              d="M7.531 1.414a.75.75 0 0 1 .938 0l5 4A.75.75 0 0 1 13.75 6v7a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V8.75h-2.5V13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .281-.586l5-4zM3.75 6.36v5.89h1.5V8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 .75.75v4.25h1.5V6.36L8 2.96l-4.25 3.4z">
                            </path>
                          </svg></div>
                        <div class="menu-nameLabel ">Home</div>
                      </a></li>
                    <li aria-label="Browse data" aria-selected="false" class="exp4uno1 list-item-browse "><a
                        class="emyths83 list-item " href="/">
                        <div class="menu-list-item "><svg
                            fill="currentcolor" viewBox="0 0 16 16" role="img" aria-label="database icon"
                            class="Icon Icon-database menu-icon " width="16" height="16">
                            <path fill-rule="evenodd"
                              d="M2.665 13.67A.75.75 0 0 1 2.25 13V3a.75.75 0 0 1 .415-.67l.002-.002.002-.001.008-.004.024-.011a7.465 7.465 0 0 1 .38-.164c.255-.103.623-.236 1.088-.37A14.023 14.023 0 0 1 8 1.25c1.583 0 2.903.264 3.831.529.465.133.833.266 1.088.368a7.5 7.5 0 0 1 .38.165l.024.011.008.004.003.001L13 3l.335-.671A.751.751 0 0 1 13.75 3v10a.75.75 0 0 1-.415.67l-.002.002-.002.001-.008.004-.024.011a7.443 7.443 0 0 1-.38.164 11.33 11.33 0 0 1-1.088.37A14.02 14.02 0 0 1 8 14.75a14.02 14.02 0 0 1-3.831-.529 11.327 11.327 0 0 1-1.088-.368 7.409 7.409 0 0 1-.38-.165l-.024-.011-.008-.004-.002-.001-.002-.001zM3.75 3.497c.207-.079.487-.177.831-.275A12.524 12.524 0 0 1 8 2.75c1.417 0 2.597.236 3.419.471.344.098.624.196.831.275v1.24l-.096.038c-.327.133-.642.26-1.106.388-.674.185-1.604.338-3.048.338s-2.374-.153-3.049-.338a8.97 8.97 0 0 1-1.106-.388l-.095-.039V3.496zm7.695 3.113c.289-.08.559-.171.805-.262v2.388l-.096.04c-.327.132-.642.26-1.106.387-.674.185-1.604.338-3.048.338s-2.374-.153-3.049-.338a8.97 8.97 0 0 1-1.201-.427V6.347c.246.091.516.182.805.262C5.378 6.834 6.444 7 8 7c1.556 0 2.621-.166 3.445-.391zM3.75 10.347v2.157c.207.079.487.177.831.275A12.52 12.52 0 0 0 8 13.25a12.52 12.52 0 0 0 3.419-.471c.344-.098.624-.196.831-.275v-2.157c-.246.09-.516.182-.805.261-.824.226-1.89.393-3.445.393-1.556 0-2.622-.167-3.445-.393a9.777 9.777 0 0 1-.805-.26z"
                              clip-rule="evenodd"></path>
                          </svg></div>
                        <div class="menu-nameLabel ">Browse data</div>
                      </a></li>
                    <li aria-label="Add your own data" aria-selected="false" class="exp4uno0 list-item-addData "><a
                        class="emyths83 list-item " href="/">
                        <div class="menu-list-item "><svg
                            fill="currentcolor" viewBox="0 0 16 16" role="img" aria-label="add icon"
                            class="Icon Icon-add menu-icon " width="16" height="16">
                            <path
                              d="M8.75 3a.75.75 0 0 0-1.5 0v4.25H3a.75.75 0 0 0 0 1.5h4.25V13a.75.75 0 0 0 1.5 0V8.75H13a.75.75 0 0 0 0-1.5H8.75V3z">
                            </path>
                          </svg></div>
                        <div class="menu-nameLabel ">Add your own data</div>
                      </a></li>
                  </ul>
                </div>
                <div class="nav-menu-category ">
                  <div class="list-item-collect ">
                    <h4 class="list-item-inner exp4uno8">Collections</h4><button class="btn-list-item "><svg
                        fill="currentcolor" viewBox="0 0 16 16" role="img"
                        aria-label="ellipsis icon" class="Icon Icon-ellipsis detail-card " width="16"
                        height="16" aria-expanded="false">
                        <path
                          d="M4.5 8A1.25 1.25 0 1 1 2 8a1.25 1.25 0 0 1 2.5 0zm4.75 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0zm3.5 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z">
                        </path>
                      </svg></button>
                  </div>
                  <ul class="emotion-0 e1dk5ess0" role="tree">
                    <div data-testid="sidebar-collection-link-root">
                      <div class="relative">
                        <li role="treeitem" aria-selected="false" class="sidebar-section "><button hidden=""
                            class="emotion-8o13g8 emyths87"><svg fill="currentcolor"
                              viewBox="0 0 16 16" role="img" aria-label="chevronright icon"
                              class="Icon Icon-chevronright emotion-h5sun0 " width="12" height="12">
                              <path
                                d="M4.47 14.53a.75.75 0 0 1 0-1.06L9.94 8 4.47 2.53a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0z">
                              </path>
                            </svg></button><a class="emyths83 list-item " href="/">
                            <div class="menu-list-item "><svg
                                fill="currentcolor" viewBox="0 0 16 16" role="img" aria-label="folder icon"
                                class="Icon Icon-folder menu-icon emyths88" width="16" height="16">
                                <path fill-rule="evenodd"
                                  d="M3.2 3.75a.501.501 0 0 0-.339.126.322.322 0 0 0-.111.235v7.778c0 .076.032.162.111.235a.5.5 0 0 0 .339.126h9.6a.501.501 0 0 0 .339-.126.322.322 0 0 0 .111-.235v-5.96a.322.322 0 0 0-.111-.235.501.501 0 0 0-.339-.126H7.71l-2-1.818H3.2zm-1.358-.975A2 2 0 0 1 3.2 2.25h3.09l2 1.818h4.51a2 2 0 0 1 1.358.525c.371.344.592.823.592 1.336v5.96c0 .513-.22.992-.592 1.336a2 2 0 0 1-1.358.525H3.2a2 2 0 0 1-1.358-.525 1.821 1.821 0 0 1-.592-1.336V4.11c0-.513.22-.992.592-1.336z"
                                  clip-rule="evenodd"></path>
                              </svg></div>
                            <div class="menu-nameLabel ">Our analytics</div>
                          </a></li>
                        <div class="absolute rounded pointer-events-none"
                          style="inset: 0px; z-index: -1; box-sizing: border-box;"></div>
                      </div>
                    </div>
                    <div data-testid="sidebar-collection-link-root">
                      <div class="relative">
                        <li role="treeitem" aria-selected="false" class="sidebar-section "><button hidden=""
                            class="emotion-8o13g8 "><svg fill="currentcolor"
                              viewBox="0 0 16 16" role="img" aria-label="chevronright icon"
                              class="Icon Icon-chevronright emotion-h5sun0 " width="12" height="12">
                              <path
                                d="M4.47 14.53a.75.75 0 0 1 0-1.06L9.94 8 4.47 2.53a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06 0z">
                              </path>
                            </svg></button><a class="emyths83 list-item "
                            href="/">
                            <div class="menu-list-item "><svg
                                fill="currentcolor" viewBox="0 0 16 16" role="img" aria-label="person icon"
                                class="Icon Icon-person menu-icon " width="16" height="16">
                                <path
                                  d="M8 1.25a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zM6.25 4.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0zM3.75 12c0-.69.56-1.25 1.25-1.25h6c.69 0 1.25.56 1.25 1.25v2a.75.75 0 0 0 1.5 0v-2A2.75 2.75 0 0 0 11 9.25H5A2.75 2.75 0 0 0 2.25 12v2a.75.75 0 0 0 1.5 0v-2z">
                                </path>
                              </svg></div>
                            <div class="menu-nameLabel ">Your personal collection</div>
                          </a></li>
                        <div class="absolute rounded pointer-events-none"
                          style="inset: 0px; z-index: -1; box-sizing: border-box;"></div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </aside>
        <main class="dash-main-section ">
          <div data-testid="home-page" class="dash-main-content  ">
            <div class="main-section-div "></div>
            <div class="main-section__header "><img class="e8fnu991 option-customize " alt="Metabot"
                src="http://localhost:3000/app/assets/img/metabot-happy.svg"/><span data-testid="greeting-message"
                class="greet-name e8fnu990">Greetings, sriram</span></div><button
              class="Button e1pk1j4f0 Button--borderless main-section__title ">
              <div class="emotion-zxs4gr "><svg fill="currentcolor"
                  viewBox="0 0 16 16" role="img" aria-label="pencil icon" class="Icon Icon-pencil" width="16"
                  height="16">
                  <path
                    d="M11.177 3.237a.25.25 0 0 0-.354 0l-7.146 7.146-.646 2.586 2.586-.646 7.146-7.146a.25.25 0 0 0 0-.354l-1.586-1.586zm-1.414-1.06a1.75 1.75 0 0 1 2.475 0l1.585 1.586a1.75 1.75 0 0 1 0 2.474L6.53 13.53a.75.75 0 0 1-.348.198l-4 1a.75.75 0 0 1-.91-.91l1-4a.75.75 0 0 1 .198-.348l7.293-7.293z">
                  </path>
                </svg>
                <div class=" header__menu-option ">Customize</div>
              </div>
            </button>
            <div class="main-container ">
              <div>
                <div class="container-layout ">Try out these sample x-rays to see what Metabase can do.</div>
                <div class="container-inner "><a class="e1rug5j00 navigator-link "
                    href="/"><svg fill="currentcolor"
                      viewBox="0 0 16 16" role="img" aria-label="bolt_filled icon"
                      class="Icon Icon-bolt_filled emotion-6l5vij " width="16" height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">Some
                        insights about</span> <span class="emotion-1w83hqr ">Accounts</span></div>
                  </a><a class="e1rug5j00 navigator-link " href="/"><svg
                      fill="currentcolor" viewBox="0 0 16 16" role="img"
                      aria-label="bolt_filled icon" class="Icon Icon-bolt_filled emotion-6l5vij e1kw1tj83" width="16"
                      height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">Some
                        insights about</span> <span class="emotion-1w83hqr e1kw1tj81">People</span></div>
                  </a><a class="e1rug5j00 navigator-link emeibx70" href="/"><svg
                      fill="currentcolor" viewBox="0 0 16 16" role="img"
                      aria-label="bolt_filled icon" class="Icon Icon-bolt_filled emotion-6l5vij e1kw1tj83" width="16"
                      height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">A look
                        at</span> <span class="emotion-1w83hqr e1kw1tj81">Orders</span></div>
                  </a><a class="e1rug5j00 navigator-link emeibx70" href="/"><svg
                      fill="currentcolor" viewBox="0 0 16 16" role="img"
                      aria-label="bolt_filled icon" class="Icon Icon-bolt_filled emotion-6l5vij " width="16"
                      height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">A summary
                        of</span> <span class="emotion-1w83hqr ">Analytic Events</span></div>
                  </a><a class="e1rug5j00 navigator-link " href="/"><svg
                      fill="currentcolor" viewBox="0 0 16 16" role="img"
                      aria-label="bolt_filled icon" class="Icon Icon-bolt_filled emotion-6l5vij " width="16"
                      height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">A summary
                        of</span> <span class="emotion-1w83hqr ">Products</span></div>
                  </a><a class="e1rug5j00 navigator-link " href="/"><svg
                      fill="currentcolor" viewBox="0 0 16 16" role="img"
                      aria-label="bolt_filled icon" class="Icon Icon-bolt_filled emotion-6l5vij " width="16"
                      height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">A glance
                        at</span> <span class="emotion-1w83hqr ">Feedback</span></div>
                  </a>
                  <a class="e1rug5j00 navigator-link " href="/"><svg
                      fill="currentcolor" viewBox="0 0 16 16" role="img"
                      aria-label="bolt_filled icon" class="Icon Icon-bolt_filled emotion-6l5vij " width="16"
                      height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">A look
                        at</span> <span class="emotion-1w83hqr ">Reviews</span></div>
                  </a><a class="e1rug5j00 navigator-link " href="/">
                    <svg
                      fill="currentcolor" viewBox="0 0 16 16" role="img"
                      aria-label="bolt_filled icon" class="Icon Icon-bolt_filled emotion-6l5vij " width="16"
                      height="16">
                      <path
                        d="M5 2.25a.75.75 0 0 0-.738.616l-1 5.5A.75.75 0 0 0 4 9.25h2.085l-.82 4.103a.75.75 0 0 0 1.285.657l6.5-7a.75.75 0 0 0-.55-1.26H9.994l.727-2.544A.75.75 0 0 0 10 2.25H5z">
                      </path>
                    </svg>
                    <div class="e1kw1tj82 emotion-1x4jka0 "><span class="detail-card ">A glance
                        at</span> <span class="emotion-1w83hqr ">Invoices</span></div>
                  </a>

                  <a href="/" class="efc1fv52 navigator-link "
                    target="_blank" rel="noopener noreferrer" aria-labelledby="2"><svg
                      fill="currentcolor" fill-rule="evenodd" clip-rule="evenodd"
                      viewBox="0 0 16 16" role="img" aria-label="reference icon"
                      class="Icon Icon-reference emotion-s9npsu " width="16" height="16">
                      <path
                        d="M2 2.25a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h3.172c.331 0 .649.132.883.366L7.47 14.53a.75.75 0 0 0 1.06 0l1.415-1.414a1.25 1.25 0 0 1 .883-.366H14a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-3.172c-.729 0-1.428.29-1.944.805L8 3.94l-.884-.883a2.75 2.75 0 0 0-1.944-.806H2zm.75 9v-7.5h2.422c.331 0 .649.132.883.366L7.25 5.311v6.878l-.134-.133a2.75 2.75 0 0 0-1.944-.806H2.75zm6 .94.134-.135a2.75 2.75 0 0 1 1.944-.805h2.422v-7.5h-2.422a1.25 1.25 0 0 0-.883.366L8.75 5.311v6.878z">
                      </path>
                    </svg>
                    <div id="2" class="emotion-1u1vgtp ">Metabase tips</div>
                  </a>
                
                </div>
              </div>
            </div>
          </div>
        </main>
        <div data-testid="status-root-container" class="emotion-khac55 eg0s1uo0"></div>
      </div>
    </div>
  </div>
  
  <div dir="ltr">
    <div class="emotion-Popover-dropdown drop-menues popup-action" aria-labelledby="mantine-a1rdyjxjk-target"
      id="mantine-a1rdyjxjk-dropdown" role="dialog" tabindex="-1" data-position="bottom-end"
      data-popover="mantine-popover">
      <ol class="ol-headerMenu" style="min-width: 184px;">
        <li><a data-testid="entity-menu-link" class="emotion-4zleql " href="/">
            <div class="menu-nav-list e1tn1dn24"><span class="emotion-1efi8gv ">Account settings</span></div>
          </a></li>
        <li><a data-testid="entity-menu-link" class="emotion-4zleql " href="/">
            <div class="menu-nav-list e1tn1dn24"><span class="emotion-1efi8gv ">Admin settings</span></div>
          </a></li>
        <li><a
            href="/"
            class="e1tn1dn20 emotion-sbppjs " target="_blank" rel="noopener noreferrer"
            data-testid="entity-menu-link">
            <div class="menu-nav-list "><span class="emotion-1efi8gv ">Help</span></div>
          </a></li>
        <li>
          <div>
            <div class="menu-nav-list e1tn1dn24"><span class="emotion-1efi8gv ">About Metabase</span></div>
          </div>
        </li>
        <li><a
          href="/login.html"
          class="e1tn1dn20 emotion-sbppjs " target="_blank" rel="noopener noreferrer"
          data-testid="entity-menu-link">
          <div class="menu-nav-list "><span class="emotion-1efi8gv ">Sign out</span></div>
        </a></li>
      </ol>
    </div>
  </div>
  
      
    </>
  )
}

export default Sidebar
