import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import Stopwatch from '../components/stopwatch';
import style from './app.module.scss';
import {iTarefas} from '../types/iTarefa';

function App() {
  const [tarefas, setTarefa] = useState<iTarefas[]>([]);
  return (
    <div className={style.AppStyle}>
        <Form setTarefas={setTarefa} />
        <List tarefas={tarefas} />
        <Stopwatch />
    </div>
  );
}

export default App;
