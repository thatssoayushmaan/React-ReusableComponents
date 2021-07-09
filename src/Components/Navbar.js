import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 fixed-top shadow">
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
          </div>
        </form>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow d-sm-none">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>

              <span className="badge badge-danger badge-counter">3+</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-chat-left"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">March 10, 2019</div>
                  <span className="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-exclamation-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="/#"
              >
                Show All Alerts
              </a>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-open"
                viewBox="0 0 16 16"
              >
                <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
              </svg>

              <span className="badge badge-danger badge-counter">7</span>
            </a>

            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="data:image/png;base64,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"
                    alt="..."
                    style={{ width: "100", height: "100" }}
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="data:image/png;base64,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"
                    alt="..."
                    style={{ width: "80", height: "80" }}
                  />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://previews.123rf.com/images/pandavector/pandavector1607/pandavector160700160/60027009-girl-icon-flat-single-avatar-people-icon-from-the-big-avatar-collection-stock-vector.jpg"
                    alt="..."
                    style={{ width: "80", height: "80" }}
                  />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="/#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div className="small text-gray-500">
                    Chicken the Dog · 2w
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="/#"
              >
                Read More Messages
              </a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="/#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Ayushmaan Verma
              </span>
              <img
                className="img-profile rounded-circle"
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg"
                alt="userimg"
              />
            </a>

            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                Profile
              </a>
              <a className="dropdown-item" href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-gear-wide"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                </svg>
                Settings
              </a>
              <a className="dropdown-item" href="/#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-door-open"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                  <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                </svg>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="/#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
