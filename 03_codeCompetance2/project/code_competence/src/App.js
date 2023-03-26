import React from "react";
import "./App.css"
import { img1, img2 } from "./assets";


const App = () => {
  return (
    <>
      <>
        <title>Jaya Wijaya</title>
        <link rel="stylesheet" href="src/index.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
        />
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-dark-subtle" id="navbarMain">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="https://id.wikipedia.org/wiki/Pegunungan_Jayawijaya"
            >
              <img
                src={img2}
                className="img-gunung"
                alt=""
              />
            </a>
            <a
              className="navbar-brand fst-italic fw-bold"
              id="judul"
              href="https://id.wikipedia.org/wiki/Pegunungan_Jayawijaya"
            >
              JayaWijaya
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="judul"
                    aria-current="page"
                    href="#navbarMain"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="judul"
                    href="https://google.com"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <ul className="dropdown-menu" id="judul">
                    <li>
                      <a
                        className="dropdown-item"
                        id="judul"
                        href="https://goo.gl/maps/hDbzWzi5BffJ2WPL8"
                      >
                        Maps
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        id="judul"
                        href="https://duckduckgo.com/?q=gunung+jaya+wijaya&t=h_&iax=images&ia=images&iai=https%3A%2F%2F4.bp.blogspot.com%2F-jiko9z3TnK8%2FUYN4EF0DMJI%2FAAAAAAAAAKE%2FbAWJYGtqJsw%2Fs400%2Fgunung-jaya-wijaya-papua-gunung-tertinggi-di-indonesia.jpg"
                      >
                        Image
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        id="judul"
                        href="https://google.com"
                      >
                        Something else
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="judul" href="https://google.com">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* /Navbar */}
        {/* Main Section */}
        <div className="container-fluid bg-body-secondary border-top border-dark-subtle">
          <div className="d-grid text-center pt-4">
            <h1 className="fs-1 fw-bold">WELCOME TO OUR WEBSITE</h1>
            <h2 className="fs-2 fst-italic mt-3">Gunung JayaWijaya</h2>
            <img
              src={img1}
              className="m-auto mt-2 mb-2"
              alt=""
              style={{ width: "40%", height: "auto" }}
            />
            <p className="fs-5 fw-lighter mt-2 mb-4 ms-5 me-5">
              Pegunungan Jayawijaya adalah rangkaian pegunungan yang membujur di
              Provinsi Papua Tengah, Indonesia. Pegunungan Jayawijaya adalah
              rangkaian pegunungan tertinggi di Indonesia, dengan puncak
              tertingginya yaitu Puncak Jaya (4.884 meter dari permukaan laut).
              Di puncak pegunungan Jayawijaya terdapat salju abadi yang
              jumlahnya semakin menipis akibat pemanasan global.
            </p>
          </div>
        </div>
        {/* /Main Section */}
        {/* Description */}
        <div className="container-fluid bg-light">
          <div className="row text-center border-top border-dark-subtle pt-3">
            <div className="col-6">
              <h1 className="fs-3 ">
                Fakta Menarik Gunung Jaya Wijaya
                <br />
                Sebagai Gunung Tertinggi di Indonesia
              </h1>
              <p className="fs-6 text-start mt-3">
                1. Orang pertama yang sampai ke puncak gunung Jaya <br />{" "}
                WijayaHeinrich Harrer adalah orang pertama yang berhasil
                mencapai ke puncak gunung tertinggi di Indonesia ini. ia adalah
                seorang pria yang berkebangsaan Austria yang berhasil menjadi
                orang pertama yang mencapai puncak Jaya Wijaya di tahun 1962.
                Pendakiannya dibantu oleh 3 anggota ekspedisi lainnya, yaitu
                Russell Kippax, Bertus Huizenga, serta Robert Philip Temple,
                akhirnya Heinrich berhasil menaklukan gunung Jaya Wijaya yang
                menjadi gunung tertinggi di Indonesia.
              </p>
              <p className="fs-6 text-start">
                2. Memiliki Salju Abadi <br /> Indonesia memiliki status sebagai
                negara yang beriklim tropis karena dilintasi oleh garis
                khatulistiwa atau garis lintang yang memanjang, yang membuat
                mustahil Indonesia dihiasi oleh salju. Akan tetapi, uniknya,
                salju bisa ditemukan di puncak Jaya Wijaya. Hal ini juga yang
                menjadikan Gunung Jaya Wijaya sebagai satu-satunya tempat yang
                bersalju di Indonesia.
              </p>
              <p className="fs-6 text-start">
                3. Gletser di Puncak Gunung <br /> Selain dilapisi salju pada
                puncaknya, Gunung ini juga dilengkapi dengan gletser. Gletser
                adalah lapisan es yang terbentuk akibat dari adanya tumpukan
                salju yang selama puluhan tahun. Kondisi ini juga memberikan
                keuntungan sebagai sumber persediaan air tawar untuk kawasan di
                sekelilingnya.
              </p>
            </div>
            <div className="col-4">
              <h1 className="fs-3">Sejarah</h1>
              <p className="fs-6 text-start mt-5">
                Dataran tinggi di sekitar puncak awalnya sudah dihuni sebelum
                adanya kontak dengan bangsa Eropa, dan puncaknya dikenal sebagai
                Nemangkawi di Amungkal. Puncak Jaya sebelumnya bernama Piramida
                Carstensz setelah penjelajah Belanda Jan Carstenszoon menamainya
                ketika pertama kali melihat gletser di puncak gunung pada hari
                yang cerah pada tahun 1623. <br /> Padang salju (gletser) Puncak
                Jaya berhasil didaki pada awal tahun 1909 oleh seorang
                penjelajah Belanda, Hendrikus Albertus Lorentz dengan enam orang
                suku Kenyah yang direkrut dari Apau Kayan di Kalimantan Utara.
                Taman Nasional Lorentz yang juga meliputi Piramida Carstensz,
                didirikan pada tahun 1919 menyusul laporan ekspedisi ini.
              </p>
            </div>
            <div className="col-2">
              <h1 className="fs-3">Lokasi</h1>
              <p className="fs-6 text-start mt-5">
                Provinsi: Papua <br />
                Puncak tertinggi: Puncak Mandala <br /> Negara: Indonesia
              </p>
              <div className="text-start">
                <a
                  href="https://goo.gl/maps/hDbzWzi5BffJ2WPL8"
                  className="icon"
                >
                  <i className="bi bi-geo-alt" />
                  Maps
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /Description */}
        {/* Contact Us */}
        <div className="container-fluid bg-light">
          <div className="row pt-3 pb-4 m-auto">
            <div className="col-7 text-center m-auto">
              <h1 className="fs-2 fw-bold">Contact Us</h1>
              <p className="fs-4">
                Have suggestions for us please contact us, <br /> please fill in
                beside.
              </p>
            </div>
            <div className="col-5">
              <form id="contactUs" action="">
                <div className="row">
                  <div className="col">
                    <label htmlFor="First name" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      id="firstName"
                      required=""
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="Last name" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      id="lastName"
                      required=""
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required=""
                  />
                </div>
                <div className="has-validation mt-3">
                  <label htmlFor="Description" className="form-label">
                    What can we help you with?
                  </label>
                  <textarea
                    className="form-control"
                    id="Description"
                    rows={4}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary m-auto mt-5 mb-5"
                  style={{ width: "100%" }}
                  onclick="submitForm()"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* /Contact Us */}
        {/* Footer */}
        <footer className="container-fluid bg-dark-subtle pb-1">
          <div className="row pt-3">
            <div className="col-5 ps-4">
              <h1 className="fs-3 fw-bold">JayaWijaya</h1>
              <p className="fs-6 mb-0 mt-4">Contact Person:</p>
              <p className="fs-6 mb-0">
                <i className="bi bi-whatsapp fs-6 me-1" />
                +62 81232803452
              </p>
            </div>
            <div className="col-4">
              <h1 className="fs-3 fw-bold">Alamat</h1>
              <p className="fs-6 mb-0 mt-4">
                <i className="bi bi-geo-alt me-1" />
                Soline, Kec. Soloikma, Kabupaten Yahukimo, Papua
              </p>
            </div>
            <div className="col-3">
              <h1 className="fs-3 fw-bold">Social Media</h1>
              <p className="fs-6 mb-0">My Social Media Account:</p>
              <div className="d-flex">
                <a href="https://github.com/elfill03/">
                  <i className="bi bi-github fs-3 me-3" />
                </a>
                <a href="https://www.instagram.com/el.fill_/">
                  <i className="bi bi-instagram fs-3 me-3" />
                </a>
                <a href="https://www.youtube.com/channel/UCEa3-Bo6GHXzjPanQ2pvdjw">
                  <i className="bi bi-youtube fs-3 me-3" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009493020354">
                  <i className="bi bi-facebook fs-3 " />
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <h1 className="fs-6 text-center mt-4 pt-3 border-top border-dark">
              © Copyright 2023. by Rafael Fillah. All Rights Reserved.
            </h1>
          </div>
        </footer>
        {/* /Footer */}
      </>
    </>
  );
};

export default App;
