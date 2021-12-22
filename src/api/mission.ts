import { get } from '@/utils/http'
import ResourceApi from '@/api/api'

class Mission extends ResourceApi {
	List(params = {}): any {
		return get('/mission/getMyMissionList', params)
	}
}

export default new Mission()
