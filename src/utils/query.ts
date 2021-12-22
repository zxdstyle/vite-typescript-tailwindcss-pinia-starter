export function getQueryString(a: string) {
	const b = new RegExp('(^|&)' + a + '=([^&]*)(&|$)', 'i')
	const r = window.location.search.substr(1).match(b)
	if (r != null) return unescape(r[2])
	return null
}
