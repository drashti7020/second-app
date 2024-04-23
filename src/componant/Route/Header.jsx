import React from 'react'

const Header = () => {
  return (
    <>
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Information</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>     
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Header