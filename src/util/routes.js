import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const TodoList = lazy(() => import('../pages/todoList/TodoList'));
const TicTacToe = lazy(() => import('../pages/ticTacToe/TicTacToe'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
