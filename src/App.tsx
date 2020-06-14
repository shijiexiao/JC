import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
const App: React.FC = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Menu defaultIndex={0} onSelect={(index) => { alert(index) }}>
          <MenuItem index={0} >cool link</MenuItem>
          <MenuItem index={1} disabled>cool link</MenuItem>
          <MenuItem index={2} >cool link</MenuItem>
        </Menu>
        <br />
        <Menu mode="vertical" defaultIndex={0} onSelect={(index) => { alert(index) }}>
          <MenuItem index={0} >cool link</MenuItem>
          <MenuItem index={1} disabled>cool link</MenuItem>
          <MenuItem index={2} >cool link</MenuItem>
        </Menu>
        <Button autoFocus >autofocus</Button>
        <Button onClick={(e) => { e.preventDefault(); alert(3); }} >autofocus</Button>
        <Button>jack</Button>
        <Button disabled>jack</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>hello</Button>
        <Button btnType={ButtonType.Link} href='http:www.bidu.com' target="_blank">baidu</Button>
        <Button btnType={ButtonType.Link} disabled href='http:www.bidu.com'>hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
