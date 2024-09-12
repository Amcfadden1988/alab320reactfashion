import Header from './Components/Header';

function Header() {
  return (

<header>
<h1> Sartre's List </h1>

<h2>Better-Dressed People</h2>

  <nav aria-label="Main Navigation" role="navigation">
<ul>   
    <li><a href="#" class="lightgray">Women's</a></li>
    <li><a href="#" class="lightgray">Men's</a></li>
    <li><a href="#" class="lightgray">On the Street</a></li>
    <li><a href="#" class="lightgray">The Catwalk</a></li>
    <li><a href="#" class="lightgray">AdWatch</a></li>
    <li><a href="#" class="lightgray">About</a></li>
  </ul>
</nav>

</header>
  );
}

export default Header;