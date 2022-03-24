const Header = ({title, length}) => {

  return (
    <header className='App-header'>
        <h1>{ title }</h1>
        <p>({length})</p>
    </header>
  )
}

export default Header;