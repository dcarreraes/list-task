import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Table, Button } from 'react-bootstrap'
import { FaPen, FaPlus, FaTrash } from 'react-icons/fa'
import TaskAdd from './TaskAdd'
import styles from '../styles/Task.module.css'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { update } from '../app/listTask'

export default function Task() {
  const tasks = useSelector(state => state.tasks.value)
  const [openTaskAdd, setOpenTaskAdd] = useState(false)
  const [task, setTask] = useState({})
  const dispatch = useDispatch()

  const deleteTask = (taskData) => {
    let newData = tasks.filter(function (el) { return el.id !== taskData.id; });
    dispatch(update(newData))
    toast.success("Tarea eliminada!")
  }

  return (
    <div>
      <div>
        <Button variant="success" size="sm" className={styles.add} onClick={() => {
          setOpenTaskAdd(true)
        }}><FaPlus /> Agregar tarea</Button>
        <Table striped>
          <thead>
            <tr>
              <th>Nombre</th>
              <th className={styles.col}></th>
              <th className={styles.col}></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => {
              return <tr key={task.id}>
                <td>{task.name}</td>
                <td><Button variant="warning" size="sm" onClick={() => {
                  setTask(task)
                  setOpenTaskAdd(true)
                }}><FaPen /> Editar</Button></td>
                <td><Button variant="danger" size="sm" onClick={() => deleteTask(task)}><FaTrash /> Eliminar</Button></td>
              </tr>
            })}
          </tbody>
        </Table>
        <TaskAdd
          show={openTaskAdd}
          task={task}
          close={(data) => {
            setTask({})
            setOpenTaskAdd(false)
          }} />
      </div>
    </div >
  )
}