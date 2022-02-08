import React from 'react';
import BurgerMenu from './Images/HamburgerMenu.svg';
import Menu from './Menu';
import Profile from './Profile';
import Todo from './Todo';
function App() {

  const [OpenSideMenu, setOpenSideMenu] = React.useState(false);
  const [TodoAmount, setTodoAmount] = React.useState(0);
  const [TodoList, setTodoList] = React.useState(['']);
  return (
    <>
      <div className=''>
        <main>
          <div className="flex flex-col items-center w-full h-screen p-3">
            <Profile></Profile>

            <div className="w-full h-[2px] bg-gray-300 my-2"></div>

            <div className='w-full h-5/6 overflow-auto'>
              <Todo
                TodoAmount={TodoAmount}
                setTodoAmount={setTodoAmount}
                setTodoList={setTodoList}
              ></Todo>
              <button onClick={() => (TodoAmount + 1)}
                className="w-11 h-11 bg-orange-200 rounded-md my-1">
              </button>
            </div>
          </div>
        </main>
        {console.log(TodoAmount)}

        <footer>
          <div className='flex justify-between absolute inset-x-0 bottom-0 z-0 sm:h-screen sm:w-12 h-16 w-screen bg-white text-white items-center p-2 border-t-2'>
            <Menu 
              OpenSideMenu={OpenSideMenu} 
            />
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
