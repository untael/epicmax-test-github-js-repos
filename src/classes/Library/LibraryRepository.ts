import { AxiosRequestConfig } from 'axios'
import { executeApiRequest } from '../../plugins/axios'
import Library from './Library'
import Mapper from '../../helpers/Mapper'

const API_URL = 'https://api.github.com/search/repositories'
const mapperInstance = new Mapper()
const defaultParams: any = {
  page: 1,
  q: 'javascript',
  sort: 'stars',
  order: 'desc',
  type: 'Repositories',
  per_page: 20,
}

const get = async (params?: any): Promise<Library[]> => {
  const request: AxiosRequestConfig = {
    method: 'get',
    url: API_URL,
    params: params ? params : defaultParams,
  }
  const requestedLibs = await executeApiRequest(request)
  const libraries: Library[] = requestedLibs.items.map((lib: any) => mapperInstance.map(Library, lib))
  return libraries
}

export default {
  get,
}
