import { post, get, destroy, put } from '@/utils/http'

class ResourceApi {
	resource = ''

	Index(params: any) {
		return get(`api/v1/${this.resource}`, params)
	}

	Show(id: number, params = {}) {
		return get(`api/v1/${this.resource}/${id}`, params)
	}

	Create(param: any) {
		return post(`api/v1/${this.resource}`, param)
	}

	Update(id: number, param: any) {
		return put(`api/v1/${this.resource}/${id}`, param)
	}

	Destroy(id: number) {
		return destroy(`api/v1/${this.resource}/${id}`)
	}
}

export default ResourceApi
