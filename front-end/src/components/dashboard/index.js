import React, { Component } from "react";
import { Link } from "react-router-dom";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child: props.nestedRoute,
      search: "",
    };
  }
  componentDidMount() {
    this.activeNav();
  }
  activeNav() {
    const pathname = window.location.pathname;
    const possibleRoutes = [
      { routes: "/dashbord", targetId: "home" },
      { routes: "/addProduct", targetId: "addProduct" },
    ]
    possibleRoutes.forEach(({ route, targetId }) => {
      window.jQuery(`#${targetId}`).removeClass("active")
      if (route === pathname) {
        window.jQuery(`#${targetId}`).addClass("active")
      }
    })
  }
  render() {
    const Child =this.state.child;
    return (
      <div>
        <div id="wrapper">
          <ul
            class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <Link
              class="sidebar-brand d-flex align-items-center justify-content-center"
              to="#"
            >
              <div class="sidebar-brand-text mx-3">e-shop</div>
            </Link>

            <li class="nav-item">
              <Link
                class="nav-link collapsed"
                to="#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <span>Marchant Store</span>
              </Link>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div class="bg-white py-2 collapse-inner rounded">
                  <h6 class="collapse-header">Custom Components:</h6>
                  <Link class="collapse-item" to="#">
                    Buttons
                  </Link>
                </div>
              </div>
            </li>
            <hr class="sidebar-divider d-none d-md-block" />
          </ul>

          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>

                <ul class="navbar-nav ml-auto">
                  <div class="topbar-divider d-none d-sm-block"></div>

                  <li class="nav-item dropdown no-arrow">
                    <Link
                      class="nav-link dropdown-toggle"
                      to="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                        Douglas McGee
                      </span>
                      <img
                        class="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </Link>

                    <div
                      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <Link class="dropdown-item" to="#">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </Link>
                      <Link class="dropdown-item" to="#">
                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </Link>
                      <Link class="dropdown-item" to="#">
                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </Link>
                      <div class="dropdown-divider"></div>
                      <Link class="dropdown-item" to="#">
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              <Child {...this.props} search={this.state.search}></Child>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default index;
