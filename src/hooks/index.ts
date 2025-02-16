import axios from 'axios'
import { useState } from 'react'

import { Service } from '../types'

export const useResource = <T, NewT>(baseUrl: string): [T[], Service<NewT>] => {
  const [resources, setResources] = useState<T[]>([])

  const getAll = async () => {
    const response = await axios.get<T[]>(baseUrl)
    setResources(response.data)
  }

  const create = async (newObj: NewT) => {
    const response = await axios.post<T>(baseUrl, newObj)
    setResources([...resources, response.data])
  }

  const service: Service<NewT> = { getAll, create }
  return [resources, service]
}

export const useField = (type: string, name: string) => {
  const [value, setValue] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return [{ type, name, value, onChange }, reset] as const
}
