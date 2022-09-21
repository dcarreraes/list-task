import React, { useEffect } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { FaSave } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { add, update } from '../app/listTask'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

export default function TaskAdd(props) {
  const { show, close, task } = props
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.value)

  useEffect(() => {
    if (Object.keys(task).length > 0) {
      setValue('name', task.name)
    } else {
      setValue('name', '')
    }
  }, [task, setValue])

  const handleClose = () => {
    close(false)
  }

  const onSubmit = data => {
    if (Object.keys(task).length > 0) {
      let newData = tasks.map((item, index) => {
        if (item.id === task.id) {
          return {
            ...item,
            'name': data.name
          }
        }
        return item
      })
      dispatch(update(newData))
      toast.success("Tarea actualizada!")
    } else {
      toast.success("Tarea agregada!")
      dispatch(add({ id: uuidv4(), name: data.name }))
    }
    close(false)
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header closeButton>
            <Modal.Title>{(Object.keys(task).length > 0 ? 'Editar' : 'Agregar') + ' tarea'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de la tarea</Form.Label>
              <Form.Control type="name" {...register("name", { required: true })} />
              {errors.name && <span>Campo requerido</span>}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="success" type="submit">
              <FaSave /> Guardar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
