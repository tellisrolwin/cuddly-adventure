import React from "react";

export default function Footer1() {
  return (
    <div>
      <footer
        class="text-center"
        style={{
          backgroundColor: "cyan",
          zIndex: "5",
          borderRadius: "40px 40px 0px 0px",
        }}
      >
        <div class="container pt-4">
          <section class="mb-4">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/LEGO/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://twitter.com/LEGO_Group"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://m.youtube.com/user/LEGO"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-youtube"></i>
            </a>

            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/lego"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </section>
        </div>

        <div class="text-center p-3">
          ©2024
          <a class="text-dark" href="https://lego.com/">
            LEGO
          </a>
        </div>
      </footer>
    </div>
  );
}
